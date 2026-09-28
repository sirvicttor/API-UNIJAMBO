import banco from "../dados/db.js";
const listar = async (pedido,resposta) => {
const [cursos] = await banco.query('select * from cursos')
resposta.json(cursos)
}

const criar = async (pedido,resposta) => {
    const {nome, codigo, id_curso} = pedido.body
    const [resultado] = await banco.query('insert into cursos(nome, codigo, id_curso) values(?,?,?)',
        [nome, codigo, id_curso]
    )
    resposta.json({id: resultado.insertid,nome, codigo, id_curso})
}

const editar = async (pedido,resposta) => {
    const {nome, codigo, id_curso} = pedido.body
    const {id} = pedido.params
    
    const [resultado] = await banco.query(
        'updade cursos set nome = ?, codigo =?, id_curso = ?',
    [nome, codigo, id_curso])

    if(resultado.affectedRows === 0) {
        resposta.json({mensagem: 'curso não encontrado!'})
    }
    resposta.json ({mensagem: 'curso editado com sucesso!'})
}   

const deletar = async (pedido,resposta) => {
    const {id} = pedido.params
    const {resultado} = await banco.query ('delete from cursos where id = ?', [id])

    if(resultado.affectedRows === 0) {
        resposta.json ({mensagem: 'curso nao encontrado!' })
    }
     resposta.json ({mensagem: 'curso deletado com sucesso!' })
}

export{listar, criar, editar, deletar}
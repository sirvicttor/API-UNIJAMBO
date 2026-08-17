const nome = "Victor"
let idade = 31

console.log(nome)
console.log(idade)

let aluno ={
    nome: "Felipe",
    idade: 23
}

console.log(aluno)

const alunos = [
    {
        nome: "Laura",
        idade: 26
    },
    {
        nome: "Sancho",
        idade: 19
    }
]

alunos.push(
    {
        nome: "ana luiza",
        idade: 20
    }
)

function mostrarAlunos() {
    console.log(alunos)
}

mostrarAlunos()

function somarIdades () {
    let idade = 0
    for(i=0; i < alunos.length; i++) {
        idade = idade + alunos[i].idade
    }
    
    return idade
}

console.log(somarIdades())

alunos.push({
        nome: "Silvia",
        idade: 28
    })

console.log(somarIdades())
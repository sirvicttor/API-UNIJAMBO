import mysql from 'mysql2/promise'
const banco = await mysql.createConnection({
    host:'escola-ifg-escola-ifg.f.aivencloud.com',
    port: 10556,
    user:'avnadmin',
    password:'AVNS_cJs_8wuNeZ1MwOsHjqS',
    database:'escola'
    ssl:{
        rejectUnauthorized: false
    }
})
export default banco

const professores = []
const disciplinas = []
const cursos = []
const turmas = []

export {professores, disciplinas, cursos, turmas}
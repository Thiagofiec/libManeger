const BD = require('../config/BD')

// pegar todos emprestimos

exports.getTodos = async () => {
        const [rows] = await  BD.query(
            'SELECT * FROM emprestimo'
        )

        return rows
}

//pegar emprestimo pelo id

exports.getId = async (id) => {
        const [rows] = await BD.query(
            'SELECT * from emprestimo where id = ?',
            [id]
        )
        return rows 
    } 

//pegar emprestimos de um usuario

exports.getByUsuario = async (usuario) => {
        const [rows] = await BD.query(
            'SELECT * from emprestimo where id_usuario = ?',
            [usuario]
        )
        return rows 
    } 

//pegar emprestimos de um livro

exports.getByLivro = async (livro) => {
        const [rows] = await BD.query(
            'SELECT * from emprestimo where id_livro = ?',
            [livro]
        )
        return rows 
    } 

// fazer emprestimo

exports.registrar = async (usuario, livro) => {
    const [resultado] = await BD.query(
        'insert into emprestimo(concluido,id_usuario,id_livro) values(0,?,?)',
        [usuario,livro]
    )

    return resultado      
}

// concluir emprestimo

exports.concluir = async (id) => {

    const [resultado] = await BD.query(
        'update emprestimo set concluido = 1 where id = ?',
        [id]
    )

    return resultado
}

const BD = require('../config/BD')

// pegar todos livros

exports.getTodos = async () => {
        const [rows] = await  BD.query(
            'SELECT * FROM livro'
        )

        return rows
}

// pegar livro por id

exports.getId = async (id) => {
        const [rows] = await BD.query(
            'SELECT * from livro where id_livro = ?',
            [id]
        )
        return rows 
    } 


// cadastrar livro

exports.cadastrar = async (titulo,autor,lancamento) => {
    const [resultado] = await BD.query(
        'insert into livro(titulo,autor,lançamento,disponivel,ativo) values(?,?,?,1,1)',
        [titulo,autor,lancamento]
    )

    return resultado      
}

//desativar livro

exports.desativar = async (id) => {

    const [resultado] = await BD.query(
        'update livro set ativo = 0 where id_livro = ?',
        [id]
    )

    return resultado
}

//reativar livro

exports.reativar = async (id) => {

    const [resultado] = await BD.query(
        'update livro set ativo = 1 where id_livro = ?',
        [id]
    )

    return resultado
}
      


// indisponibilizar livros 

exports.indisponibilizar = async (id) => {

    const [resultado] = await BD.query(
        'update livro set disponivel = 0 where id_livro = ?',
        [id]
    )

    return resultado
} 


// disponibilizar livros 

exports.disponibilizar = async (id) => {

        const [resultado] = await BD.query(
            'update livro set disponivel = 1 where id_livro = ?',
            [id]
        )

        return resultado
}


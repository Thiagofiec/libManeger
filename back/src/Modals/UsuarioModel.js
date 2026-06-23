const BD = require('../config/BD')

// pegar todos usuarios

exports.getTodos = async () => {
        const [rows] = await  BD.query(
            'SELECT * FROM Usuario'
        )

        return rows
}

// pegar usuario por id

exports.getId = async (id) => {
        const [rows] = await BD.query(
            'SELECT * from Usuario where id_usuario = ?',
            [id]
        )
        return rows 
    } 


// cadastrar usuario

exports.cadastrar = async (nome,email,telefone,cpf,senha,tipo) => {
    const [resultado] = await BD.query(
        'insert into Usuario(nome,email,telefone,cpf,senha_hash,tipo,ativo) values(?,?,?,?,?,?,1)',
        [nome,email,telefone,cpf,senha,tipo]
    )

    return resultado      
}

//desativar usuario

exports.desativar = async (id) => {

    const [resultado] = await BD.query(
        'update Usuario set ativo = 0 where id_usuario = ?',
        [id]
    )

    return resultado
}

//reativar usuario

exports.reativar = async (id) => {

    const [resultado] = await BD.query(
        'update Usuario set ativo = 1 where id_usuario = ?',
        [id]
    )

    return resultado
}

// login do usuario/ pegar usuario por email

exports.login = async (email) => {

    const [row] = await BD.query(
        'SELECT senha_hash FROM usuario where email = ?',
        [email]
    )

    return row[0] || null
}
      

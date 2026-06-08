BD = require('./BD')

// pegar todos usuarios

exports.getTodosUsuarios = async (req,res) => {
    try {
        const [rows] = await  BD.query(
            'SELECT * FROM Usuario'
        )

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

// pegar usuario por id

// cadastrar usuario

//desativar usuario
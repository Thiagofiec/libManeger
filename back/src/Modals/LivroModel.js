BD = require('./BD')

// pegar todos livros

exports.getTodosLivros = async (req,res) => {
    try {
        const [rows] = await  BD.query(
            'SELECT * FROM livro'
        )

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

// pegar livro por id

// cadastrar livro

//desativar livro
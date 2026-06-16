const Modal = require('../Modals/RegistroModel')

// pegar todos registros

exports.getTodosRegistros = async (req,res) => {
    try{
        const rows = await Modal.getTodos()

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
            })

    }
}

//pegar registro pelo id

exports.getRegistroId = async (req,res) => {
    try {
        const { id } = req.params 
        const rows = await Modal.getId(id)
        if (rows.length === 0) {
            return res.status(404).json({
                erro: 'Livro não encontrado'
            });
}
        res.json(rows[0])
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//pegar registros de um usuario

exports.getCadastrosUsuario = async (req,res) => {
    try {
        const { usuario } = req.body 
        const rows = await Modal.getByUsuario(usuario)

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//pegar registros de um livro

exports.getCadastrosLivro = async (req,res) => {
    try {
        const { livro } = req.body 
        const rows = await Modal.getByLivro(livro)

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

// fazer registro 

exports.realizarRegistro = async (req,res) => {
    try {
        const {} = req.body

        const resultado = await Modal.cadastrar(usuario,livro)

         if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Falha a fazer registro'
            });
        }
        
        res.json({
            mensagem: 'Registro realizado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

const Modal = require('../Modals/UsuarioModel')

// pegar todos usuarios

exports.getTodosUsuarios = async (req,res) => {
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

// pegar usuario por id

exports.getUsuarioId = async (req,res) => {
    try {
        const { id } = req.params 
        const rows = await Modal.getId(id)
        if (rows.length === 0) {
            return res.status(404).json({
                erro: 'usuario não encontrado'
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

// cadastrar usuario

exports.cadastrarUsuario = async (req,res) => {
    try {
        const {nome,email,telefone,cpf,senha,tipo} = req.body

        const resultado = await Modal.cadastrar(nome,email,telefone,cpf,senha,tipo)

         if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Falha a cadastrar usuario'
            });
        }
        
        res.json({
            mensagem: 'Usuario cadastrado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//desativar usuario

exports.desativarUsuario = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.desativar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Usuario não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Usuario desativado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//reativar usuario

exports.reativarUsuario = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.reativar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Usuario não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Usuario reativado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}
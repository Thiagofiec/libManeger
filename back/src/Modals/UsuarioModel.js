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

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}
// pegar usuario por id

exports.getUuarioId = async (req,res) => {
    try {
        const { id } = req.params 
        const [rows] = await BD.query(
            'SELECT * from livro where id_usuario = ?',
            [id]
        )
        if (rows.length === 0) {
            return res.status(404).json({
                erro: 'Usuario não encontrado'
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
        const {nome, email, telefone, cpf, senha, tipo} = req.body

        resultado = await BD.query(
            'insert into Usuario(nome,email,telefone,cpf,senha_hash,tipo,ativo) values(?,?,?,?,?,?,1)',
            [nome,email,telefone,cpf,senha,tipo]
        )

         if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Falha a cadastrar usuario'
            });
        }
        
        res.json({
            mensagem: 'Livro cadastrado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//desativar usuario

exports.destivarUsuario = async (req,res) => {
    try {
        const { id } = req.params 

        const [resultado] = await BD.query(
            'update Usuario set ativo = 0 where id_usuario = ?',
            [id]
        )

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

// reativar usuario 

exports.reativarLivro = async (req,res) => {
    try {
        const { id } = req.params 

        const [resultado] = await BD.query(
            'update Usuario set ativo = 1 where id_usuario = ?',
            [id]
        )

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
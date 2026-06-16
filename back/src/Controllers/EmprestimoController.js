const Modal = require('../Modals/EmprestimoModel')

// pegar todos emprestimos 

exports.getTodosEmprestimos = async (req,res) => {
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

//pegar emprestimo pelo id

exports.getEmprestimoId = async (req,res) => {
    try {
        const { id } = req.params 
        const rows = await Modal.getId(id)
        if (rows.length === 0) {
            return res.status(404).json({
                erro: 'Emprestimo não encontrado'
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

//pegar emprestimos de um usuario

exports.getEmprestimoUsuario = async (req,res) => {
    try {
        const { usuario } = req.params 
        const rows = await Modal.getByUsuario(usuario)

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//pegar emprestimos de um livro

exports.getEmprestimoLivro = async (req,res) => {
    try {
        const { livro } = req.params 
        const rows = await Modal.getByLivro(livro)

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

// realizar emprestimo

exports.realizarEmprestimo = async (req,res) => {
    try {
        const {usuario, livro} = req.body

        const resultado = await Modal.registrar(usuario,livro)

         if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Falha a fazer emprestimo'
            });
        }
        
        res.json({
            mensagem: 'Emprestimo realizado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//concluir emprestimo

exports.concluirEmprestimo = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.concluir(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Emprestimo não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Emprestimo concluido com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}
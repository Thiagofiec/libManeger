Modal = require('../Modals/LivroModel')

// pegar todos livros

exports.getTodosLivros = async (req,res) => {
    try{
        const rows = await Modal.getTodos().

        res.json(rows)
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
            })

    }
}

// pegar livro por id

exports.getLivroId = async (req,res) => {
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

// cadastrar livro

exports.cadastrarLivro = async (req,res) => {
    try {
        const {titulo, autor, lancamento} = req.body

        const resultado = await Modal.cadastrar(titulo,autor,lancamento)

         if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Falha a cadastrar livro'
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

//desativar livro

exports.desativarLivro = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.desativar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'livro não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Livro desativado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

//reativar livro

exports.reativarLivro = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.reativar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'livro não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Livro reativado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

// indisponibilizar livros 

exports.indisponibilizarLivro = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.indisponibilizar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'livro não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Livro indisponibilizado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

// disponibilizar livros 

exports.disponibilizarLivro = async (req,res) => {
    try {
        const { id } = req.params

        const resultado = await Modal.disponibilizar(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'livro não encontrado'
            });
        }
        
        res.json({
            mensagem: 'Livro disponibilizado com sucesso'
        });
    } catch (error) {
        console.error('Database query error:', error);

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}
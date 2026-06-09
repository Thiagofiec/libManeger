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

        res.status(500).json({
            erro: 'Erro interno do servidor'
        })
    }
}

// pegar livro por id

exports.getLivroId = async (req,res) => {
    try {
        const { id } = req.params 
        const [rows] = await BD.query(
            'SELECT * from livro where id_livro = ?',
            [id]
        )
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

        await BD.query(
            'insert into livro(titulo,autor,lancamento,disponivel,ativo) values(?,?,?,1,1)',
            [titulo,autor,lancamento]
        )
        
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

exports.destivarlivro = async (req,res) => {
    try {
        const { id } = req.params 

        const [resultado] = await BD.query(
            'update livro set ativo = 0 where id_livro = ?',
            [id]
        )

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Livro não encontrado'
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

        const [resultado] = await BD.query(
            'update livro set ativo = 1 where id_livro = ?',
            [id]
        )

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Livro não encontrado'
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

        const [resultado] = await BD.query(
            'update livro set disponivel = 0 where id_livro = ?',
            [id]
        )

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Livro não encontrado'
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

        const [resultado] = await BD.query(
            'update livro set disponivel = 1 where id_livro = ?',
            [id]
        )

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: 'Livro não encontrado'
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


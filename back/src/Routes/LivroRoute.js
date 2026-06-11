const LivroCon = require("../Controllers/LivroController")

module.exports = app => {
    app.get('/',LivroCon.getTodosLivros)
    app.get('/:id', LivroCon.getLivroId)
    app.post('/cadastrar', LivroCon.cadastrarLivro)
    app.patch('/:id/desativar', LivroCon.desativarLivro)
    app.patch('/:id/reativar', LivroCon.reativarLivro)
    app.patch('/:id/indisponibilizar', LivroCon.indisponibilizarLivro)
    app.patch('/:id/disponibilizar', LivroCon.disponibilizarLivro)
}
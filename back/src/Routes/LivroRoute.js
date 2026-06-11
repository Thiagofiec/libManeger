const LivroCon = require("../Controllers/LivroController")

module.exports = app => {
    app.get('/livros',LivroCon.getTodosLivros)
    app.get('/livros/:id', LivroCon.getLivroId)
    app.post('/livros/cadastrar', LivroCon.cadastrarLivro)
    app.patch('/livros/:id/desativar', LivroCon.desativarLivro)
    app.patch('/livros/:id/reativar', LivroCon.reativarLivro)
    app.patch('/livros/:id/indisponibilizar', LivroCon.indisponibilizarLivro)
    app.patch('/livros/:id/disponibilizar', LivroCon.disponibilizarLivro)
}
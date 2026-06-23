const express = require('express')
const router = express.Router()

const Auth = require("../middlewares/Auth")
const LivroCon = require("../Controllers/LivroController")

router.get('/',Auth, LivroCon.getTodosLivros)
router.get('/:id',Auth, LivroCon.getLivroId)
router.post('/cadastrar',Auth, LivroCon.cadastrarLivro)
router.patch('/:id/desativar',Auth, LivroCon.desativarLivro)
router.patch('/:id/reativar',Auth, LivroCon.reativarLivro)
router.patch('/:id/indisponibilizar',Auth, LivroCon.indisponibilizarLivro)
router.patch('/:id/disponibilizar',Auth, LivroCon.disponibilizarLivro)

module.exports = router;
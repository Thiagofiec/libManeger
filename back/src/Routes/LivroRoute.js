const express = require('express')
const router = express.Router()

const LivroCon = require("../Controllers/LivroController")

router.get('/',LivroCon.getTodosLivros)
router.get('/:id', LivroCon.getLivroId)
router.post('/cadastrar', LivroCon.cadastrarLivro)
router.patch('/:id/desativar', LivroCon.desativarLivro)
router.patch('/:id/reativar', LivroCon.reativarLivro)
router.patch('/:id/indisponibilizar', LivroCon.indisponibilizarLivro)
router.patch('/:id/disponibilizar', LivroCon.disponibilizarLivro)

module.exports = router;
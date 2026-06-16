const express = require('express')
const router = express.Router()

const EmprestimoCon = require("../Controllers/EmprestimoController")

router.get('/',EmprestimoCon.getTodosEmprestimos)
router.get('/:id', EmprestimoCon.getEmprestimoId)
router.get('/usuario/:usuario', EmprestimoCon.getEmprestimoUsuario)
router.get('/livro/:livro', EmprestimoCon.getEmprestimoLivro)
router.post('/realizar', EmprestimoCon.realizarEmprestimo)
router.patch('/:id/concluir', EmprestimoCon.concluirEmprestimo)

module.exports = router;
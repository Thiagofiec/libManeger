const express = require('express')
const router = express.Router()

const Auth = require("../middlewares/Auth")
const EmprestimoCon = require("../Controllers/EmprestimoController")

router.get('/',Auth, EmprestimoCon.getTodosEmprestimos)
router.get('/:id',Auth, EmprestimoCon.getEmprestimoId)
router.get('/usuario/:usuario',Auth, EmprestimoCon.getEmprestimoUsuario)
router.get('/livro/:livro',Auth, EmprestimoCon.getEmprestimoLivro)
router.post('/realizar',Auth, EmprestimoCon.realizarEmprestimo)
router.patch('/:id/concluir',Auth, EmprestimoCon.concluirEmprestimo)

module.exports = router;
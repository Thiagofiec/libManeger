const express = require('express')
const router = express.Router()

const UsuarioCon = require("../Controllers/UsuarioController")

router.get('/',UsuarioCon.getTodosUsuarios)
router.get('/:id', UsuarioCon.getUsuarioId)
router.post('/cadastrar', UsuarioCon.cadastrarUsuario)
router.patch('/:id/desativar', UsuarioCon.desativarUsuario)
router.patch('/:id/reativar', UsuarioCon.reativarUsuario)

module.exports = router;
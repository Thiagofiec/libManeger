const express = require('express')
const router = express.Router()

const Auth = require("../middlewares/Auth")
const UsuarioCon = require("../Controllers/UsuarioController")

router.get('/',Auth,UsuarioCon.getTodosUsuarios)
router.get('/:id',Auth, UsuarioCon.getUsuarioId)
router.post('/cadastrar', UsuarioCon.cadastrarUsuario)
router.patch('/:id/desativar',Auth, UsuarioCon.desativarUsuario)
router.patch('/:id/reativar',Auth, UsuarioCon.reativarUsuario)
router.post('/login', UsuarioCon.entrarUsuario)

module.exports = router;
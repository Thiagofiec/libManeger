const jwt = require('jsonwebtoken' );
require('dotenv').config();

module.exports = (req, res, next ) => {
const authHeader = req.headers[ 'authorization' ];
const token = authHeader && authHeader.split( ' ')[1];

if (!token) {
return res.status( 401).json({ erro: "Token não fornecido." });
}

try {
const verificado = jwt.verify(token, process.env.JWT_SECRET);
req.usuarioLogado = verificado;
next();

} catch (err) {
return res.status( 403).json({ erro: "Token inválido." });
}
};
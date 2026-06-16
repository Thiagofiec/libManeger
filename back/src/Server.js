const express = require('express');
const cors = require("cors");
require('dotenv').config();

const porta = process.env.PORT
console.log(process.env.PORT)

const livroRoute = require('./Routes/livroRoute');
const usuarioRoute = require('./Routes/UsuarioRoute')
const emprestimoRoute = require('./Routes/EmprestimoRoute')

const app = express();
app.use(cors())

app.use(express.json());
app.use('/livros', livroRoute);
app.use('/usuarios', usuarioRoute);
app.use('/emprestimo', emprestimoRoute)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))
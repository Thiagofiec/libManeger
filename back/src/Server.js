const express = require('express');
const cors = require("cors");
require('dotenv').config();

const porta = process.env.PORT
console.log(process.env.PORT)

const livroRoute = require('./Routes/livroRoute');

const app = express();
app.use(cors())

app.use(express.json());
app.use('/livros', livroRoute);


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))
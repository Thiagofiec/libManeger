const express = require('express');
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT
console.log(process.env.PORT)

const livroRoute = require('./Routes/livroRoute');

const app = express();
app.use(cors())

app.use(express.json());
app.use('/livros', livroRoute);


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
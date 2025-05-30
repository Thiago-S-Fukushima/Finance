const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

//conexão com o banco.
const db = require('./db');

//configuração do express.
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//sessão.
app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}));

//configuração de rotas.
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', authRoutes);
app.use('/', dashboardRoutes);

//inicialização do servidor.
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
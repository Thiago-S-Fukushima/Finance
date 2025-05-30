const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../db');

//Mostrar formulário de cadastro.
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

//Processar cadastro.
router.post('/register', async (req, res) => {
    const {email, password} = req.body;
    
    try{
        const hash = await bcrypt.hash(password, 10);

        await db.execute('INSERT INTO usuarios (email, password) VALUES (?,?)', [email, hash]);

        res.redirect('/login');
    } catch(err) {
    console.error(err);
    res.send('Erro ao cadastrar. Tente outro e-mail');
   }
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

module.exports = router;
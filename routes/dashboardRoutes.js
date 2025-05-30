const express = require ('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'))
});

router.get('/new-transaction', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/new-transaction.html'))
});

module.exports = router;
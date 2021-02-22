const path = require('path');
const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/users'); 
});

app.use('/users', usersRouter);

app.use('/products', productsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = '3000';
app.listen(PORT, 'localhost', () => console.log(`Sever listening on port ${PORT}`))
const path = require('path');
const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.redirect('/users'); 
});

app.use('/users', usersRouter);

app.use('/products', productsRouter);

app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('404', { title: '404' });
});

const PORT = process.env.PORT || '5000';
app.listen(PORT, process.env.HOST, () => console.log(`Sever listening on port ${PORT}`));
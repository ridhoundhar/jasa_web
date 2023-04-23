const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { title: 'Halaman Utama', message: 'Selamat datang di halaman utama!' });
});

app.listen(3000, function() {
  console.log('Server berjalan pada port 3000...');
});

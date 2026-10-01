const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', (filepath, options, callback) => {
  const fs = require('fs');
  fs.readFile(filepath, 'utf8', callback);
});
app.set('views', './views');

// Rotas
const tecnicoRoutes = require('./routes/tecnicoRoutes');
const timeRoutes = require('./routes/timeRoutes');
const jogadorRoutes = require('./routes/jogadorRoutes');
const competicaoRoutes = require('./routes/competicaoRoutes');

// Rotas de Home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Usar as rotas
app.use('/api', tecnicoRoutes);
app.use('/api', timeRoutes);
app.use('/api', jogadorRoutes);
app.use('/api', competicaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8001;
const knex = require('./knex/knex.js');

const routesCtrl = require('./routesCtrl');

const app = express();

app.use(express.static('temp'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RUTAS
app.get('/asignaturas', routesCtrl.getAll)
app.post('/asignaturas', routesCtrl.post)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');
const pedidosRoutes = require('../routes/pedidosRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRoutes);
app.use('/dashboard', pedidosRoutes);

app.listen(3333);
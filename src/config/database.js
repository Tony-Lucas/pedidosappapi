const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pedidosappdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
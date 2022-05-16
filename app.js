const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.listen(3000, () => {
    console.log('localhost: 3000')
});

//archivos public
app.use(express.static("public"));

//EJS
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', mainRoutes);

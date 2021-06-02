const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();
const services_routes = require('./routes/services');

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/',services_routes);

app.use((error, req, res, next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})


app.listen(3000, () => {
    console.log('Server started at port ', 3000);
});

/*const dbtest = async () => {
    let results = await db.query('select * from users');
    console.log(results.rows[0]);
}

dbtest(); */


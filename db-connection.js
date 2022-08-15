var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'foodsq.cwmvcgt1jgye.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Coughing1',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWS DB');
}); 
module.exports = connection;


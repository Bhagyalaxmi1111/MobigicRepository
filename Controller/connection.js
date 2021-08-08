var mysql = require('mysql');
let obj={
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mobigic',
}
var connection = mysql.createConnection(obj);
connection.connect((err)=> {
  if (err) console.log(err);
  else{
    console.log("Connection established");
  }
});

module.exports = connection;
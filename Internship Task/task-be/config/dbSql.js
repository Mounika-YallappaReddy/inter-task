var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user:"root",
  password:"YAllappa321#"
});


module.exports={connection,mysql}
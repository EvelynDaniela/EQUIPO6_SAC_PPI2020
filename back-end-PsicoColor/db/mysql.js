mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bm3qa047fdxtb1yzllqb-mysql.services.clever-cloud.com',
  user     : 'ui9hqcdvxdlxeyjk',
  password : 'AoyNUx9wYvZb65SErcsd',
  database : 'bm3qa047fdxtb1yzllqb'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}
var mysqldump = require('mysqldump');

mysqldump({
    host: 'localhost',
	port: 3307,
    user: 'root',
    password: 'root',
    database: 'testforsure',
    dest:'./data.sql' // destination file 
},function(err){
    // create data.sql file; 
})
var mysql = require('mysql');

var source = {
    localhost: {
        port: 3306,
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'burger_db'
    }
}

var connection = mysql.createConnection(process.env.JAWSDB_URL || source.localhost);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

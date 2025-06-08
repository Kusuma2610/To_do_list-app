const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kusuma@671505', // your password
  database: 'todo_project_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL DB');
});

module.exports = db;
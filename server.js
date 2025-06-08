const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints

// Get all tasks
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a task
app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO tasks (text) VALUES (?)', [text], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, text });
  });
});

// Edit a task
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  db.query('UPDATE tasks SET text = ? WHERE id = ?', [text, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Task updated');
  });
});

// Delete a task
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Task deleted');
  });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});

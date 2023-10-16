// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const mongoose = require('./db');
const budgetData = require('./models/budgetData');

app.use(cors());
app.use(express.json());

const budget = require('./budget.json');

app.get('/', (req, res) => {
    res.json("Hello World!");
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

// Endpoint to fetch data from the database
app.get('/api/budget-data', async (req, res) => {
    try {
      const entries = await budgetData.find();
      res.json(entries);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch budget entries' });
    }
  });
  
  // Endpoint to add new data (test using Postman)
  app.post('/api/budget-data', async (req, res) => {
    try {
      const { title, budget, color } = req.body;
      const newEntry = new budgetData({ title, budget, color });
      await newEntry.save();
      res.json(newEntry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add budget entry' });
    }
  });

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
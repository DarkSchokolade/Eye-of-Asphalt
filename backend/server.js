const express = require('express');
const app = express();
const speedlimitrefs = require('./data/speedlimitrefs');

app.get('/', (req, res) => {
  res.send('API is Working');
});

app.get('/api/locations', (req, res) => {
  res.json(speedlimitrefs);
});

app.get('/api/locations/:id', (req, res) => {
  const location = speedlimitrefs.find((ref) => ref._id == req.params.id);
  res.json(location);
});

app.listen(5000, console.log('server running on port 5000'));

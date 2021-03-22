import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import speedlimitrefs from './data/speedlimitrefs.js';

dotenv.config();
connectDB();
const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
);

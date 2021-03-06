import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import speedlimitrefs from './data/speedlimitrefs.js';

import locationRoutes from './routes/locationsRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is Working');
});

app.use('/api/locations', locationRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
);

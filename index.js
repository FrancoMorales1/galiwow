import express from 'express';
import cors from 'cors'

import personajesRoutes from './routes/personajes.js';
import titulosRoutes from './routes/titulos.js';

import './db/mongo.js';

import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static('build'))

app.use('/api/personajes', personajesRoutes);
app.use('/api/titulos', titulosRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
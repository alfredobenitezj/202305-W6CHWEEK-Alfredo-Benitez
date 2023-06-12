import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { sampleRouter } from './routers/sample.router';
const debug = createDebug('W6:App');

export const app = express();
debug('Cargando la App Express :');

const corsOptions = {
  origin: '*',
};
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use((_req, _res, next) => {
  next();
});
app.get('/', (_req, res) => {
  res.send('Bienvenido express');
});
app.post('/', (_req, res) => {
  res.json('Unido nuevo pirata');
});
app.delete('/', (_req, res) => {
  res.json('Ha abandonado el grupo');
});
app.patch('/:id', (req, res) => {});

app.use('/sample', sampleRouter);

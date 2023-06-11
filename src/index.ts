import http from 'http';
import { app } from './app';
import * as dotenv from 'dotenv';
import createDebug from 'debug';
const debug = createDebug('W6AlfredoBenitez'); // Esto lo pongo para saber lo que es en un futuro cuando lo vea sirve para poner "consolelog personalizados cada vez que hace una determinada accion"

dotenv.config();
const PORT = process.env.PORT || 4444;
const server = http.createServer(app);
server.listen(PORT);
server.on('Escuchando ', () => {
  debug('Escuchando por el puerto' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});

import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6AlfredoB:SampleRepo');

type Pirate = {
  id: string;
  PirateName: string;
  Ship: string;
  Hability: string;
};

const file = 'data.json';

export class SampleRepo {
  constructor() {
    debug('Sample Repo Alfredo B');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Pirate[];
  }
}

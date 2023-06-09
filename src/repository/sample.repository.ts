import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Pirate = {
  id: string;
  PirateName: string;
  Ship: string;
  Hability: string;
};

const file = 'data.json';

export class SampleRepo {
  constructor() {
    debug('Sample Repo');
  }
}

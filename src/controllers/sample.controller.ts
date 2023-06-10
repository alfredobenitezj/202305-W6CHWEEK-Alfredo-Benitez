import { Request, Response } from 'express';
import { SampleRepo } from '../repository/sample.repository';
import createDebug from 'debug';
const debug = createDebug('W6:Sample Controller Alfredo Benitez ');

export class SampleController {
  repo: SampleRepo;
  constructor() {
    this.repo = new SampleRepo();
    debug('Instanciado Sample Controller');
    debug(this.repo);
  }

  async getAll(req: Request, res: Response) {
    res.send(await this.repo.readAll());
  }

  getById(req: Request, res: Response) {
    res.send('Ey numero:' + req.params.id);
  }

  post(req: Request, res: Response) {
    res.send('Envio sencillo:' + req.body.Pirate);
  }

  patch(req: Request, res: Response) {
    res.send('Patch Sample:' + req.body.Pirate);
  }

  deleteByID(req: Request, res: Response) {
    res.send('Borrado: ' + req.body.Pirate);
  }
}

import fs from 'fs/promises';
import createDebug from 'debug';
import { Sample } from '../entities/sample';
import { Repo } from './repo.js';
import { HttpError } from '../types/http.error';
const debug = createDebug('W6AlfredoB:SampleRepo');

const file = 'data.json';

export class SampleRepo implements Repo<Sample> {
  constructor() {
    debug(' Repo Alfredo B');
  }

  async query() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const aData = JSON.parse(stringData) as Sample[];
    return aData;
  }

  async queryById(id: string) {
    const aData = await this.query();
    const result = aData.find((item) => item.Id === id);
    if (!result) throw new HttpError(404, 'Bad id for the query');
    return result;
  }
  async create(data: Omit<SampleRepo, 'id'>):Promise<Sample>{
    const aData=await this.query();
    const newSample: Sample={
      ...data, id: CreateID(),
      PirateName: '',
      Ship: '',
      Hability: ''
    };
    const result=JSON.stringify([...aData,newSample])
    await fs.writeFile(file,result,{encoding:'utf8'})
    return newSample
    }

    async update: (id: string, data: Partial<Sample>){

      const aData=await this.query();
      let newSample:Sample={}as Sample;
      const result=aData.map((item))=>{if (Item.id=== id){
        newSample={ ...Item,...data};
        return newSample;
      }
    }
async delete:(id:string){
  const aData=await this.query();
  const result=aData.filter((item)=>Item.id !==id)
  if (aData.length===result.length)
  throw new HttpError(404,'Not found','Bad id for the delete');
  await fs.writeFile(file,JSON.stringify(result),{encoding:'utf8'})
}



















  };









}


function CreateID(): string {
  throw new Error('Function not implemented.');
}


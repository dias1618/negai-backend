import { Midia } from "src/entities/midia.entity";

export class MidiaService{
    async create(midia:Midia):Promise<Midia>{
        midia = new Midia(midia);
        return await midia.save();
    }
}
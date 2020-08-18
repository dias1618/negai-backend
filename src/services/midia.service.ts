import { Midia } from "src/entities/midia.entity";

export class MidiaService{
    async create(midia:Midia):Promise<Midia>{
        console.log(midia);
        midia = new Midia(midia);
        console.log(midia);
        return await midia.save();
    }
}
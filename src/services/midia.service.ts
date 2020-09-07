import { Midia } from "src/entities/midia.entity";
import { getRepository } from "typeorm";

export class MidiaService{
    async create(midia:Midia):Promise<Midia>{
        midia = new Midia(midia);
        return await midia.save();
    }

    async delete(id:number):Promise<void>{
        await getRepository(Midia).delete(id);
    }

    async update(id:number, partMidia:any):Promise<Midia>{

        let midia = await this.get(id);
        console.log(`midia = ${midia}`);
        for(let key in partMidia){
            console.log('key = ', key)
            console.log('partMidia[key] = ', partMidia[key])
            midia[key] = partMidia[key];
        }

        return await midia.save();
    }

    async getAllByGrupoMidia(idGrupoMidia:number):Promise<Midia[]>{
        return await getRepository(Midia).createQueryBuilder('midia')
        .leftJoinAndSelect('midia.grupoMidia', 'grupoMidia')
        .where('grupoMidia.id = :id', {id: idGrupoMidia})
        .getMany();
    }

    async get(id:number):Promise<Midia>{
        return await getRepository(Midia).createQueryBuilder('midia')
        .innerJoinAndSelect("midia.grupoMidia", "grupoMidia")
        .where('midia.id = :id', {id: id})
        .getOne();
    }
}
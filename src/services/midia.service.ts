import { Midia } from "src/entities/midia.entity";
import { getRepository } from "typeorm";

export class MidiaService{
    async create(midia:Midia):Promise<Midia>{
        midia = new Midia(midia);
        return await midia.save();
    }

    async getAllByGrupoMidia(idGrupoMidia:number):Promise<Midia[]>{
        return await getRepository(Midia).createQueryBuilder('midia')
        .leftJoinAndSelect('midia.grupoMidia', 'grupoMidia')
        .where('grupoMidia.id = :id', {id: idGrupoMidia})
        .getMany();
    }
}
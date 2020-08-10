import { GrupoMidia } from "src/entities/grupo-midia.entity";
import { getRepository } from "typeorm";

export class GrupoMidiaService{

    async get():Promise<GrupoMidia[]>{
        let gruposMidia:GrupoMidia[] = await getRepository(GrupoMidia).createQueryBuilder('grupomidia')
        .getMany();
        return gruposMidia;
    }
}
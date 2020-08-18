import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { GrupoMidia } from "./grupo-midia.entity";

@Entity()
export class Midia extends BaseEntity{

    constructor(data: {id?:number, titulo?:string, icone?:any, situacaoMidia?:number, situacaoAcompanhamento?:number, ultimoVisto?:number}){
        super();
        this.id = data && data.id || 0;
        this.titulo = data && data.titulo || "";
        this.icone = data && data.icone || null;
        this.situacaoMidia = data && data.situacaoMidia || 0;
        this.situacaoAcompanhamento = data && data.situacaoAcompanhamento || 0;
        this.ultimoVisto = data && data.ultimoVisto || 0;
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {nullable: true})
    titulo:string;

    @Column("bytea", {nullable: true})
    icone:any;

    @Column("smallint", {nullable: true})
    situacaoMidia:number;

    @Column("smallint", {nullable: true})
    situacaoAcompanhamento:number;

    @Column("int", {nullable: true})
    ultimoVisto:number;

    @ManyToOne(type => GrupoMidia, grupoMidia => grupoMidia.midias)
    grupoMidia: GrupoMidia;
    
    toJson():string{
        return `{
            "id": ${this.id},
            "titulo": "${this.titulo}",
            "situacaoMidia": "${this.situacaoMidia}",
            "situacaoAcompanhamento": "${this.situacaoAcompanhamento}",
            "ultimoVisto": "${this.ultimoVisto}"
        }`
    }
}
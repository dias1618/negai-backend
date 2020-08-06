import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Midia extends BaseEntity{

    constructor(data: {id?:number, titulo?:string, icone?:any}){
        super();
        this.id = data && data.id || 0;
        this.titulo = data && data.titulo || "";
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
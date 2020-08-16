import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Midia } from "./midia.entity";

@Entity()
export class GrupoMidia extends BaseEntity{

    constructor(data: {id?:number, titulo?:string}){
        super();
        this.id = data && data.id || 0;
        this.titulo = data && data.titulo || "";
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {nullable: true})
    titulo:string;

    @OneToMany(type => Midia, midia => midia.grupoMidia)
    midias: Midia[];

    toJson():string{
        return `{
            "id": ${this.id},
            "titulo": "${this.titulo}"
        }`
    }
}
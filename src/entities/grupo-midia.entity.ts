import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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

    toJson():string{
        return `{
            "id": ${this.id},
            "titulo": "${this.titulo}"
        }`
    }
}
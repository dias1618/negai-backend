import { Post, HttpCode, Body, Controller, Get, Query } from "@nestjs/common";
import { Midia } from "src/entities/midia.entity";
import { MidiaService } from "src/services/midia.service";
import { MidiaNaoCadastradaException } from "src/exceptions/midia-nao-cadastrada.exception";

@Controller('midia')
export class MidiaController{

  constructor(
    private midiaService:MidiaService
  ){}

  @Post()
  @HttpCode(200)
  async save(@Body() midia: Midia) {
    midia = await this.midiaService.create(midia);

    if(!midia)
        throw new MidiaNaoCadastradaException();

    return midia;
  }

  @Get()
  async get(@Query('idGrupoMidia') idGrupoMidia:number){
    return await this.midiaService.getAllByGrupoMidia(idGrupoMidia);
  }

}
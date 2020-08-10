import { Controller, Get, HttpCode } from "@nestjs/common";
import { GrupoMidiaService } from "src/services/grupo-midia.service";

@Controller('grupomidia')
export class GrupoMidiaController{

    constructor(
        private _grupoMidiaService:GrupoMidiaService
    ){}

    @Get()
    @HttpCode(200)
    async get() {
        return await this._grupoMidiaService.get();
    }

}
import { HttpException, HttpStatus } from "@nestjs/common";

export class MidiaNaoCadastradaException extends HttpException {
    constructor() {
      super('Mídia não cadastrada', HttpStatus.NOT_FOUND);
    }
}
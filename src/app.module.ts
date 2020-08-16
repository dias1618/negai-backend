import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { UsuarioService } from './services/usuario.service';
import { GrupoMidiaController } from './controllers/grupo-midia.controller';
import { GrupoMidiaService } from './services/grupo-midia.service';
import { MidiaController } from './controllers/midia.controller';
import { MidiaService } from './services/midia.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
    })
  ],
  controllers: [
    AppController,
    AuthController,
    GrupoMidiaController,
    MidiaController
  ],
  providers: [
    AppService,
    UsuarioService,
    GrupoMidiaService,
    MidiaService
  ],
})
export class AppModule {}

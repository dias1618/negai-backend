import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { UsuarioService } from './services/usuario.service';
import { GrupoMidiaController } from './controllers/grupo-midia.controller';
import { GrupoMidiaService } from './services/grupo-midia.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [
    AppController,
    AuthController,
    GrupoMidiaController
  ],
  providers: [
    AppService,
    UsuarioService,
    GrupoMidiaService,
  ],
})
export class AppModule {}

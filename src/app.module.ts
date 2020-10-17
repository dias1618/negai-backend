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
import { Usuario } from './entities/usuario.entity';
import { Midia } from './entities/midia.entity';
import { GrupoMidia } from './entities/grupo-midia.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      autoLoadEntities: true,
      type: 'postgres',
      host: 'docker_postgres_1',
      port: 5432,
      username: "postgres",
      password: "axlrby216",
      database: "negai",
      entities: [
        Usuario,
        Midia,
        GrupoMidia
      ],
      synchronize: true
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

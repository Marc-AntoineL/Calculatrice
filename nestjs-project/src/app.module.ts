import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccesController } from './succes/succes.controller';
import { SuccesModule } from './succes/succes.module';
import { ErreursModule } from './erreurs/erreurs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ErreursController } from './erreurs/erreurs.controller';
import { SuccesService } from './succes/succes.service';
import { ErreursService } from './erreurs/erreurs.service';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SuccesModule, ErreursModule],
  controllers: [SuccesController,AppController, ErreursController],
  providers: [AppService, SuccesService, ErreursService],
})
export class AppModule {}

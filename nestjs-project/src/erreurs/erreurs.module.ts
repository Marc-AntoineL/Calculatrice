import { Module } from '@nestjs/common';
import { ErreursController } from './erreurs.controller';
import { ErreursService } from './erreurs.service';

@Module({
  controllers: [ErreursController],
  providers: [ErreursService]
})
export class ErreursModule {}

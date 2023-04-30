import { Module } from '@nestjs/common';
import { SuccesController } from './succes.controller';
import { SuccesService } from './succes.service';

@Module({
  controllers: [SuccesController],
  providers: [SuccesService]
})
export class SuccesModule {}

import { Controller } from '@nestjs/common';
import { SuccesService } from './succes.service';
import { Timestamp } from 'typeorm';
import { succes } from './succes.entity';

@Controller('succes')
export class SuccesController {
    constructor(private succesService: SuccesService) {}
    @Post()
    CreateSucces(
     @Body('timeTakenMs') timeTakenMs: Timestamp,
     ): Promise<succes> {
     return this.succesService.CreateSucces(timeTakenMs);
     }
    
}

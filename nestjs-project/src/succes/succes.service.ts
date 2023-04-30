import { Injectable } from '@nestjs/common';
import { succes } from './succes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';

@Injectable()
export class SuccesService {
    constructor(
        @InjectRepository(succes)
        private succesRepository: Repository<succes>,
        ) {}
       


    async CreateSucces(timeTakenMs : Timestamp): Promise<succes> {
        const Succes = new succes();
        Succes.timeTakenMs = timeTakenMs;
        await Succes.save();
        return Succes;
        }

        
}

import { Injectable } from '@nestjs/common';
import { erreurs } from './erreurs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';

@Injectable()
export class ErreursService {
    constructor(
        @InjectRepository(erreurs)
        private succesRepository: Repository<erreurs>,
        ) {}
       


    async CreateErreurs(): Promise<erreurs> {
        const Erreurs = new erreurs();
        await Erreurs.save();
        return Erreurs;
        }

        
}
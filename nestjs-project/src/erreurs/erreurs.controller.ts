import { Controller } from '@nestjs/common';
import { ErreursService } from './erreurs.service';
import { erreurs } from './erreurs.entity';

declare var Post: any

@Controller('erreurs')
export class ErreursController {
    constructor(private succesService: ErreursService) {}
    @Post()
    CreateErreurs(
     ): Promise<erreurs> {
     return this.succesService.CreateErreurs();
     }
}

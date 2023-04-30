import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { succes } from '../succes/succes.entity';
import { erreurs } from '../erreurs/erreurs.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'junia_user',
password: 'junia_user',
database: 'junia',
entities: [succes, erreurs],
};
import { FormatoController } from './formato.controller';
import { FormatoService } from './formato.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormatoSchema, CeldaSchema } from './schemas/formato.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Formato',
            schema: FormatoSchema,
        }, {
            name: 'Celda',
            schema: CeldaSchema,
        }]),
    ],
    controllers: [
        FormatoController,],
    providers: [
        FormatoService,],
})
export class FormatoModule { }

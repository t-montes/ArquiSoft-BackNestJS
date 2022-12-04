import { FormatoController } from './formato.controller';
import { FormatoService } from './formato.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormatoSchema } from './formato.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Formato',
            schema: FormatoSchema,
        }]),
    ],
    controllers: [
        FormatoController,],
    providers: [
        FormatoService,],
})
export class FormatoModule { }

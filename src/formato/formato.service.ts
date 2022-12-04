import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formato } from './formato.interface';

@Injectable()
export class FormatoService {
    constructor(
        @InjectModel('Formato') private readonly formatoModel: Model<Formato>,
    ) { }

    async findAll(): Promise<Formato[]> {
        return await this.formatoModel.find({});
    }
}

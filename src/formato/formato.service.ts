import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formato } from './formato.interface';
import { CreateFormatoDto } from './dto';

@Injectable()
export class FormatoService {
    constructor(
        @InjectModel('Formato') private readonly formatoModel: Model<Formato>,
    ) { }

    async findAll(): Promise<Formato[]> {
        return await this.formatoModel.find({});
    }

    async findOne(id: string): Promise<Formato> {
        return await this.formatoModel.findOne({ _id: id });
    }

    async create(formato: CreateFormatoDto): Promise<Formato> {
        const newFormato = new this.formatoModel(formato);
        await newFormato.save();
        return newFormato;
    }
}

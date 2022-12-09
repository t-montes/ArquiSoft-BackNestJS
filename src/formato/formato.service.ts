import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formato } from './interfaces/formato.interface';
import { Celda } from './interfaces/celda.interface';
import { CreateFormatoDto, CreateCeldaDto } from './dtos';

@Injectable()
export class FormatoService {
    constructor(
        @InjectModel('Formato') private readonly formatoModel: Model<Formato>,
        @InjectModel('Celda') private readonly celdaModel: Model<Celda>,
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

    async remove(id: string): Promise<Formato> {
        return await this.formatoModel.findByIdAndRemove(id);
    }

    async addCelda(id: string, celda: CreateCeldaDto): Promise<Formato> {
        const newCelda = new this.celdaModel(celda);
        const formato = await this.formatoModel.findOne({ _id: id });
        formato.celdas.push(newCelda);
        await formato.save();
        return formato;
    }

}

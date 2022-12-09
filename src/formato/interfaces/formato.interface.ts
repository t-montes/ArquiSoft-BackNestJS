import { Document } from 'mongoose';
import { Celda } from './celda.interface';

export interface Formato extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly celdas: Celda[];
};

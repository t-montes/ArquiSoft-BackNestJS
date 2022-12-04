import { Document } from 'mongoose';

export interface Formato extends Document {
    readonly nombre: string;
    readonly descripcion: string;
};

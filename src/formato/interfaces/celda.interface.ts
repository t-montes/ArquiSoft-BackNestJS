import { Document } from 'mongoose';

export interface Celda extends Document {
    readonly x: number;
    readonly y: number;
    readonly lengthX: number;
    readonly lengthY: number;
    readonly campo: string;
};

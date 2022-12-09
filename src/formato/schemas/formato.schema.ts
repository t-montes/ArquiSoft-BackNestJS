import * as mongoose from 'mongoose';

export const CeldaSchema = new mongoose.Schema({
    x: {
        type: Number,
        required: [true, 'La coordenada x es requerida'],
    },
    y: {
        type: Number,
        required: [true, 'La coordenada y es requerida'],
    },
    lengthX: {
        type: Number,
        required: [true, 'La longitud en x es requerida'],
    },
    lengthY: {
        type: Number,
        required: [true, 'La longitud en y es requerida'],
    },
    campo: {
        type: String,
        maxlength: 50,
        required: [true, 'El campo es requerido'],
    }
});

export const FormatoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        maxlength: 50,
        required: [true, 'El nombre es requerido'],
    },
    descripcion: {
        type: String,
        maxlength: 255,
        required: [true, 'La descripción es requerida'],
    },
    celdas: {
        type: [CeldaSchema],
    }
});

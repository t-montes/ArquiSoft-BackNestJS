import * as mongoose from 'mongoose';

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
});

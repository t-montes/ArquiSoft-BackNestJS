import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormatoDto {
    @ApiProperty({
        example: 'Formato de Cédula',
        description: 'Nombre del formato',
        format: 'string',
        maxLength: 50,
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly nombre: string;

    @ApiProperty({
        example: 'Formato de Cédula para el registro de usuarios',
        description: 'Descripción del formato',
        format: 'string',
        maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    readonly descripcion: string;
}
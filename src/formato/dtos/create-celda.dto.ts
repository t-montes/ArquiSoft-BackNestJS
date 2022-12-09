import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCeldaDto {
    @ApiProperty({
        example: 2.5,
        description: 'Coordenada x de la celda',
        format: 'number',
        minimum: 0,
    })
    @IsNotEmpty()
    readonly x: number;

    @ApiProperty({
        example: 1.5,
        description: 'Coordenada y de la celda',
        format: 'number',
        minimum: 0,
    })
    @IsNotEmpty()
    readonly y: number;

    @ApiProperty({
        example: 5.1,
        description: 'Longitud en x de la celda',
        format: 'number',
        minimum: 0,
    })
    @IsNotEmpty()
    readonly lengthX: number;

    @ApiProperty({
        example: 1.2,
        description: 'Longitud en y de la celda',
        format: 'number',
        minimum: 0,
    })
    @IsNotEmpty()
    readonly lengthY: number;

    @ApiProperty({
        example: 'nombre',
        description: 'Campo de la celda',
        format: 'string',
        maxLength: 50,
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly campo: string;

}
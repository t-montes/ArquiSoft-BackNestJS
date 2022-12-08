import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiBearerAuth,
    ApiHeader,
    ApiOperation,
    ApiParam,
} from '@nestjs/swagger';
import { FormatoService } from './formato.service';
import { CreateFormatoDto } from './dto';

@ApiTags('Formato')
@Controller('formatos')
export class FormatoController {
    constructor(
        private readonly formatoService: FormatoService
    ) { }

    @Get()
    @ApiOperation({ summary: 'Get all formatos' })
    @ApiOkResponse({ description: 'The formatos has been successfully retrieved.' })
    async findAll() {
        console.log('GET /formatos');
        return await this.formatoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a formato by id' })
    @ApiParam({ name: 'id', description: 'Formato id' })
    @ApiOkResponse({ description: 'The formato has been successfully retrieved.' })
    async findOne(@Param('id') id: string) {
        console.log('GET /formatos/' + id);
        return await this.formatoService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a formato' })
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'The formato has been successfully created.' })
    async create(@Body() formato: CreateFormatoDto) {
        console.log('POST /formatos');
        return await this.formatoService.create(formato);
    }

}

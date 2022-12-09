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
import { CreateFormatoDto, CreateCeldaDto } from './dtos';

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
        console.log('GET /formatos' + id);
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

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a formato by id' })
    @ApiParam({ name: 'id', description: 'Formato id' })
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'The formato has been successfully deleted.' })
    async remove(@Param('id') id: string) {
        console.log('DELETE /formatos/' + id);
        return await this.formatoService.remove(id);
    }

    @Post(':id/celdas')
    @ApiOperation({ summary: 'Add a celda to a formato' })
    @ApiParam({ name: 'id', description: 'Formato id' })
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'The celda has been successfully added.' })
    async addCelda(@Param('id') id: string, @Body() celda: CreateCeldaDto) {
        console.log('POST /formatos/' + id + '/celdas/');
        return await this.formatoService.addCelda(id, celda);
    }

}

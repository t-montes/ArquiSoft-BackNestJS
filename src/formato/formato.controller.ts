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

@ApiTags('Formato')
@Controller('formato')
export class FormatoController {
    constructor(
        private readonly formatoService: FormatoService
    ) { }

    @Get()
    @ApiOperation({ summary: 'Get all formatos' })
    @ApiOkResponse({ description: 'The formatos has been successfully retrieved.' })
    async findAll() {
        return await this.formatoService.findAll();
    }

}

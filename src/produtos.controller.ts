import { UpdateResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Produto from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly service: ProdutosService) {}

  @Get()
  getAll(): Promise<Produto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Promise<Produto> {
    return this.service.getOne(params.id);
  }

  @Post()
  save(@Body() produto): Promise<Produto> {
    return this.service.save(produto);
  }

  @Put()
  edit(@Body() produto): Promise<UpdateResult> {
    return this.service.edit(produto);
  }

  @Delete(':id ')
  delete(@Param() params): Promise<void> {
    return this.service.remove(params.id);
  }
}

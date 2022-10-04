import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('Livro01', 'TDD BDD na prática', 25),
    new Produto('Livro02', 'Iniciando com flutter', 49.80),
    new Produto('Livro03', 'Como lidar com as camadas do Kubernates', 62.50)
  ];

  @Get()
  getAll(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  getOne(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  save(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  edit(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id ')
  delete(@Param() params): string {
    console.log(params);
    return 'apaga o produto' + params.id;
  }
}

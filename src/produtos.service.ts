import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, Repository } from 'typeorm';
import Produto from './produto.model';

@Injectable()
export class ProdutosService {
 
  constructor(
    @InjectRepository(Produto)
    private readonly repositoryProduto: Repository<Produto>,
  ) {}

  async getAll(): Promise<Produto[]> {
    return await this.repositoryProduto.find();
  }

  async getOne(id: number): Promise<Produto> {
    return await this.repositoryProduto.findOneBy({ id });
  }

  async save(produto: Produto): Promise<Produto> {
    return await this.repositoryProduto.save(produto);
  }

  async edit(produto: Produto): Promise<UpdateResult> {
    return await this.repositoryProduto.update(
      { id: produto.id },
      {
        codigo: produto.codigo,
        nome: produto.nome,
        preco: produto.preco,
      },
    );
  }

  async remove(id: number): Promise<void> {
    const produto: Produto = await this.getOne(id);
    this.repositoryProduto.delete(produto);
  }
}

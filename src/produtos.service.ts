import { Produto } from "./produto.model";

export class ProdutosService {
    produtos: Produto[] = [
        new Produto('Livro01', 'TDD BDD na prática', 25),
        new Produto('Livro02', 'Iniciando com flutter', 49.80),
        new Produto('Livro03', 'Como lidar com as camadas do Kubernates', 62.50)
      ];

      getAll(): Produto[]{
        return this.produtos;
      }

      getOne():Produto{
        return this.produtos[0];
      }

      save(produto: Produto): Produto {
        this.produtos.push(produto);
        return produto;
      }

      edit(produto: Produto): Produto {
        return new Produto(produto.codigo, produto.nome, produto.preco);
      }

}
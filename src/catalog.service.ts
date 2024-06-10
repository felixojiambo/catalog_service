import { ICatalogRepository } from "./interface/catalog.repository";

export class CatalogService {
    private _repository:ICatalogRepository
    constructor(repository:ICatalogRepository    ){
  this._repository=repository;
    }
  createProduct(input: any) {}
  updateProduct(input: any) {}
  getProducts(limit: number, offset: number) {}
  getProduct(input: number) {}
  deleteProduct(id: number) {}
}

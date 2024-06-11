import { Product } from "../models/product.model";

export interface ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any): Promise<void>;
    //delete(id: any): Promise<boolean>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}

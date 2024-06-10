export interface ICatalogRepository{
    create(data:any):Promise<{}>;
    update(data:any):Promise<{}>;
    delete(id:any);
    find():Promise<[]>;
    findOne(id:number):Promise<{}>;
}

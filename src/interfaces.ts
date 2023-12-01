export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export type CreateProduct = Omit<IProduct, "id" | "createdAt" | "updatedAt">

export type UpdateProduct = Partial<CreateProduct>

export interface DeleteProduct {
    message: string;
}

export interface IProductFunctions{
    createProduct(date: CreateProduct): IProduct;

    getProducts(): IProduct[];

    getOneProduct(id: number): IProduct | undefined;

    updateProduct(id: number, data: UpdateProduct): IProduct;

    deleteProduct(id: number): DeleteProduct;

}

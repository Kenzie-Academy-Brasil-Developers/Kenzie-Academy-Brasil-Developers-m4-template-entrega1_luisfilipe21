import { IProduct, IProductFunctions, CreateProduct, UpdateProduct, DeleteProduct } from "./interfaces";


class ProductList implements IProductFunctions{
    
    id: number = 1
    private productList: IProduct[] = [];
    
    createProduct(date: CreateProduct): IProduct {

        const newProduct: IProduct = {
            id: this.id++,
            ...date,
            updatedAt: new Date(),
            createdAt: new Date(),
        }

        this.productList.push(newProduct);
        return newProduct
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
       return this.productList.find((product) => id === product.id )
    }

    updateProduct(id: number, data: UpdateProduct): IProduct {
        const index: number = this.productList.findIndex((product) => {
            return id === product.id
        });

        const updated: IProduct = {
            ...this.productList[index],
            ...data,
            updatedAt: new Date(),
        }

        this.productList.splice(index, 1, updated)
        return updated;
    }
    
    deleteProduct(id: number): DeleteProduct {
        const index: number = this.productList.findIndex((product) => {
            return id === product.id
        });

        this.productList.splice(index, 1);

        return {message: "Product sucessfully deleted."}
    }
}

export const productList = new ProductList()
import { IProduct } from './product';

export interface ICartItem {
    product: IProduct;
    amount: number;
}
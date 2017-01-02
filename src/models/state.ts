import { ICartItem } from './cart';
import { IProduct } from './product';

export interface IState {
    cart?: ICartItem[];
    products?: IProduct[];
}
import { ICartItem } from './cart';
import { IProduct } from './product';
import { IPageData } from './page-data';

export interface IState {
    cart?: ICartItem[];
    products?: IProduct[];
    currentPage?: IPageData
}
import { Category } from '../models/product.category';
import { Product } from '../models/product.model';

export const PRODUCTS: Array<Product> = [
    new Product(1, 'Product1', 'Product1 description', 15.5, Category.Cat1, true),
    new Product(2, 'Product2', 'Product2 description', 2.7, Category.Cat2, true),
    new Product(3, 'Product3', 'Product3 description', 10, Category.Cat3, true)
]

import { Product } from "../entity/product";

export interface ProductGateway {
  save(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  list(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  decreaseStock(id: string, quantity: number): Promise<void>;
  increaseStock(id: string, quantity: number): Promise<void>;
}
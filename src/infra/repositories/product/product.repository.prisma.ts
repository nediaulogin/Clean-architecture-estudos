import { Product } from "../../../domain/product/entity/product";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";
import { PrismaClient } from "@prisma/client/extension";

export class ProductRepository implements ProductGateway {
  constructor(private readonly prismaClient: PrismaClient) { }

  public static create(prisma: PrismaClient) {
    return new ProductRepository(PrismaClient);
  }

  async save(product: Product): Promise<void> {
    await this.prismaClient.product.create({
      data: {
        id: product.id,
        name: product.name,
        stock: product.stock,
        price: product.price,
      },
    });
  }
  async findById(id: string): Promise<Product | null> {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async decreaseStock(id: string, quantity: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async increaseStock(id: string, quantity: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

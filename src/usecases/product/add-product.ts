import { Product } from "../../domain/Product/entity/product";
import { ProductGateway } from "../../domain/Product/gateway/product.gateway";
import { StockMovement } from "../../domain/StockMovement/entity/stockMovement";
import { StockMovementGateway } from "../../domain/StockMovement/gateway/stockMoviment.gateway";
import { Usecase } from "../usecase";

export type IncreaseStockInputDto = {
  id: string;
  quantity: number;
};

export type IncreaseStockOutputDto = {
  id: string;
};

export class IncreaseStockUsecase
  implements Usecase<IncreaseStockInputDto, IncreaseStockOutputDto> {
  private constructor(private readonly productGateway: ProductGateway, private readonly stockMovementGateway: StockMovementGateway) { }

  public static create(productGateway: ProductGateway,
    stockMovementGateway: StockMovementGateway
  ) {
    return new IncreaseStockUsecase(productGateway, stockMovementGateway);
  }

  public async execute({ id, quantity }: IncreaseStockInputDto): Promise<IncreaseStockOutputDto> {

    const aProduct = await this.productGateway.findById(id);

    if (!aProduct) {
      throw new Error("Product not found");
    }

    aProduct.increaseStock(quantity);

    await this.productGateway.save(aProduct);

    const movement = StockMovement.create(
      aProduct.id,
      "IN",
      quantity
    );

    await this.stockMovementGateway.save(movement);

    const output = this.presentOutput(aProduct);

    return output;

  }
  private presentOutput(product: Product): IncreaseStockOutputDto {
    const output: IncreaseStockOutputDto = {
      id: product.id
    }

    return output;


  }
}
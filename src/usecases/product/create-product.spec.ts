import { CreateProductUsecase } from "./create-product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Product } from "../../domain/product/entity/product";
import { describe, expect, it, beforeEach, jest } from '@jest/globals';


describe("CreateProductUsecase", () => {
  let gatewayMock: jest.Mocked<ProductGateway>;

  beforeEach(() => {
    gatewayMock = {
      save: jest.fn(),
      findById: jest.fn(),
      list: jest.fn(),
      delete: jest.fn(),
      decreaseStock: jest.fn(),
      increaseStock: jest.fn(),
    };
  });

  it("should create a product and save it", async () => {
    const usecase = CreateProductUsecase.create(gatewayMock);


    const input = {
      name: "Notebook",
      price: 4000,
    };

    const output = await usecase.execute(input);
    console.log(output);

    expect(output.id).toBeDefined();

    expect(gatewayMock.save).toHaveBeenCalledTimes(1);

    const savedProduct = gatewayMock.save.mock.calls[0]![0];
    // console.log(savedProduct);
    // console.log(gatewayMock.save.mock.calls);

    expect(savedProduct).toBeInstanceOf(Product);
    expect(savedProduct.name).toBe("Notebook");
    expect(savedProduct.price).toBe(4000);
    expect(savedProduct.stock).toBe(0);
  });
});
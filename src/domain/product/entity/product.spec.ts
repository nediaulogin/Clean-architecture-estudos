import { Product } from "./product";
import { describe, expect, test, it } from '@jest/globals';

describe("Product Entity", () => {
  it("should create a product with stock zero", () => {
    const product = Product.create("Notebook", 3000);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Notebook");
    expect(product.price).toBe(3000);
    expect(product.stock).toBe(0);
  });

  it("should increase stock", () => {
    const product = Product.create("Mouse", 100);

    product.increaseStock(5);

    expect(product.stock).toBe(5);
  });

  it("should not increase stock with zero or negative quantity", () => {
    const product = Product.create("Keyboard", 200);

    expect(() => product.increaseStock(0)).toThrow(
      "Quantity must be greater than zero"
    );
  });

  it("should decrease stock", () => {
    const product = Product.create("Monitor", 1500);

    product.increaseStock(10);
    product.decreaseStock(3);

    expect(product.stock).toBe(7);
  });

  it("should not allow decreasing more than available stock", () => {
    const product = Product.create("Headset", 500);

    product.increaseStock(2);

    expect(() => product.decreaseStock(5)).toThrow(
      "Insufficient stock"
    );
  });
});
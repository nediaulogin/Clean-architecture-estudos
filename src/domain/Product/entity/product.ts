export type ProductProps = {
  id: string;
  name: string;
  price: number;
  stock: number; // ← novo campo persistido
};

export class Product {
  private constructor(private props: ProductProps) { }

  public static create(name: string, price: number): Product {
    return new Product({
      id: crypto.randomUUID(),
      name,
      price,
      stock: 0, // inicia zerado
    });
  }

  public static with(props: ProductProps) {
    return new Product(props);
  }

  public increaseStock(quantity: number) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    this.props.stock += quantity;
  }

  public decreaseStock(quantity: number) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    if (this.props.stock < quantity) {
      throw new Error("Insufficient stock");
    }

    this.props.stock -= quantity;
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get price() {
    return this.props.price;
  }

  public get stock() {
    return this.props.stock;
  }
}
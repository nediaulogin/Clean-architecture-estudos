export type ProductProps = {
  id: string;
  name: string;
  price: number;

};

export class Product {
  private constructor(private props: ProductProps) { }

  public static create(name: string, price: number): Product {
    return new Product({
      id: crypto.randomUUID().toString(),
      name,
      price,
    })
  };

  public static with(props: ProductProps) {
    return new Product(props);
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




}
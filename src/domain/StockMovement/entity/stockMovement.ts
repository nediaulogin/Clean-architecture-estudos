export type MovementType = "IN" | "OUT" | "ADJUSTMENT";

type StockMovementProps = {
  id: string;
  productId: string;
  type: MovementType;
  quantity: number;
  createdAt: Date;
};

export class StockMovement {
  private constructor(private props: StockMovementProps) { }

  public static create(
    productId: string,
    type: MovementType,
    quantity: number
  ) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    return new StockMovement({
      id: crypto.randomUUID(),
      productId,
      type,
      quantity,
      createdAt: new Date(),
    });
  }


  get quantity() {
    return this.props.quantity;
  }

  get type() {
    return this.props.type;
  }
}
import { StockMovement } from "../StockMovement/entity/stockMovement";

export class StockCalculator {
  static calculate(movements: StockMovement[]): number {
    return movements.reduce((total, movement) => {
      switch (movement.type) {
        case "IN":
          return total + movement.quantity;
        case "OUT":
          return total - movement.quantity;
        case "ADJUSTMENT":
          return total + movement.quantity; // defina regra clara
        default:
          return total;
      }
    }, 0);
  }
}
import { StockMovement } from "../entity/stockMovement";

export interface StockMovementGateway {
  save(stockMovement: StockMovement): Promise<void>;
  findById(id: string): Promise<StockMovement | null>;
  list(): Promise<StockMovement[]>;
  delete(id: string): Promise<void>;
}
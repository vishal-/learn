export enum OperationTypes {
  ADDITION = "Addition",
  SUBTRACTION = "Subtraction",
  MULTIPLICATION = "Multiplication",
  DIVISION = "Division"
}

export interface Problem {
  x: number;
  y: number;
  result: number;
}

export const MathOperations = Object.assign({}, OperationTypes);

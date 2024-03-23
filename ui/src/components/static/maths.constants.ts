export enum OperationTypes {
  ADDITION,
  SUBSTRACTION,
  MULTIPLICATION,
  DIVISION
}

export interface Problem {
  x: number;
  y: number;
  result: number;
}

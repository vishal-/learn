import { OperationTypes, Problem } from "../static/maths.constants";

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomNumberBySize = (n: number): number => {
  const min = parseInt(
    Array.from({ length: n }, (_, i) => (i ? 0 : 1)).join("")
  );
  const max = parseInt(Array.from({ length: n }, () => 9).join(""));

  return getRandomNumber(min, max);
};

const createEquationParams = (
  operandSize: number,
  operation: OperationTypes
): Problem => {
  const a = getRandomNumberBySize(operandSize);
  const b = getRandomNumberBySize(operandSize);

  switch (operation) {
    case OperationTypes.ADDITION:
    default:
      return { x: a, y: b, result: a + b };
  }
};

const MathUtils = {
  createEquationParams,
  getRandomNumber,
  getRandomNumberBySize
};

export default MathUtils;

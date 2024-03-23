import React from "react";
import MathUtils from "../../utils/math.utils";
import Equation from "../../atoms/equation";
import { OperationTypes } from "./maths.constants";

interface AdditionProps {
  count?: number;
  operandSize?: number;
  showResults: boolean;
  operationType: OperationTypes;
}

interface Problem {
  x: number;
  y: number;
  sum: number;
}

const Operations = ({
  count = 1,
  operandSize = 5,
  operationType,
  showResults
}: AdditionProps) => {
  const problems: Problem[] = React.useMemo(
    () =>
      Array.from({ length: count }, () => {
        const x = MathUtils.getRandomNumberBySize(operandSize);
        const y = MathUtils.getRandomNumberBySize(operandSize);

        return { x, y, sum: x + y };
      }),
    [count]
  );

  return (
    <section>
      {problems.map(({ x, y, sum }, index) => (
        <Equation
          key={`${x}_${y}_${sum}`}
          index={index + 1}
          operandX={x}
          operandy={y}
          operation="+"
          result={sum}
          showResult={showResults}
        />
      ))}
    </section>
  );
};

export default Operations;

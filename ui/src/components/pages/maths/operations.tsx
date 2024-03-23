import React from "react";
import MathUtils from "../../utils/math.utils";
import Equation from "../../atoms/equation";
import { OperationTypes, Problem } from "../../static/maths.constants";

interface AdditionProps {
  count?: number;
  operandSize?: number;
  showResults: boolean;
  operationType: OperationTypes;
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
        return MathUtils.createEquationParams(operandSize, operationType);
      }),
    [count]
  );

  return (
    <section>
      {problems.map(({ x, y, result }, index) => (
        <Equation
          key={`${x}_${y}_${result}`}
          index={index + 1}
          operandX={x}
          operandy={y}
          operation="+"
          result={result}
          showResult={showResults}
        />
      ))}
    </section>
  );
};

export default Operations;

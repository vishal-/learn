import React from "react";

interface EquationProps {
  index?: number;
  operandX: number;
  operandy: number;
  operation: string;
  result: number;
  showResult: boolean;
}

const Equation = ({
  index,
  operandX,
  operandy,
  operation,
  result,
  showResult
}: EquationProps) => (
  <div className="equation">
    {index && <span>{index})</span>}
    <span>{operandX}</span>
    <span>{operation}</span>
    <span>{operandy}</span>
    <span>=</span>
    {showResult ? <span>{result}</span> : <span>___</span>}
  </div>
);

export default Equation;

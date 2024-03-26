import React from "react";
import {
  FaDivide,
  FaGripLines,
  FaMinus,
  FaPlus,
  FaXmark
} from "react-icons/fa6";
import { OperationTypes } from "../static/maths.constants";

interface EquationProps {
  index?: number;
  operandX: number;
  operandy: number;
  operation: OperationTypes;
  result: number;
  showResult: boolean;
}

const renderOperator = (operation: OperationTypes) => {
  switch (operation) {
    case OperationTypes.ADDITION:
      return <FaPlus />;
    case OperationTypes.DIVISION:
      return <FaDivide />;
    case OperationTypes.MULTIPLICATION:
      return <FaXmark />;
    case OperationTypes.SUBTRACTION:
    default:
      return <FaMinus />;
  }
};

const Equation = ({
  index,
  operandX,
  operandy,
  operation,
  result,
  showResult
}: EquationProps) => (
  <div className="equation row my-3">
    {/* {index && <span>{index})</span>} */}
    <div className="col">
      <span>{operandX}</span>
      <span>{renderOperator(operation)}</span>
      <span>{operandy}</span>
      <span>
        <FaGripLines />
      </span>
      <input type="text" />
    </div>
    {/* <div className="col-1">
    </div> */}
    {/* {showResult ? <span>{result}</span> : <span>___</span>} */}
  </div>
);

export default Equation;

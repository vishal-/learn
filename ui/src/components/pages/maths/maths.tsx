import React from "react";
import { Link } from "react-router-dom";
import Operations from "./operations";
import { MathOperations, OperationTypes } from "../../static/maths.constants";

const Maths = () => {
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const onShowResults = () => setShowResults(true);

  return (
    <div className="card">
      <select className="form-select">
        {Object.values(MathOperations).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <Operations
        count={2}
        showResults={true}
        operationType={OperationTypes.ADDITION}
      />

      <Operations
        count={2}
        showResults={true}
        operationType={OperationTypes.SUBTRACTION}
      />

      <Operations
        count={2}
        showResults={true}
        operationType={OperationTypes.MULTIPLICATION}
      />

      <Operations
        count={2}
        showResults={true}
        operationType={OperationTypes.DIVISION}
      />

      {/* <button className="btn btn-primary"></button> */}

      {/* <Link to={"/maths/addition"}>Addition</Link> */}

      {/* <div>
        <button onClick={onShowResults} className="btn btn-primary">
          Show Results
        </button>
      </div> */}
    </div>
  );
};

export default Maths;

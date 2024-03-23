import React from "react";
import { Link } from "react-router-dom";
import Operations from "./operations";
import { OperationTypes } from "../../static/maths.constants";

const Maths = () => {
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const onShowResults = () => setShowResults(true);

  return (
    <div>
      <Operations
        count={7}
        showResults={showResults}
        operationType={OperationTypes.ADDITION}
      />

      {/* <Link to={"/maths/addition"}>Addition</Link> */}

      <div>
        <button onClick={onShowResults}>Show Results</button>
      </div>
    </div>
  );
};

export default Maths;

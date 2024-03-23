import React from "react";
import { Link } from "react-router-dom";
import Additions from "./addition";

const Maths = () => {
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const onShowResults = () => setShowResults(true);

  return (
    <div>
      <Additions count={7} showResults={showResults} />

      {/* <Link to={"/maths/addition"}>Addition</Link> */}

      <div>
        <button onClick={onShowResults}>Show Results</button>
      </div>
    </div>
  );
};

export default Maths;

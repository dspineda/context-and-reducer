import React, { useContext } from "react";
import Context from "../store";

const ShowResults = () => {
  const { dispatch } = useContext(Context);

  return (
    <>
      <div className="checkbox">
        {" "}
        <h3>Seleccione las opciones </h3>
        <input
          type="checkbox"
          id="candidate1"
          onChange={() => dispatch({ type: "SHOWCANDIDATE1" })}
        />
        <label htmlFor="candidate1">Candidate 1</label>
        <input
          type="checkbox"
          id="candidate2"
          onChange={() => dispatch({ type: "SHOWCANDIDATE2" })}
        />
        <label htmlFor="candidate2">Candidate 2</label>
        <input
          type="checkbox"
          id="candidate3"
          onChange={() => dispatch({ type: "SHOWCANDIDATE3" })}
        />
        <label htmlFor="candidate3">Candidate 3</label>
        <input
          type="checkbox"
          id="candidate4"
          onChange={() => dispatch({ type: "SHOWCANDIDATE4" })}
        />
        <label htmlFor="candidate4">Candidate 4</label>
        <input
          type="checkbox"
          id="porcentual"
          onChange={() => dispatch({ type: "PORCENTUAL" })}
        />
        <label htmlFor="porcentual">Porcentual</label>
        <input
          type="checkbox"
          id="normal"
          onChange={() => dispatch({ type: "NORMAL" })}
        />
        <label htmlFor="normal">Normal</label>
        <input
          type="checkbox"
          id="total"
          onChange={() => dispatch({ type: "TOTAL" })}
        />
        <label htmlFor="total">Total</label>
      </div>
    </>
  );
};

export default ShowResults;

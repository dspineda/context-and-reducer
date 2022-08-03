import React, { useContext } from "react";
import Context from "../store";

const Candidate2 = () => {
  const { dispatch } = useContext(Context);
  return (
    <div className="botonVoto">
      <h3>Candidato 2</h3>
      <button onClick={() => dispatch({ type: "CANDIDATE2" })}>Voto</button>
    </div>
  );
};

export default Candidate2;

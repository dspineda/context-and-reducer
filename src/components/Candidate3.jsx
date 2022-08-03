import React, { useContext } from "react";
import Context from "../store";

const Candidate3 = () => {
  const { dispatch } = useContext(Context);
  return (
    <div className="botonVoto">
      <h3>Candidato 3</h3>
      <button onClick={() => dispatch({ type: "CANDIDATE3" })}>Voto</button>
    </div>
  );
};

export default Candidate3;

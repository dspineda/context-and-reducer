import React, { useContext } from "react";
import Context from "../store";

const Candidate4 = () => {
  const { dispatch } = useContext(Context);

  return (
    <div className="botonVoto">
      <h3>Candidato 4</h3>{" "}
      <button onClick={() => dispatch({ type: "CANDIDATE4" })}>Voto</button>
    </div>
  );
};

export default Candidate4;

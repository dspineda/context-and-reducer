import { useContext } from "react";
import Context from "../store";

const Candidate1 = () => {
  const { dispatch } = useContext(Context);

  return (
    <div className="botonVoto">
      <h3>Candidato 1</h3>
      <button onClick={() => dispatch({ type: "CANDIDATE1" })}>Voto</button>
    </div>
  );
};

export default Candidate1;

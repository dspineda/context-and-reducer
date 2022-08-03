import React, { useContext } from "react";
import Context from "../store";

const Total = () => {
  const { state } = useContext(Context);
  const total =
    state.candidate1 + state.candidate2 + state.candidate3 + state.candidate4;
  const porcentualCandidate1 = ((state.candidate1 * 100) / total).toFixed(2);
  const porcentualCandidate2 = ((state.candidate2 * 100) / total).toFixed(2);
  const porcentualCandidate3 = ((state.candidate3 * 100) / total).toFixed(2);
  const porcentualCandidate4 = ((state.candidate4 * 100) / total).toFixed(2);

  return (
    <div>
      <section className="resultsleft">
        <h2>Resultados Porcentuales</h2>
        <div>
          {state.porcentual && state.showCandidate1
            ? `Candidato 1: ${porcentualCandidate1} %`
            : null}
        </div>
        <div>
          {state.porcentual && state.showCandidate2
            ? `Candidato 2: ${porcentualCandidate2} %`
            : null}
        </div>
        <div>
          {state.porcentual && state.showCandidate3
            ? `Candidato 3: ${porcentualCandidate3} %`
            : null}
        </div>
        <div>
          {state.porcentual && state.showCandidate4
            ? `Candidato 4: ${porcentualCandidate4} %`
            : null}
        </div>
      </section>
      <section className="resultsright">
        <h2>Resultados Numericos</h2>
        {state.showCandidate1 && state.normal ? (
          <div>Candidate 1: {state.candidate1}</div>
        ) : null}
        {state.showCandidate2 && state.normal ? (
          <div>Candidate 2: {state.candidate2}</div>
        ) : null}
        {state.showCandidate3 && state.normal ? (
          <div>Candidate 3: {state.candidate3}</div>
        ) : null}
        {state.showCandidate4 && state.normal ? (
          <div>Candidate 4: {state.candidate4}</div>
        ) : null}
        {state.total ? <div>Total: {total}</div> : null}
      </section>
    </div>
  );
};

export default Total;

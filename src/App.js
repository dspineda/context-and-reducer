import { DataProvider } from "./store";
import Candidate1 from "./components/Candidate1";
import Candidate2 from "./components/Candidate2";
import Candidate3 from "./components/Candidate3";
import Candidate4 from "./components/Candidate4";
import ShowResults from "./components/ShowResults";
import Total from "./components/Total";
import "./App.css";

function App() {
  return (
    <>
      <DataProvider>
        <Candidate1 />
        <Candidate2 />
        <Candidate3 />
        <Candidate4 />
        <Total />
        <ShowResults />
      </DataProvider>
    </>
  );
}

export default App;

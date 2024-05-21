// import NotControlled from "../components/NotControlled";
import Cat from "../components/Cat";
import Controlled from "../components/Controlled";

const App = () => {
  return (
    <div className="container">
      <h1>Forms</h1>
      <Cat />
      {/* <NotControlled /> */}
      <Controlled />
    </div>
  );
};

export default App;

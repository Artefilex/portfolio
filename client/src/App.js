
import Location from "./Component/Nav/Location/Location";
import Nav from "./Component/Nav/Nav";

function App() {


  return <div className="App flex" style={{ flexDirection: "column" }}>
    <Nav />
    <div className="App-Container  flex">
      <Location />
    
    </div>
  </div>;
}

export default App;

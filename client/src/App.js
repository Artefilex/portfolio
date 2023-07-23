
import Location from "./Component/Nav/Location/Location";
import Nav from "./Component/Nav/Nav";
import Cookies from "universal-cookie"
function App() {
  const cookies = new Cookies();
  const adminCokkie = cookies.get("isAdmins")
  console.log(adminCokkie)

  return <div className="App flex" style={{ flexDirection: "column" }}>
    <Nav />
    <div className="App-Container  flex">
      <Location />
    
    </div>
  </div>;
}

export default App;

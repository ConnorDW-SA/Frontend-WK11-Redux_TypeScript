import NavBarSide from "./components/SideNavbar/NavBarSide";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarTop from "./components/NavBarTop/NavBarTop";

import Artists from "./components/Artists/Artists";

function App() {
  return (
    <div className="app">
      <NavBarTop />
      <NavBarSide />
      <Artists />
    </div>
  );
}

export default App;

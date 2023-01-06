import NavBarSide from "./components/SideNavbar/NavBarSide";
import "bootstrap/dist/css/bootstrap.min.css";
// import SongPlayer from "./components/SongPlayer/SongPlayer";
import NavBarTop from "./components/NavBarTop/NavBarTop";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import RenderAlbums from "./components/Albums/RenderAlbums";

function App() {
  const song = useSelector((state) => state.playBarSongReducer);
  console.log(song);
  return (
    <div className="app">
      <NavBarTop />
      <NavBarSide />

      {/* <Container>
        <h1>{song.name}</h1>
        <p>fewfew</p>
      </Container> */}
    </div>
  );
}

export default App;

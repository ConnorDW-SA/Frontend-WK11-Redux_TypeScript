import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./redux/favourites";

function App() {
  const { companies } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<favouritesSlice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

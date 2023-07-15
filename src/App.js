import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router";
import LayoutMobile from "./components/Mobile/Layout/Layout";
import CountryDetailsMobile from "./components/Mobile/CountyDetails/CountryDetails";
import LayoutDesktop from "./components/Desktop/Layout/Layout";
import CountryDetailsDesktop from "./components/Desktop/CountyDetails/CountryDetails";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  return (
    <Routes>
      <Route
        path="/"
        element={isMobile ? <LayoutMobile /> : <LayoutDesktop />}
      />
      <Route
        path="/:country"
        element={
          isMobile ? <CountryDetailsMobile /> : <CountryDetailsDesktop />
        }
      />
    </Routes>
  );
};
export default App;

import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router";
import LayoutMobile from "./components/Mobile/Layout/Layout";
import CountryDetails from "./components/Mobile/CountyDetails/CountryDetails";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  return (
    <Routes>
      <Route path="/" element={isMobile ? <LayoutMobile /> : "desktop"} />
      <Route
        path="/:country"
        element={isMobile ? <CountryDetails /> : "Desktop"}
      />
    </Routes>
  );
};
export default App;

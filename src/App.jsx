import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ansely from "./pages/Ansely";
import Damien from "./pages/Daiman";
import HarrisonSpice from "./pages/HarrisonSpice.jsx";
import Josh from "./pages/Josh";
import MusicHubPage from "./pages/MusicHubPage";
import BroadwayRemapping from "./pages/BroadwayRemapping.jsx";
import Boxfit from "./pages/Boxfit.jsx";
import OviBodyShop from "./pages/OviBodyShop.jsx";
import Afmok from "./pages/af-mokperformance.jsx";
import Slsmartrepair from "./pages/slsmartrepair.jsx";
import Nazmotors from "./pages/nazmotors.jsx";
import Earwego from "./pages/earwego.jsx";

import Stoneleys from "./pages/stoneleys.jsx";
import Tomas from "./pages/Tomas.jsx";
import Empire from "./pages/empire.jsx";
import Abbey from "./pages/Abbey.jsx";
import Amma from "./pages/Amma-kitchen-coventry.jsx";
import TK from "./pages/Tk.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/g.selva" element={<Ansely/>} />
        <Route path="/damien" element={<Damien />} />
        <Route path="/harrison-spice" element={<HarrisonSpice />} />
        <Route path="/josh" element={<Josh />} />
        <Route path="/music-hub" element={<MusicHubPage />} />
        <Route path="/broadway-remapping" element={<BroadwayRemapping />} />
        <Route path="/boxfitcoaching" element={<Boxfit />} />
        <Route path="/ovi-body-shop" element={<OviBodyShop />} />
        <Route path="/af-mokperformance" element={<Afmok />} />
        <Route path="/slsmartrepair" element={<Slsmartrepair />} />
        <Route path="/nazmotors" element={<Nazmotors />} />
        <Route path="/earwego" element={<Earwego />} />
        <Route path="/stoneleys" element={<Stoneleys />} />
        <Route path="/tomas" element={<Tomas />} />
        <Route path="/empire" element={<Empire />} />
        <Route path="/abbey" element={<Abbey />} />
        <Route path="/amma-kitchen-coventry" element={<Amma />} />
        <Route path="/tkautomotive" element={<TK />} />
      </Routes>
    </Router>
  );
}

export default App;

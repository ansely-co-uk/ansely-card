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
import HairDressBurn from "./pages/cards/HairDressBurn/HairDressBurn.jsx";
import ATB from "./pages/cards/ATB/ATB.jsx";
import Nikita from "./pages/cards/Nikita/Nikita.jsx";
import Baber from "./pages/cards/Baber/baber.jsx";
import RS from "./pages/cards/RS/Rs.jsx";
import Greystone from "./pages/cards/GeryStone/GreyStone.jsx";
import ChocoholicsDesserts from "./pages/cards/ChocoholicsDesserts/ChocoholicsDesserts.jsx";
import ShahzTyres from "./pages/cards/Shaz/Shaz.jsx";
import MehranGarages from "./pages/cards/mehransgarage/mehransgarage.jsx";
import RefurbDoctor from "./pages/cards/Refurb/Refurb.jsx";
import Smashed from "./pages/cards/Smash/Smash.jsx";
import Commit from "./pages/cards/Commit/Commit.jsx";
import SRK from "./pages/cards/SRK/srk.jsx";
import UNIT4 from "./pages/cards/Unit/Unit.jsx";
import UNIT3 from "./pages/cards/unit3/unit3.jsx";
import CenturionFastFit from "./pages/Centurian/centurian.jsx";
import Collingwood from "./pages/cards/CollingWood/Collingwood.jsx";
import Cambridge from "./pages/cards/cambridge/Cambridge.jsx";

import Stoneleys from "./pages/stoneleys.jsx";
import Tomas from "./pages/Tomas.jsx";
import Empire from "./pages/empire.jsx";
import Abbey from "./pages/Abbey.jsx";
import Amma from "./pages/Amma-kitchen-coventry.jsx";
import TK from "./pages/Tk.jsx";

import YorkshireInsulation from "./pages/YorkshireInsulation.jsx";
import JWcambridge from "./pages/JWcambridge.jsx";
import Dtdetails from "./pages/dtdetails.jsx";
import Masseydetailing from "./pages/masseydetailing.jsx";
import Scotland from "./pages/scotland.jsx";
import Auraautocare from "./pages/auraautocare.jsx";
import Rodnretros from "./pages/rodnretros.jsx";
import Nandjmotcentre from "./pages/nandjmotcentre.jsx";
import Nandjmotstation from "./pages/nandjmotstation.jsx";
import Progressworksgym from "./pages/progressworksgym.jsx";
import Dentmonkey from "./pages/Dentmonkey.jsx";
import BerkleyEstates from "./pages/BerkleyEstates.jsx";
import ACG from "./pages/ACG.jsx";
import Nottscarboncleaning from "./pages/nottscarboncleaning.jsx";


import EliteWheelsGlasgow from "./pages/elitewheelsglasgow.jsx";
import Alansautodetailing from "./pages/alansautodetailing.jsx";
import Sowafurniture from "./pages/sowafurniture.jsx";
import Crystalclean from "./pages/crystalclean.jsx";
import Maautoelectrics from "./pages/maautoelectrics.jsx";
import Ttautosgarage from "./pages/ttautosgarage.jsx";
import Jsautomotivedoncaster from "./pages/jsautomotivedoncaster.jsx";
import Kmlaccidentrepaircentre from "./pages/kmlaccidentrepaircentre.jsx";
import Kgpractice from "./pages/kgpractice.jsx";
import Hnthefinestcarvalet from "./pages/hnthefinestcarvalet.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/g.selva" element={<Ansely />} />
        <Route path="/damien" element={<Damien />} />
        <Route path="/harrison-spice" element={<HarrisonSpice />} />
        <Route path="/josh" element={<Josh />} />
        <Route path="/music-hub" element={<MusicHubPage />} />
        <Route path="/broadway-remapping" element={<BroadwayRemapping />} />
        <Route path="/boxfitcoaching" element={<Boxfit />} />
        <Route path="/ovi-body-shop" element={<OviBodyShop />} />
        <Route path="/af-mokperformance" element={<Afmok />} />
        <Route path="/afmokperformance" element={<Afmok />} />
        <Route path="/slsmartrepair" element={<Slsmartrepair />} />
        <Route path="/nazmotors" element={<Nazmotors />} />
        <Route path="/earwego" element={<Earwego />} />
        <Route path="/stoneleys" element={<Stoneleys />} />
        <Route path="/tomas" element={<Tomas />} />
        <Route path="/empire" element={<Empire />} />
        <Route path="/abbey" element={<Abbey />} />
        <Route path="/amma-kitchen-coventry" element={<Amma />} />
        <Route path="/tkautomotive" element={<TK />} />

        <Route path="/Burns-Hair-Design" element={<HairDressBurn />} />
        <Route path="/BurnsHairDesign" element={<HairDressBurn />} />
        <Route path="/atb-motor-engineers" element={<ATB />} />
        <Route path="/atbmotorengineers" element={<ATB />} />
        <Route path="/nikita-autocraft" element={<Nikita />} />
        <Route path="/nikitaautocraft" element={<Nikita />} />
        <Route path="/twenty-eight-barbers" element={<Baber />} />
        <Route path="/twentyeightbarbers" element={<Baber />} />
        <Route path="/rs-mobile-services" element={<RS />} />
        <Route path="/rsmobileservices" element={<RS />} />
        <Route path="/greystone-automotive" element={<Greystone />} />
        <Route path="/greystoneautomotive" element={<Greystone />} />
        <Route path="/chocoholics-desserts" element={<ChocoholicsDesserts />} />
        <Route path="/chocoholicsdesserts" element={<ChocoholicsDesserts />} />
        <Route path="/shahz-tyres" element={<ShahzTyres />} />
        <Route path="/shahztyres" element={<ShahzTyres />} />
        <Route path="/mehran-garages" element={<MehranGarages />} />
        <Route path="/mehrangarages" element={<MehranGarages />} />

        <Route path="/refurbdoctor" element={<RefurbDoctor />} />
        <Route path="/smashedburgers" element={<Smashed />} />
        <Route path="/committedfitness" element={<Commit />} />
        <Route path="/srkhospitality" element={<SRK />} />
        <Route path="/unit4" element={<UNIT4 />} />
        <Route path="/centurionfastfit" element={<CenturionFastFit />} />
        <Route path="/collingwood" element={<Collingwood />} />
        <Route path="/cambridgeautomotive" element={<Cambridge />} />
        <Route path="/unit3" element={<UNIT3 />} />

        <Route path="/yorkshire-insulation" element={<YorkshireInsulation />} />
        <Route path="/jwcambridge" element={<JWcambridge />} />
        <Route path="/dtdetails" element={<Dtdetails />} />
        <Route path="/masseydetailing" element={<Masseydetailing />} />
        <Route path="/scotland" element={<Scotland />} />
        <Route path="/auraautocare" element={<Auraautocare />} />
        <Route path="/rodnretros" element={<Rodnretros />} />
        <Route path="/nandjmotcentre" element={<Nandjmotcentre />} />
        <Route path="/nandjmotstation" element={<Nandjmotstation />} />
        <Route path="/progressworksgym" element={<Progressworksgym />} />
        <Route path="/dentmonkey" element={<Dentmonkey />} />
        <Route path="/berkleyestates" element={<BerkleyEstates />} />
        <Route path="/acg" element={<ACG />} />
        <Route path="/notts-carboncleaning" element={<Nottscarboncleaning />} />


        <Route path="/elitewheelsglasgow" element={<EliteWheelsGlasgow />} />
        <Route path="/alansautodetailing" element={<Alansautodetailing />} />
        <Route path="/sowafurniture" element={<Sowafurniture />} />
        <Route path="/crystalclean" element={<Crystalclean />} />
        <Route path="/maautoelectrics" element={<Maautoelectrics />} />
        <Route path="/ttautosgarage" element={<Ttautosgarage />} />
        <Route path="/jsautomotivedoncaster" element={<Jsautomotivedoncaster />} />
        <Route path="/kmlaccidentrepaircentre" element={<Kmlaccidentrepaircentre />} />
        <Route path="/kgpractice" element={<Kgpractice />} />
        <Route path="/hnthefinestcarvalet" element={<Hnthefinestcarvalet />} />
      </Routes>
    </Router>
  );
}

export default App;

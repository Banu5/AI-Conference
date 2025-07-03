import { Routes, Route } from "react-router-dom";

import Home from "./components/page/Home";
import About from "./components/page/About";
import CallForPapers from "./components/page/CallForPapers";
import Price from "./components/page/Price";
import Program from "./components/page/Program";
import More from "./components/page/More"; // Import the More page
import ModernFooter from "./components/ModernFooter"; // Import the footer

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home at root */}
        <Route path="/home" element={<Home />} /> {/* Optional: /home also works */}
        <Route path="/about" element={<About />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/price" element={<Price />} />
        <Route path="/program" element={<Program />} />
        <Route path="/more" element={<More />} /> {/* New More page */}
      </Routes>
      <ModernFooter /> {/* Footer always visible */}
    </>
  );
};

export default App;

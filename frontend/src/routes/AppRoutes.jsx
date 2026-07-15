import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Resume from "../pages/Resume";
import Career from "../pages/Career";
import Interview from "../pages/Interview";
import Jobs from "../pages/Jobs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarScene from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contact from "./scenes/contcts";
import Invoice from "./scenes/invoice";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geo from "./scenes/geo";
function App() {
  const [colorMode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <div className="app">
        <SidebarScene />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/invoices" element={<Invoice />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geo />} />
          </Routes>
        </main>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;

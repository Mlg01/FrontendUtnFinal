import { Route, Routes } from "react-router-dom";

import TurnoPage from "./pages/TurnoPage";
import TurnoForm from "./pages/TurnoForm";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { TurnoContextProvider } from "./context/TurnoProvider";

import Navbar from "./components/Navbar";
import Servicios from "./pages/Servicios";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TurnoContextProvider>
          <Routes>
            <Route path="/" element={<TurnoPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/new" element={<TurnoForm />} />
            <Route path="/edit/:id" element={<TurnoForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TurnoContextProvider>
        <Footer />
        </div>
    </div>
  );
}

export default App;

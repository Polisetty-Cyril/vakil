import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { Appbar } from "./components/Appbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-plus max-w-screen">
      <Appbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

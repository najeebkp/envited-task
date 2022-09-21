import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/index.scss";
import LandingPage from "./Pages/LandingPage";
import CreatePage from "./Pages/CreatePage";
import EventPage from "./Pages/EventPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/event" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

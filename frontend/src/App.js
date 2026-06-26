import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "@/lib/SmoothScroll";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </div>
  );
}

export default App;

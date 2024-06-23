import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

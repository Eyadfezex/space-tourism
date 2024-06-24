import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;

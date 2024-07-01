/* eslint-disable react-hooks/exhaustive-deps */
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Loading } from "./components/loading-screen/Loading";
import { Routes, Route } from "react-router-dom";
import { Crew } from "./pages/Crew";
import { SideBar } from "./components/side-bar/SideBar";
import { NavBar } from "./components/navBar/NavBar";
import { SideBarProvider } from "./context/SideBarContext";
import { Tech } from "./pages/Tech";
function App() {
  return (
    <div>
      <>
        <Loading />
        <SideBarProvider>
          <SideBar />
          <NavBar />
        </SideBarProvider>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Tech />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

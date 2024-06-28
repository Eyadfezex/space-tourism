/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Loading } from "./components/loading-screen/Loading";
import { Routes, Route } from "react-router-dom";
import { Crew } from "./pages/Crew";
import { SideBar } from "./components/side-bar/SideBar";
import { NavBar } from "./components/navBar/NavBar";
import { SideBarProvider } from "./context/SideBarContext";
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname !== "/" ? (window.location.href = "/") : "";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, [location.pathname]);
  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <div className="h-full">
      {loading ? (
        <Loading />
      ) : (
        <>
          <SideBarProvider>
            <SideBar />
            <NavBar />
          </SideBarProvider>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

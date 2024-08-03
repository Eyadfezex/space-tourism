import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <div
      className={`absolute z-20 flex items-center justify-center w-full h-screen bg-navy ${loading ? "block" : "hidden"}`}
    >
      <PropagateLoader color="white" />
    </div>
  );
};

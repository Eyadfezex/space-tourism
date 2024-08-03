import { useState } from "react";
import { PropagateLoader } from "react-spinners";
export const Loading = () => {
  const [loading, setLoading] = useState(true);
  window.onload = function () {
    setLoading(false);
  };
  return (
    <div
      className={`absolute z-20 flex items-center justify-center w-full h-screen bg-navy ${loading ? "block" : "hidden"}`}
    >
      <PropagateLoader color="white" />
    </div>
  );
};

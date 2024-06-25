import { PropagateLoader } from "react-spinners";
export const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-navy">
      <PropagateLoader color="white" />
    </div>
  );
};

import { useEffect, useState } from "react";
import CircularProgress from "../../components/CircularProgress/CircularProgress";

export default function CircularProgressComp() {
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   if (value >= 100) return;

  //   const timeout = setTimeout(() => {
  //     setValue((prev) => prev + 5);
  //   }, 100);

  //   return () => clearTimeout(timeout);
  // }, [value]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Circular Progress</h3>
      <CircularProgress
        // value={value}
        size={60}
        color="primary"
      >
        {/* {value}% */}
      </CircularProgress>
    </div>
  );
}

import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";

export const Scan = () => {
  const [result, setResult] = useState("");
  let navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(result) {
      navigate(`/bookdata/${result}`);
    },
  });

  return (
    <>
      <div className="flex justify-center mt-10">
        <video ref={ref} />
      </div>
    </>
  );
};
export default Scan;

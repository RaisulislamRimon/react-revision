import React, { useState } from "react";

const Mobile = () => {
  const [charge, setCharge] = useState(100);
  const handleCharge = () => {
    if (charge > 0) setCharge(charge - 10);
  };
  return (
    <div style={{ paddingBottom: "30px" }}>
      <h1>Mobile Component</h1>
      <h3>{charge}</h3>

      <button
        // onClick={handleCharge}
        // disabled={charge === 0}
        // onClick={handleCharge} // worked but error in console
        // will use this line below:
        // onClick={charge > 0 ? handleCharge : null} // worked
        // {
        //     charge < 0 &&
        //     disabled
        // }
        onClick={handleCharge}
        style={{
          padding: "15px",
          backgroundColor: "aqua",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Battery Down (-)
      </button>

      {/* {charge > 0 ? (
        <button
          onClick={handleCharge}
          style={{
            padding: "15px",
            backgroundColor: "aqua",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Battery Down (-)
        </button>
      ) : (
        <button
          onClick={handleCharge}
          disabled
          style={{
            padding: "15px",
            backgroundColor: "aqua",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Battery Down (-)
        </button>
      )} */}

      {/* {charge > 0 && (
        <button
          onClick={handleCharge}
          style={{
            padding: "15px",
            backgroundColor: "aqua",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Battery Down (-)
        </button>
      )} */}
    </div>
  );
};

export default Mobile;

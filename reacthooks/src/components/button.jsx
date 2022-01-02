import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [buttonToggle, setButtonToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setButtonToggle(!buttonToggle);
    },
  }));

  const handleButtonToggle = () => {
    setButtonToggle(!buttonToggle);
  };
  return (
    <div>
      <button onClick={handleButtonToggle}>Button from child</button>
      <p>{buttonToggle ? "Display some text" : ""}</p>
    </div>
  );
});

export default Button;

import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import Toggle from "./Toggle";

const TheTwo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [change, setChange] = useState(false);

  const getPosition = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", getPosition);
  return (
    <div>
      <HeaderNav
        clr={change ? "white" : ""}
        good={change ? "1px solid rgba(0, 0, 0, 0.1)" : ""}
        toggle={toggle}
      />
      <Toggle open={open} toggle={toggle} />
    </div>
  );
};

export default TheTwo;

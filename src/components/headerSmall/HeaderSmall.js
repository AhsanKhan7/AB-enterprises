import React from "react";

function HeaderSmall({ active, setActive }) {
  const HandleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <button onClick={HandleClick}>X</button>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default HeaderSmall;

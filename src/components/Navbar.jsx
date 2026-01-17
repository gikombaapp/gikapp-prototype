import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row bg-[#F3F0F8] px-3 py-5 w-full">
      <div className="flex flex-row bg-[#F3F0F8] w-full justify-around">
        <span>GikApp</span>
        <div className="w-[40vw] h-fit py-2 pl-2 rounded-2xl outline outline-[#b5b2ba] bg-[#eae8ee]"> Search{/* Search bar */}</div>
        <ul className="flex relative right-4">
          <li className="inline">
            <a href="">Sell</a>
          </li>
          <li className="inline">
            <a href="">Cart</a>
          </li>
          <li className="inline">
            <a href="">Profile</a>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;

import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-col bg-[#F3F0F8] w-full">
      <div className="flex flex-row bg-[#F3F0F8]  px-3 py-5 w-full justify-around items-center">
        <span className="text-2xl text-[#8B60C3] font-bold">Gikomba.App</span>
        <input type="text" className="w-[40vw] h-fit py-2 pl-2 rounded-2xl outline outline-[#b5b2ba] bg-[#eae8ee]" placeholder="Search Bar"/> 
        <ul className="flex relative right-4">
          <li className="inline pr-5">
            <a href="">Sell</a>
          </li>
          <li className="inline px-5">
            <a href="">Profile</a>
          </li>
          <li className="inline px-5">
            <a href="">Settings</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row outline bg-[#BEFF72] outline-[#d5d4d9] w-full h-12 justify-around items-center">
        <ul className="flex gap-4 list-none p-0 m-0 w-full justify-around">
            <li className="px-3 text-sm">MY FEED</li>
            <li className="px-3 text-sm">NOTIFICATIONS</li>
            <li className="px-3 text-sm">SAVED</li>
            <li className="px-3 text-sm">CART</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

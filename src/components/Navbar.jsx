import React from "react";
import { useAuthStore } from "../stores/authStore";

function Navbar() {
  // Use Zustand state safely with a selector
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="flex flex-col bg-[#F3F0F8] w-full sticky top-0 z-50">
      {/* Top Row */}
      <div className="flex flex-row bg-[#F3F0F8] px-3 py-5 w-full justify-around items-center">
        <span className="text-2xl text-[#8B60C3] font-bold">Gikomba.App</span>
        <input
          type="text"
          className="w-[40vw] h-fit py-2 pl-2 rounded-2xl outline outline-[#b5b2ba] bg-[#eae8ee]"
          placeholder="Search for Clothes, Categories, Brands e.t.c"
        />

        <ul className="flex relative right-4 items-center space-x-4 list-none p-0 m-0">
          <li>
            <a href="">Sell</a>
          </li>

          {user ? (
            <>
              <li>
                <a href="">Profile ({user.email})</a>
              </li>
              <li>
                <button onClick={logout} className="hover:underline">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Register
                </a>
              </li>
            </>
          )}

          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-row outline bg-[#BEFF72] outline-[#d5d4d9] w-full h-12 justify-around items-center">
        <ul className="flex gap-4 list-none p-0 m-0 w-full justify-around">
          <li className="px-3 text-sm">MY FEED</li>
          <li className="px-3 text-sm">NOTIFICATIONS</li>
          <li className="px-3 text-sm">BUY</li>
          <li className="px-3 text-sm">SAVED</li>
          <li className="px-3 text-sm">CART</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

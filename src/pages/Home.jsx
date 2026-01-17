import React from "react";

function Home() {
  return (
        // Hero section
        <div className="flex flex-col justify-center w-full h-[45vh] bg-[#0098B3] pl-25">
            <h1 className="text-5xl font-bold text-[#BEFF72]">The Gikomba app project</h1>
            <h2 className="text-3xl font-light italic text-[#BEFF72]">[Prototype Ver]</h2>
            <div>
            <button className="bg-[#BEFF72] text-[#0098B3] p-4 m-3 rounded-2xl hover:cursor-pointer outline-2 hover:outline-[#BEFF72] hover:text-[#BEFF72] hover:bg-[#0098B3]">Shop Now</button>
            <button className="bg-[#0098B3] text-[#BEFF72] p-4 m-3 rounded-2xl hover:cursor-pointer outline-2 outline-[#BEFF72] hover:text-[#0098B3] hover:bg-[#BEFF72]">Start Selling</button>
            </div>
            
        </div>
  );
}

export default Home;

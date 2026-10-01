"use client";

export default function Navbar() {

  return (

    <nav className="w-full flex justify-between items-center py-6">


      <div className="text-2xl font-bold">

        🔥 Blunder Radar AI

      </div>



      <div className="flex gap-6 text-gray-300">

        <a href="#scanner">
          Scanner
        </a>


        <a href="#whale">
          Whale
        </a>


        <a href="#about">
          About
        </a>

      </div>


    </nav>

  );

}

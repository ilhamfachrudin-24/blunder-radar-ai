"use client";

export default function Navbar() {


  return (

    <nav className="w-full flex items-center justify-between py-6">


      {/* LOGO */}

      <div className="flex items-center gap-3">


        <div className="text-3xl">

          🔥

        </div>


        <div>


          <h1 className="text-xl font-bold">

            Blunder Radar AI

          </h1>


          <p className="text-xs text-gray-400">

            Solana Intelligence

          </p>


        </div>


      </div>





      {/* MENU */}

      <div className="hidden md:flex items-center gap-8 text-gray-300">


        <a

          href="#scanner"

          className="hover:text-white transition"

        >

          Scanner

        </a>



        <a

          href="#whale"

          className="hover:text-white transition"

        >

          Whale

        </a>



        <a

          href="#about"

          className="hover:text-white transition"

        >

          Builder

        </a>



      </div>





      {/* BUTTON */}

      <a

        href="https://github.com"

        target="_blank"

        className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"

      >

        GitHub

      </a>



    </nav>

  );

}

export default function Footer() {

  return (

    <footer className="mt-20 py-10 border-t border-white/10">


      <div className="grid md:grid-cols-3 gap-8">


        {/* BRAND */}

        <div>

          <h2 className="text-2xl font-bold">

            🔥 Blunder Radar AI

          </h2>


          <p className="mt-3 text-gray-400">

            AI-powered Solana intelligence platform
            for token analysis, smart money tracking,
            and Web3 research.

          </p>


        </div>





        {/* PROJECT */}

        <div>

          <h3 className="font-bold text-lg">

            Project

          </h3>


          <div className="mt-4 flex flex-col gap-3 text-gray-400">


            <a href="#scanner">

              Token Scanner

            </a>


            <a href="#whale">

              Whale Tracker

            </a>


            <a href="#about">

              About Builder

            </a>


          </div>


        </div>





        {/* SOCIAL */}

        <div>

          <h3 className="font-bold text-lg">

            Connect

          </h3>


          <div className="mt-4 flex flex-col gap-3">


            <a

              href="https://github.com"

              target="_blank"

              className="text-gray-400 hover:text-white transition"

            >

              GitHub

            </a>




            <a

              href="https://twitter.com"

              target="_blank"

              className="text-gray-400 hover:text-white transition"

            >

              X / Twitter

            </a>




            <a

              href="https://linkedin.com"

              target="_blank"

              className="text-gray-400 hover:text-white transition"

            >

              LinkedIn

            </a>


          </div>


        </div>


      </div>





      <div className="mt-10 pt-6 border-t border-white/10 text-gray-500 text-sm">


        © 2026 Blunder Radar AI.
        Built with Next.js and Web3 technology.


      </div>



    </footer>

  );

}

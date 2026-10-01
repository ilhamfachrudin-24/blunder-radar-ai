export default function Footer() {

  return (

    <footer className="mt-20 py-10 border-t border-white/10">


      <div className="flex flex-col md:flex-row justify-between gap-6">


        <div>


          <h2 className="text-xl font-bold">

            🔥 Blunder Radar AI

          </h2>


          <p className="text-gray-400 mt-2">

            AI-powered Solana intelligence platform.

          </p>


        </div>




        <div className="flex gap-4">


          <a

          href="https://github.com"

          target="_blank"

          className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition"

          >

            GitHub

          </a>



          <a

          href="https://twitter.com"

          target="_blank"

          className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition"

          >

            X / Twitter

          </a>



          <a

          href="https://linkedin.com"

          target="_blank"

          className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition"

          >

            LinkedIn

          </a>


        </div>


      </div>



      <p className="text-gray-500 mt-8 text-sm">

        © 2026 Blunder Radar AI. Built for Web3 research.

      </p>


    </footer>

  );

}

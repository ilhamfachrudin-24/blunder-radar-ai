export default function Home() {
  return (
    <main>

      <section className="container pt-20">

        <h1 className="text-5xl font-bold gradient-text">
          Blunder Radar AI
        </h1>

        <p className="mt-5 text-gray-300 text-lg">
          AI-powered Solana memecoin analysis and risk scanner
          for Web3 traders.
        </p>


        <div className="card mt-10">

          <h2 className="text-2xl font-bold">
            Token Scanner
          </h2>

          <p className="mt-3 text-gray-400">
            Enter Solana token address to analyze market data,
            liquidity, and risk factors.
          </p>


          <div className="flex gap-4 mt-6">

            <input
              type="text"
              placeholder="Enter Solana Token Address"
              className="flex-1 p-4 rounded-xl bg-black border border-white/20"
            />


            <button
              className="px-6 rounded-xl bg-white text-black font-bold"
            >
              Analyze
            </button>

          </div>

        </div>



        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="card">
            <h3 className="text-xl font-bold">
              Risk Score
            </h3>

            <p className="text-4xl mt-4 gradient-text">
              82/100
            </p>

            <p className="text-gray-400 mt-2">
              Low Risk
            </p>
          </div>



          <div className="card">
            <h3 className="text-xl font-bold">
              Liquidity
            </h3>

            <p className="text-3xl mt-4">
              $250K
            </p>

            <p className="text-gray-400 mt-2">
              Healthy Pool
            </p>
          </div>



          <div className="card">
            <h3 className="text-xl font-bold">
              Whale Activity
            </h3>

            <p className="text-3xl mt-4">
              Active
            </p>

            <p className="text-gray-400 mt-2">
              Smart Money Tracking
            </p>
          </div>


        </div>



        <div className="card mt-10">

          <h2 className="text-2xl font-bold">
            Blunder AI Rating
          </h2>


          <p className="mt-4 text-gray-300">
            AI analysis will evaluate liquidity,
            holder distribution, trading activity,
            and potential risks.
          </p>

        </div>


      </section>

    </main>
  );
}

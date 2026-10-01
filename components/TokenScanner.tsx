export default function TokenScanner() {
  return (
    <div className="card">

      <h2 className="text-2xl font-bold">
        Token Scanner
      </h2>

      <p className="mt-3 text-gray-400">
        Analyze Solana tokens, liquidity,
        trading activity, and risk factors.
      </p>


      <div className="flex flex-col md:flex-row gap-4 mt-6">

        <input
          type="text"
          placeholder="Paste Solana Token Address"
          className="flex-1 p-4 rounded-xl bg-black border border-white/20"
        />


        <button
          className="px-6 py-3 rounded-xl bg-white text-black font-bold"
        >
          Analyze Token
        </button>

      </div>

    </div>
  );
}

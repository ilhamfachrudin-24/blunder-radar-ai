"use client";

import { useState } from "react";

export default function TokenScanner() {

  const [address, setAddress] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);


  async function analyzeToken() {

    if (!address) return;

    setLoading(true);


    try {

      const response = await fetch(
        `/api/token?address=${address}`
      );


      const result = await response.json();


      setData(result);


    } catch (error) {

      console.log(error);

    }


    setLoading(false);

  }


  const pair = data?.pairs?.[0];


  return (

    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        Token Scanner
      </h2>


      <p className="mt-3 text-gray-400">
        Analyze Solana token market data using
        DexScreener.
      </p>



      <div className="flex flex-col md:flex-row gap-4 mt-6">


        <input

          value={address}

          onChange={(e)=>setAddress(e.target.value)}

          placeholder="Paste Solana Token Address"

          className="flex-1 p-4 rounded-xl bg-black border border-white/20"

        />


        <button

          onClick={analyzeToken}

          className="px-6 py-3 rounded-xl bg-white text-black font-bold"

        >

          {loading ? "Scanning..." : "Analyze"}

        </button>


      </div>




      {pair && (

        <div className="mt-8 card">


          <h3 className="text-xl font-bold">
            Token Result
          </h3>


          <div className="mt-5 space-y-3 text-gray-300">


            <p>
              Pair:
              {pair.baseToken?.name}
            </p>


            <p>
              Symbol:
              {pair.baseToken?.symbol}
            </p>


            <p>
              Price:
              ${pair.priceUsd}
            </p>


            <p>
              Liquidity:
              ${pair.liquidity?.usd}
            </p>


            <p>
              Volume 24h:
              ${pair.volume?.h24}
            </p>


            <p>
              DEX:
              {pair.dexId}
            </p>


          </div>


        </div>

      )}


    </div>

  );

}

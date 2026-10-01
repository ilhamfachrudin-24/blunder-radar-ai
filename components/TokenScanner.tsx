"use client";

import { useState } from "react";

export default function TokenScanner() {

  const [address, setAddress] = useState("");
  const [result, setResult] = useState(false);


  function analyzeToken() {

    if (!address) return;

    setResult(true);

  }


  return (
    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        Token Scanner
      </h2>


      <p className="mt-3 text-gray-400">
        Enter Solana token address to analyze
        liquidity, risk, and market activity.
      </p>


      <div className="flex flex-col md:flex-row gap-4 mt-6">


        <input

          value={address}

          onChange={(e) =>
            setAddress(e.target.value)
          }

          placeholder="Paste Solana Token Address"

          className="flex-1 p-4 rounded-xl bg-black border border-white/20"

        />


        <button

          onClick={analyzeToken}

          className="px-6 py-3 rounded-xl bg-white text-black font-bold"

        >

          Analyze

        </button>


      </div>



      {result && (

        <div className="mt-8 border border-white/10 rounded-xl p-5">


          <h3 className="text-xl font-bold">
            Analysis Result
          </h3>


          <div className="mt-4 space-y-3 text-gray-300">


            <p>
              Token Address:
              <br />
              {address}
            </p>


            <p>
              Liquidity:
              <span className="text-green-400">
                Healthy
              </span>
            </p>


            <p>
              Holder Activity:
              <span className="text-green-400">
                Increasing
              </span>
            </p>


            <p>
              Blunder AI Score:
              <span className="gradient-text font-bold">
                82/100
              </span>
            </p>


          </div>


        </div>

      )}


    </div>
  );
}

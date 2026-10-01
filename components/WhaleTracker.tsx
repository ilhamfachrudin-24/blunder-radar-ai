"use client";

import { useState } from "react";


export default function WhaleTracker() {

  const [wallet, setWallet] = useState("");
  const [tracking, setTracking] = useState(false);


  function trackWallet() {

    if (!wallet) return;

    setTracking(true);

  }


  return (

    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        🐋 Smart Money Whale Tracker
      </h2>


      <p className="mt-3 text-gray-400">
        Monitor Solana wallets and track
        smart money activity.
      </p>


      <div className="flex flex-col md:flex-row gap-4 mt-6">


        <input

          value={wallet}

          onChange={(e)=>setWallet(e.target.value)}

          placeholder="Paste Solana Wallet Address"

          className="flex-1 p-4 rounded-xl bg-black border border-white/20"

        />


        <button

          onClick={trackWallet}

          className="px-6 py-3 rounded-xl bg-white text-black font-bold"

        >

          Track Wallet

        </button>


      </div>



      {tracking && (

        <div className="mt-8 border border-white/10 rounded-xl p-5">


          <h3 className="text-xl font-bold">
            Wallet Analysis
          </h3>


          <div className="mt-4 space-y-3 text-gray-300">


            <p>
              Wallet:
              {wallet}
            </p>


            <p>
              Status:
              <span className="text-green-400">
                Monitoring Active
              </span>
            </p>


            <p>
              Activity:
              Analyzing transactions...
            </p>


            <p>
              Smart Money Score:
              <span className="gradient-text font-bold">
                75/100
              </span>
            </p>


          </div>


        </div>

      )}


    </div>

  );

}

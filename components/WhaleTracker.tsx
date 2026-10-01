"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function WhaleTracker() {


  const {
    analysis,
    setAnalysis
  } = useAnalysis();



  const [wallet, setWallet] = useState("");

  const [loading, setLoading] = useState(false);



  async function analyzeWallet() {


    if (!wallet) return;



    try {


      setLoading(true);



      // Placeholder smart money analysis
      // nanti bisa diganti Helius/Birdeye API


      const walletData = {


        address: wallet,


        activity: "Detected",


        smartMoneyScore: 70,


        label: "Potential Smart Money"


      };



      setAnalysis({

        ...analysis,

        wallet: walletData

      });



    }

    finally {


      setLoading(false);


    }


  }





  const walletData =
    analysis?.wallet;





  return (

    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🐋 Smart Money Whale Tracker

      </h2>




      <input


        value={wallet}


        onChange={(e)=>setWallet(e.target.value)}


        placeholder="Enter wallet address"


        className="mt-5 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3"


      />





      <button


        onClick={analyzeWallet}


        className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition"


      >

        {loading ? "Analyzing..." : "Analyze Wallet"}

      </button>






      {!walletData && (


        <p className="mt-5 text-gray-400">

          Waiting for wallet analysis...

        </p>


      )}







      {walletData && (


        <div className="mt-6 space-y-3 text-gray-300">



          <p>

            Wallet:

            <span className="ml-2">

              {walletData.address}

            </span>

          </p>





          <p>

            Status:

            <span className="ml-2 text-green-400">

              {walletData.label}

            </span>

          </p>





          <p>

            Smart Money Score:

            <span className="ml-2 gradient-text font-bold">

              {walletData.smartMoneyScore}/100

            </span>

          </p>



        </div>


      )}



    </div>

  );

}

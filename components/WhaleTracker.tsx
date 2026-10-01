"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";

export default function WhaleTracker() {

  const {analysis,setAnalysis} = useAnalysis();
  const [wallet, setWallet] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);



  async function trackWallet() {

    if (!wallet) return;


    setLoading(true);


    try {

      const response =
        await fetch(
          `/api/wallet?wallet=${wallet}`
        );


      const result =
        await response.json();


      setData(result);

      setAnalysis({

  ...analysis,

  wallet: result

});


    } catch(error) {

      console.log(error);

    }


    setLoading(false);

  }



  return (

    <div className="card mt-10">


      <h2 className="text-2xl font-bold">
        🐋 Smart Money Whale Tracker
      </h2>


      <p className="mt-3 text-gray-400">
        Track Solana wallets and analyze
        smart money activity.
      </p>



      <div className="flex flex-col md:flex-row gap-4 mt-6">


        <input

          value={wallet}

          onChange={(e)=>
            setWallet(e.target.value)
          }

          placeholder="Paste Solana Wallet Address"

          className="flex-1 p-4 rounded-xl bg-black border border-white/20"

        />



        <button

          onClick={trackWallet}

          className="px-6 py-3 rounded-xl bg-white text-black font-bold"

        >

          {loading
          ? "Tracking..."
          : "Track Wallet"}

        </button>


      </div>




      {data && (

        <div className="mt-8 border border-white/10 rounded-xl p-5">


          <h3 className="text-xl font-bold">
            Wallet Intelligence
          </h3>



          <div className="mt-5 space-y-3 text-gray-300">


            <p>
              Wallet:
              {data.wallet}
            </p>



            <p>
              SOL Balance:
              {data.balance}
              SOL
            </p>



            <p>
              Recent Transactions:
              {data.transactions}
            </p>



            <p>
              Smart Money Score:

              <span className="gradient-text font-bold">
                {data.smartMoneyScore}/100
                <p>
 Status:

 <span className="text-green-400">
 {data.smartMoneyStatus}
 </span>

</p>
              </span>

            </p>


          </div>


        </div>

      )}


    </div>

  );

}

"use client";

import { useState } from "react";
import { getWalletData } from "@/lib/walletData";


export default function WhaleTracker() {


  const [wallet, setWallet] =
    useState("");



  const [data, setData] =
    useState<any>(null);



  const [loading, setLoading] =
    useState(false);







  async function analyzeWallet() {


    if (!wallet) return;



    try {


      setLoading(true);



      const result =

        await getWalletData(wallet);



      setData(result);



    }

    finally {


      setLoading(false);


    }


  }







  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🐋 Smart Money Intelligence

      </h2>





      <p className="mt-3 text-gray-400">

        Analyze Solana wallet activity
        and smart money signals.

      </p>






      <input


        value={wallet}


        onChange={(e)=>

          setWallet(e.target.value)

        }


        placeholder="Enter Solana wallet address"


        className="mt-5 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3"


      />







      <button


        onClick={analyzeWallet}


        className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-bold"


      >


        {loading
          ? "Analyzing..."
          : "Analyze Wallet"}


      </button>







      {data && (



        <div className="mt-8 space-y-4 text-gray-300">



          <p>

            Balance:

            <span className="ml-2 text-green-400">

              {data.balance} SOL

            </span>


          </p>






          <p>

            Transactions:

            <span className="ml-2">

              {data.transactions}

            </span>


          </p>







          <p>

            Smart Money Score:

            <span className="ml-2 gradient-text font-bold">

              {data.smartMoneyScore}/100

            </span>


          </p>







          <p>

            Signal:

            <span className="ml-2 text-yellow-400">

              {data.smartMoneyStatus}

            </span>


          </p>





        </div>


      )}





    </div>


  );

}

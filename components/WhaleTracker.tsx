"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { analyzeSmartMoney } from "@/lib/smartMoney";


export default function WhaleTracker() {


  const {

    analysis,

    setAnalysis

  } = useAnalysis();





  useEffect(() => {


    if (!analysis?.tokenAddress) return;




    const smartMoney = analyzeSmartMoney({



      wallets: [],



      accumulation: true



    });






    setAnalysis({


      ...analysis,


      wallet: smartMoney



    });





  }, [analysis?.tokenAddress]);







  const wallet =

    analysis?.wallet;







  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🐋 Smart Money Intelligence

      </h2>







      {!wallet && (


        <p className="mt-5 text-gray-400">

          Waiting for token analysis...

        </p>


      )}







      {wallet && (



        <div className="mt-6 space-y-4 text-gray-300">



          <p>

            Whale Wallet:

            <span className="ml-2 text-green-400">

              {wallet.whaleCount}

            </span>

          </p>






          <p>

            Smart Money Score:

            <span className="ml-2 gradient-text font-bold">

              {wallet.smartMoneyScore}/100

            </span>

          </p>






          <p>

            Signal:

            <span className="ml-2 text-yellow-400">

              {wallet.status}

            </span>

          </p>






          <p>

            Accumulation:

            <span className="ml-2 text-white">

              {wallet.accumulation ? "Detected" : "None"}

            </span>

          </p>





        </div>


      )}



    </div>


  );

}

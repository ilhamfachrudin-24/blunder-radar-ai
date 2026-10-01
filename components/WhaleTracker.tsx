"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function WhaleTracker() {


  const {

    analysis,

    setAnalysis

  } = useAnalysis();





  useEffect(() => {


    if (!analysis?.tokenAddress) return;





    async function analyzeWhales() {



      // Placeholder smart money engine
      // nanti diganti Helius/Birdeye API





      const whaleData = {


        walletCount: 5,


        smartMoneyScore: 70,


        activity: "Accumulation Detected",


        status: "Potential Smart Money"



      };







      setAnalysis({


        ...analysis,


        wallet: whaleData



      });





    }






    analyzeWhales();




  }, [analysis?.tokenAddress]);







  const wallet =

    analysis?.wallet;







  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🐋 Smart Money Whale Tracker

      </h2>






      {!wallet && (


        <p className="mt-5 text-gray-400">

          Waiting for token analysis...

        </p>


      )}






      {wallet && (



        <div className="mt-6 space-y-4 text-gray-300">



          <p>


            Whale Wallet Detected:


            <span className="ml-2 text-green-400">

              {wallet.walletCount}

            </span>


          </p>





          <p>


            Activity:


            <span className="ml-2 text-yellow-400">

              {wallet.activity}

            </span>


          </p>





          <p>


            Smart Money Score:


            <span className="ml-2 gradient-text font-bold">

              {wallet.smartMoneyScore}/100

            </span>


          </p>





          <p>


            Status:


            <span className="ml-2 text-white">

              {wallet.status}

            </span>


          </p>




        </div>


      )}




    </div>


  );

}

"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { getTokenHolders } from "@/lib/holderWallets";
import { rankWallets } from "@/lib/walletRanking";


export default function WhaleTracker() {


  const {
    analysis
  } = useAnalysis();



  const [wallets,setWallets] =
    useState<any[]>([]);



  const [loading,setLoading] =
    useState(false);






  async function scanWhales(){



    const tokenAddress =
      analysis?.tokenAddress;



    if(!tokenAddress) return;





    try {


      setLoading(true);




      const holders =

        await getTokenHolders(

          tokenAddress

        );






      const ranked =

        rankWallets(

          holders

        );






      setWallets(ranked);





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

        Detect whale holders and smart money wallets automatically.

      </p>






      {!analysis?.tokenAddress && (


        <p className="mt-5 text-yellow-400">

          Analyze a token first.

        </p>


      )}







      {analysis?.tokenAddress && (



        <button


          onClick={scanWhales}


          className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-bold"


        >


          {loading

          ? "Scanning..."

          : "Scan Smart Money"}


        </button>



      )}








      <div className="mt-8 space-y-5">



        {wallets.slice(0,10).map(

          (wallet,index)=>(



          <div

          key={index}

          className="border border-white/10 rounded-xl p-5"

          >



            <h3 className="text-xl font-bold">

              #{index+1}

              {" "}

              {wallet.label}

            </h3>





            <p className="text-gray-400 mt-2">

              Wallet:

              {wallet.wallet}

            </p>






            <p>

              Amount:

              <span className="ml-2 text-green-400">

                {wallet.balance}

              </span>

            </p>






            <p className="mt-3 text-2xl font-bold gradient-text">

              Smart Score:

              {wallet.score}/100

            </p>



          </div>



        ))}



      </div>




    </div>


  );

}

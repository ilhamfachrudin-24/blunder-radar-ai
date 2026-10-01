"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";

import { getTokenHolders } from "@/lib/holderWallets";
import { rankWallets } from "@/lib/walletRanking";
import { calculateSmartMoneyScore } from "@/lib/smartMoneyScore";


export default function WhaleTracker() {


  const {
    analysis,
    setAnalysis
  } = useAnalysis();



  const [wallets, setWallets] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");





  async function scanWhales() {


    const tokenAddress =
      analysis?.tokenAddress;



    if (!tokenAddress) {

      setError("Analyze token first");

      return;

    }




    try {


      setLoading(true);

      setError("");




      const holders =
        await getTokenHolders(
          tokenAddress
        );





      if (!holders || holders.length === 0) {

        setError(
          "No holder data found"
        );

        return;

      }






      const ranked =
        rankWallets(
          holders
        );





      const updatedWallets =
        ranked.map((wallet:any)=>{


          const smart =
            calculateSmartMoneyScore({

              balance:
              wallet.balance,

              transactions:
              wallet.transactions

            });



          return {

            ...wallet,

            smartMoneyScore:
            smart.score,

            smartMoneyStatus:
            smart.status

          };


        });





      setWallets(updatedWallets);






      const topWallet =
        updatedWallets[0];





      if(topWallet){


        setAnalysis((prev:any)=>({


          ...prev,


          wallet:{


            smartMoneyScore:
            topWallet.smartMoneyScore,


            smartMoneyStatus:
            topWallet.smartMoneyStatus,


            topWallet:
            topWallet.wallet,


            wallets:
            updatedWallets


          }


        }));

      }





    }

    catch(error){


      console.log(error);


      setError(
        "Failed to scan smart money"
      );


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

        Detect whale holders and analyze potential smart money wallets.

      </p>





      {!analysis?.tokenAddress && (

        <p className="mt-5 text-yellow-400">

          Analyze token first.

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






      {error && (

        <p className="mt-5 text-red-400">

          {error}

        </p>

      )}







      <div className="mt-8 space-y-5">


        {wallets
        .slice(0,10)
        .map((wallet,index)=>(


          <div

            key={index}

            className="border border-white/10 rounded-xl p-5"

          >



            <h3 className="text-xl font-bold">

              #{index + 1} {wallet.smartMoneyStatus}

            </h3>





            <p className="text-gray-400 mt-2">

              Wallet:

              <span className="ml-2">

                {wallet.wallet}

              </span>

            </p>





            <p>

              Balance:

              <span className="ml-2 text-green-400">

                {wallet.balance}

              </span>

            </p>





            <p>

              Transactions:

              <span className="ml-2">

                {wallet.transactions}

              </span>

            </p>






            <p className="mt-3 text-2xl font-bold gradient-text">

              🧠 Smart Money Score:

              {" "}

              {wallet.smartMoneyScore}/100

            </p>





          </div>


        ))}



      </div>





    </div>

  );


}

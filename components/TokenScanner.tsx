"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import Loading from "@/components/Loading";

import { calculateRiskScore } from "@/lib/riskEngine";
import { calculateBlunderScore } from "@/lib/blunderScore";
import { calculateHolderScore } from "@/lib/holderAnalysis";
import { checkSolanaSecurity } from "@/lib/solanaSecurity";



export default function TokenScanner(){


  const {
    setAnalysis
  } = useAnalysis();




  const [token,setToken]=useState("");

  const [loading,setLoading]=useState(false);

  const [error,setError]=useState("");

  const [result,setResult]=useState<any>(null);







  async function analyzeToken(){


    if(!token){

      setError(
        "Please enter token address"
      );

      return;

    }




    try{


      setLoading(true);

      setError("");




      const response =
        await fetch(

          `https://api.dexscreener.com/latest/dex/tokens/${token}`

        );




      const data =
        await response.json();




      if(
        !data.pairs ||
        data.pairs.length===0
      ){

        setError(
          "Token data not found"
        );

        return;

      }





      const market =
        data.pairs[0];






      const risk =
        calculateRiskScore(data);






      const security =
        await checkSolanaSecurity(token);






      const holder =
        calculateHolderScore({

          holders:
          market?.holders || 0

        });







      const wallet = {


        smartMoneyScore:50,


        smartMoneyStatus:
        "Waiting wallet analysis"


      };







      const blunder =

        calculateBlunderScore({


          riskScore:
          risk.score,


          securityScore:
          security.securityScore,


          holderScore:
          holder.holderScore,


          smartMoneyScore:
          wallet.smartMoneyScore


        });







      const analysisData = {


        market,


        tokenAddress:token,


        risk,


        security,


        holders:holder,


        wallet,


        finalRating:blunder


      };






      setResult(market);


      setAnalysis(analysisData);




    }


    catch(error){


      setError(
        "Failed to analyze token"
      );


    }


    finally{


      setLoading(false);


    }


  }








  return (

    <div className="card mt-6">


      <h2 className="text-2xl font-bold">

        🔍 Token Scanner

      </h2>





      <input

        value={token}

        onChange={(e)=>
          setToken(e.target.value)
        }

        placeholder="Enter Solana token address"

        className="mt-5 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3"

      />






      <button

        onClick={analyzeToken}

        className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-bold"

      >

        Analyze Token

      </button>





      {loading &&
        <Loading />
      }






      {error &&

        <p className="mt-5 text-red-400">

          {error}

        </p>

      }






      {result &&

      <div className="mt-8 space-y-3">


        <h3 className="text-xl font-bold">

          Token Result

        </h3>



        <p>

          Token:

          <span className="ml-2 text-gray-400">

            {result.baseToken?.name}

          </span>

        </p>




        <p>

          Price:

          <span className="ml-2 text-gray-400">

            ${result.priceUsd}

          </span>

        </p>




        <p>

          Liquidity:

          <span className="ml-2 text-gray-400">

            ${result.liquidity?.usd}

          </span>

        </p>


      </div>

      }


    </div>

  );

}

"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import Loading from "@/components/Loading";


export default function TokenScanner() {


  const {

    setAnalysis

  } = useAnalysis();



  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [result, setResult] = useState<any>(null);




  async function analyzeToken() {


    if (!token) {

      setError("Please enter token address");

      return;

    }



    try {


      setLoading(true);

      setError("");



      const response = await fetch(

        `https://api.dexscreener.com/latest/dex/tokens/${token}`

      );



      const data = await response.json();



      if (!data.pairs || data.pairs.length === 0) {


        setError("Token data not found");


        setLoading(false);


        return;

      }




      const market = data.pairs[0];



      const analysisData = {


        market,

        tokenAddress: token


      };



      setResult(market);



      setAnalysis(analysisData);



    }

    catch(error){


      setError("Failed to analyze token");


    }


    finally {


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


        onChange={(e)=>setToken(e.target.value)}


        placeholder="Enter Solana token address"


        className="mt-5 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3"


      />





      <button


        onClick={analyzeToken}


        className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition"


      >

        Analyze Token

      </button>





      {loading && <Loading />}





      {error && (

        <p className="mt-5 text-red-400">

          {error}

        </p>

      )}






      {result && (


        <div className="mt-8 space-y-3">


          <h3 className="text-xl font-bold">

            Token Result

          </h3>



          <p>

            Pair:

            <span className="text-gray-400 ml-2">

              {result.baseToken?.name}

            </span>

          </p>




          <p>

            Price:

            <span className="text-gray-400 ml-2">

              ${result.priceUsd}

            </span>

          </p>




          <p>

            Liquidity:

            <span className="text-gray-400 ml-2">

              ${result.liquidity?.usd}

            </span>

          </p>



        </div>


      )}



    </div>


  );

}

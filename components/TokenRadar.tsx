"use client";

import { useState } from "react";
import { calculateTokenRanking } from "@/lib/tokenRanking";



export default function TokenRadar(){


  const [tokens,setTokens]=useState<any[]>([]);

  const [loading,setLoading]=useState(false);







  async function scanTokens(){



    try{


      setLoading(true);





      const response =

        await fetch(

          "https://api.dexscreener.com/latest/dex/search?q=SOL"

        );





      const data =

        await response.json();






      const pairs =

        data?.pairs || [];






      const solanaTokens =

        pairs.filter(

          (token:any)=>

            token.chainId === "solana"

        );








      const ranking =

        calculateTokenRanking(

          solanaTokens.slice(0,20)

        );








      setTokens(ranking);



    }


    catch(error){



      console.log(error);



    }


    finally{


      setLoading(false);


    }



  }







  return (


    <div className="card mt-10">



      <h2 className="text-3xl font-bold">

        🔥 Token Radar AI

      </h2>




      <p className="mt-3 text-gray-400">

        Discover Solana tokens using AI-powered ranking,
        liquidity analysis, and market signals.

      </p>






      <button

        onClick={scanTokens}

        className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-bold"

      >

        {loading ?

        "Scanning..."

        :

        "Scan Tokens"

        }

      </button>









      <div className="mt-8 space-y-5">



        {tokens.map((token,index)=>(



          <div

            key={index}

            className="border border-white/10 rounded-xl p-5"


          >



            <h3 className="text-xl font-bold">


              #{index+1}

              {" "}

              {token.name}


            </h3>






            <p className="text-gray-400">

              Symbol:

              {" "}

              {token.symbol}

            </p>







            <p>

              Liquidity:

              <span className="ml-2 text-green-400">

                ${token.liquidity}

              </span>


            </p>








            <p>

              Volume 24h:

              <span className="ml-2">

                ${token.volume}

              </span>


            </p>








            <p>

              Status:

              <span className="ml-2">

                {token.status}

              </span>


            </p>







            <p className="mt-3 text-2xl font-bold gradient-text">


              🔥 Blunder Score:

              {" "}

              {token.blunderScore}/100


            </p>





          </div>



        ))}



      </div>





    </div>


  );

}

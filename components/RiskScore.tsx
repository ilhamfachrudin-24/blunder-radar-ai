"use client";

import { useAnalysis } from "@/context/AnalysisContext";


export default function RiskScore() {


  const {

    analysis

  } = useAnalysis();





  const risk =

    analysis?.risk || {

      score: 0,

      level: "Waiting Analysis"

    };







  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        ⚠️ Token Risk Score

      </h2>





      <div className="mt-6 text-5xl font-bold gradient-text">


        {risk.score}/100


      </div>






      <p className="mt-4 text-gray-300">


        Risk Level:


        <span className="ml-2 font-bold text-white">


          {risk.level}


        </span>


      </p>






      <div className="mt-6">


        <p className="text-gray-400 text-sm">

          Analysis based on:

        </p>



        <ul className="mt-3 text-gray-300 space-y-2">


          <li>

            ✓ Liquidity

          </li>


          <li>

            ✓ Trading Volume

          </li>


          <li>

            ✓ DEX Activity

          </li>


        </ul>


      </div>





    </div>


  );

}

"use client";

import { useAnalysis } from "@/context/AnalysisContext";



export default function RiskScore(){



  const {
    analysis
  } = useAnalysis();





  const risk =

    analysis?.risk || {


      score:0,


      level:
      "Waiting Analysis"


    };






  function getStatusStyle(){


    if(risk.score >=80){

      return "Strong Market Signal";

    }


    if(risk.score >=60){

      return "Medium Risk";

    }


    return "High Risk";


  }







  return (


    <div className="card mt-10">



      <h2 className="text-2xl font-bold">

        ⚠️ Token Risk Score

      </h2>






      <div className="mt-6 text-5xl font-bold gradient-text">

        {risk.score}/100

      </div>







      <div className="mt-6 w-full bg-white/10 rounded-full h-3">


        <div


          className="h-3 rounded-full bg-white transition-all"


          style={{

            width:
            `${risk.score}%`

          }}


        />


      </div>







      <p className="mt-5 text-gray-300">


        Risk Level:


        <span className="ml-2 font-bold text-white">


          {risk.level}


        </span>


      </p>







      <p className="mt-2 text-gray-400">


        AI Status:


        <span className="ml-2 text-white">


          {getStatusStyle()}


        </span>


      </p>









      <div className="mt-6">



        <p className="text-gray-400 text-sm">

          Analysis Factors:

        </p>






        <ul className="mt-3 text-gray-300 space-y-2">



          <li>

            ✓ Liquidity Strength

          </li>




          <li>

            ✓ Trading Volume

          </li>




          <li>

            ✓ DEX Activity

          </li>




          <li>

            ✓ Market Structure

          </li>



        </ul>




      </div>







    </div>


  );

}

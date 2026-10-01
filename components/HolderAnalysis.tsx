"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function HolderAnalysis() {


  const {
    analysis,
    setAnalysis
  } = useAnalysis();





  const holders =
    analysis?.holders?.count || 0;




  let holderScore = 50;


  let holderStatus =
    "Unknown";





  if (holders > 10000) {


    holderScore = 90;


    holderStatus =
      "Distributed Holders";


  }


  else if (holders > 1000) {


    holderScore = 70;


    holderStatus =
      "Moderate Distribution";


  }


  else if (holders > 0) {


    holderScore = 40;


    holderStatus =
      "High Concentration Risk";


  }







  useEffect(()=>{


    if(!analysis?.market) return;



    setAnalysis((prev:any)=>({


      ...prev,


      holders:{


        count: holders,


        holderScore,


        holderStatus


      }


    }));



  },[holders]);








  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        👥 Holder Analysis

      </h2>





      <div className="mt-5 space-y-3 text-gray-300">





        <p>

          Holder Count:


          <span className="ml-2 text-white">

            {holders || "Checking..."}

          </span>


        </p>







        <p>

          Distribution:


          <span className="ml-2 text-green-400">

            {holderStatus}

          </span>


        </p>







        <p>

          Holder Score:


          <span className="ml-2 gradient-text font-bold">

            {holderScore}/100

          </span>


        </p>






      </div>




    </div>


  );

}

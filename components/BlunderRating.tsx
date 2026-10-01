"use client";

import { useEffect, useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { calculateBlunderScore } from "@/lib/blunderScore";


export default function BlunderRating() {


  const {
    analysis,
    setAnalysis
  } = useAnalysis();


  const [rating, setRating] =
  useState<any>(null);



  useEffect(() => {


    if (!analysis) return;



    const result =
      calculateBlunderScore({

        riskScore:
          analysis?.risk?.score || 50,


        securityScore:
          analysis?.security?.securityScore || 50,


        holderScore:
          analysis?.holders?.holderScore || 50,


        smartMoneyScore:
          analysis?.wallet?.smartMoneyScore || 50

      });



    setRating(result);



    setAnalysis({

      ...analysis,

      finalRating: result

    });



  }, [analysis]);




  return (

    <div className="card mt-10">


      <h2 className="text-2xl font-bold">
        🔥 Blunder AI Rating
      </h2>



      <div className="text-5xl font-bold gradient-text mt-5">

        {rating?.score || 0}/100

      </div>



      <p className="mt-3 text-gray-300">

        Status:

        <span className="text-green-400 ml-2">

          {rating?.status || "Waiting Analysis"}

        </span>

      </p>



    </div>

  );

}

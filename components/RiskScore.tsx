"use client";

import { useAnalysis } from "@/context/AnalysisContext";


export default function RiskScore() {


  const {

    analysis

  } = useAnalysis();



  const risk = analysis?.risk;



  return (

    <div className="card mt-6">


      <h2 className="text-2xl font-bold">

        ⚠️ Risk Score

      </h2>




      {!risk && (

        <p className="mt-4 text-gray-400">

          Waiting for token analysis...

        </p>

      )}






      {risk && (

        <div className="mt-5">


          <div className="text-5xl font-bold gradient-text">

            {risk.score}/100

          </div>



          <p className="mt-3 text-gray-300">

            Risk Level:

            <span className="ml-2 text-white">

              {risk.level || "Analyzed"}

            </span>

          </p>



        </div>

      )}



    </div>

  );

}

"use client";

import { useAnalysis } from "@/context/AnalysisContext";


export default function AIReport() {


  const {
    analysis
  } = useAnalysis();





  const risk =
    analysis?.risk?.score || 0;



  const security =
    analysis?.security?.securityScore || 0;



  const smartMoney =
    analysis?.wallet?.smartMoneyScore || 0;



  const rating =
    analysis?.finalRating?.score || 0;





  let summary =
    "Waiting for token analysis...";



  if(rating >= 80){


    summary =
    "Token shows strong research signals. Liquidity, security, and activity appear positive. Further research is recommended.";


  }

  else if(rating >=60){


    summary =
    "Token shows moderate signals. Some indicators are positive but additional research is required.";


  }

  else if(rating >0){


    summary =
    "Token shows higher risk signals. Be careful and verify fundamentals before making decisions.";


  }







  return (


    <div className="card mt-10">


      <h2 className="text-3xl font-bold">

        🤖 AI Research Report

      </h2>






      <p className="mt-5 text-gray-300">

        {summary}

      </p>







      <div className="grid md:grid-cols-4 gap-5 mt-8">





        <div className="card">

          Risk

          <br/>

          <b>

            {risk}/100

          </b>

        </div>







        <div className="card">

          Security

          <br/>

          <b>

            {security}/100

          </b>

        </div>








        <div className="card">

          Smart Money

          <br/>

          <b>

            {smartMoney}/100

          </b>

        </div>








        <div className="card">

          Blunder Rating

          <br/>

          <b>

            {rating}/100

          </b>

        </div>





      </div>






    </div>


  );

}

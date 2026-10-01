"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function BlunderRating() {


  const {

    analysis,

    setAnalysis

  } = useAnalysis();




  const risk =
    analysis?.risk?.score || 50;



  const security =
    analysis?.security?.securityScore || 50;



  const holder =
    analysis?.holders?.holderScore || 50;



  const smartMoney =
    analysis?.wallet?.smartMoneyScore || 50;





  const score = Math.round(

    (

      risk +

      security +

      holder +

      smartMoney

    ) / 4

  );






  let status = "Analyzing";



  if (score >= 80) {


    status = "Strong Research Signal";


  }

  else if (score >= 60) {


    status = "Moderate Signal";


  }

  else {


    status = "High Risk Signal";


  }







  useEffect(() => {


    setAnalysis({

      ...analysis,

      finalRating: {

        score,

        status

      }

    });



  }, [score]);







  return (


    <div className="card mt-10 glow">


      <h2 className="text-3xl font-bold">

        🔥 Blunder AI Rating

      </h2>





      <div className="mt-6 text-6xl font-bold gradient-text">


        {score}/100


      </div>





      <p className="mt-4 text-gray-300">


        Status:


        <span className="ml-2 text-white font-bold">

          {status}

        </span>


      </p>





      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">



        <div className="card">

          Risk

          <br/>

          {risk}/100

        </div>





        <div className="card">

          Security

          <br/>

          {security}/100

        </div>





        <div className="card">

          Holder

          <br/>

          {holder}/100

        </div>





        <div className="card">

          Smart Money

          <br/>

          {smartMoney}/100

        </div>



      </div>




    </div>


  );

}

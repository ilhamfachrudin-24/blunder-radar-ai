"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function AIAssistant() {


  const {

    analysis,

    setAnalysis

  } = useAnalysis();




  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");





  async function generateInsight() {


    setLoading(true);



    setTimeout(() => {



      const risk =
        analysis?.risk?.score || 50;



      const security =
        analysis?.security?.securityScore || 50;



      const smartMoney =
        analysis?.wallet?.smartMoneyScore || 50;






      let result = "";



      if (

        risk > 70 &&

        security > 70 &&

        smartMoney > 60

      ) {


        result =
        "Strong research signal. Token shows positive indicators based on current analysis.";


      }

      else {


        result =
        "Mixed signal. Always perform deeper research before making decisions.";


      }





      setMessage(result);



      setAnalysis({

        ...analysis,

        aiInsight: result

      });



      setLoading(false);



    },1500);



  }





  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🤖 AI Research Assistant

      </h2>





      <p className="mt-3 text-gray-400">

        AI analyzes market signals,
        security, and smart money activity.

      </p>





      <button


        onClick={generateInsight}


        className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition"


      >

        {loading ? "Analyzing..." : "Generate AI Insight"}

      </button>






      {message && (


        <div className="mt-6 rounded-xl border border-white/10 p-5 text-gray-300">


          {message}


        </div>


      )}





    </div>


  );

}

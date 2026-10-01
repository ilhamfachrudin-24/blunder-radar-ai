"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";


export default function AIAssistant() {


  const {
    analysis
  } = useAnalysis();



  const [report,setReport] =
    useState("");



  const [loading,setLoading] =
    useState(false);







  function generateReport(){



    setLoading(true);




    setTimeout(()=>{





      const risk =

        analysis?.risk?.score || 50;




      const security =

        analysis?.security?.securityScore || 50;




      const holder =

        analysis?.holders?.holderScore || 50;




      const smartMoney =

        analysis?.wallet?.smartMoneyScore || 50;







      const finalScore = Math.round(

        (

          risk +

          security +

          holder +

          smartMoney

        ) / 4

      );







      let conclusion =

        "High risk signal. Always perform additional research before making decisions.";







      if(finalScore >= 80){


        conclusion =

        "Strong research signal detected. Token metrics show positive indicators, but market risk remains.";

      }



      else if(finalScore >=60){


        conclusion =

        "Moderate research signal. Monitor liquidity, holders, and smart money activity.";

      }









      const text = `


🔥 BLUNDER RADAR AI REPORT


━━━━━━━━━━━━━━━━


📊 Risk Score

${risk}/100



🛡 Security Score

${security}/100



👥 Holder Score

${holder}/100



🐋 Smart Money Score

${smartMoney}/100




🔥 Final Blunder Rating

${finalScore}/100




🤖 AI Conclusion:


${conclusion}




⚠️ Disclaimer:

This analysis is for research purposes only, not financial advice.


`;






      setReport(text);



      setLoading(false);




    },1000);



  }









  return (


    <div className="card mt-10">



      <h2 className="text-2xl font-bold">

        🤖 AI Research Assistant

      </h2>







      <p className="mt-4 text-gray-400">

        AI analyzes token fundamentals,
        security, holders, liquidity,
        and smart money signals.

      </p>








      <button


        onClick={generateReport}


        className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition"


      >


        {loading

        ? "Generating..."

        : "Generate Report"}



      </button>








      {report && (



        <pre

        className="mt-6 rounded-xl bg-black p-5 text-green-400 whitespace-pre-wrap"

        >


          {report}


        </pre>



      )}




    </div>


  );

}

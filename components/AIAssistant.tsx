"use client";

import { useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";



export default function AIAssistant(){



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







      const finalScore =

        analysis?.finalRating?.score || 50;





      const status =

        analysis?.finalRating?.status ||

        "Waiting Analysis";









      let conclusion =

        "High risk signal detected. Perform deeper research before entering any position.";







      if(finalScore >= 80){



        conclusion =

        "Strong research signal detected. Token shows healthy indicators across multiple metrics, but market volatility remains.";

      }



      else if(finalScore >=60){



        conclusion =

        "Moderate research signal. Monitor liquidity, holders, security, and smart money movements.";

      }









      const text = `


🔥 BLUNDER RADAR AI REPORT


━━━━━━━━━━━━━━━━━━


📌 Token Intelligence Analysis



⚠️ Risk Score

${risk}/100




🛡 Security Score

${security}/100




👥 Holder Score

${holder}/100




🐋 Smart Money Score

${smartMoney}/100





━━━━━━━━━━━━━━━━━━



🔥 Final Blunder Rating

${finalScore}/100



📊 AI Status

${status}




━━━━━━━━━━━━━━━━━━



🤖 AI Conclusion:



${conclusion}




⚠️ Disclaimer:

Blunder Radar AI provides blockchain research analytics only.
This is not financial advice.



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

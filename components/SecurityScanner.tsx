"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { checkSolanaSecurity } from "@/lib/solanaSecurity";


export default function SecurityScanner() {


  const {
    analysis,
    setAnalysis
  } = useAnalysis();



  useEffect(() => {


    async function runSecurityCheck() {


      const address =
        analysis?.market?.baseToken?.address;



      if (!address) return;



      const security =
        await checkSolanaSecurity(address);



      setAnalysis({

        ...analysis,

        security

      });


    }



    runSecurityCheck();



  }, [analysis?.market]);





  const security =
    analysis?.security;




  return (

    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🛡️ Solana Security Scanner

      </h2>




      {!security && (

        <p className="mt-5 text-gray-400">

          Checking token security...

        </p>

      )}






      {security && (

        <div className="mt-5 space-y-4 text-gray-300">


          <p>

            Mint Authority:

            <span className="ml-2 text-yellow-400">

              {security.mintAuthority || "Unknown"}

            </span>

          </p>




          <p>

            Freeze Authority:

            <span className="ml-2 text-yellow-400">

              {security.freezeAuthority || "Unknown"}

            </span>

          </p>





          <p>

            Security Score:

            <span className="ml-2 gradient-text font-bold">

              {security.securityScore || 50}/100

            </span>

          </p>



        </div>

      )}



    </div>

  );

}

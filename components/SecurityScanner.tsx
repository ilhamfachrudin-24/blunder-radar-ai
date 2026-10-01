"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { checkSolanaSecurity } from "@/lib/solanaSecurity";

type SecurityProps = {
  data?: any;
};


export default function SecurityScanner({
  data
}: Props) {

  const { analysis, setAnalysis } = useAnalysis();

  return (

    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        Solana Security Scanner
      </h2>


      <div className="mt-5 space-y-3 text-gray-300">

        <p>
          Mint Authority:
          <span className="text-yellow-400">
            {data?.mintAuthority || "Checking..."}
          </span>
        </p>


        <p>
          Freeze Authority:
          <span className="text-yellow-400">
            {data?.freezeAuthority || "Checking..."}
          </span>
        </p>


        <p>
          Security Score:
          <span className="gradient-text font-bold">
            {data?.securityScore || 50}/100
          </span>
        </p>


      </div>

    </div>


    useEffect(() => {

  async function runSecurityCheck() {

    const address =
      analysis?.market?.pairs?.[0]?.baseToken?.address;


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
  );

}

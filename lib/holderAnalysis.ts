"use client";

import { useEffect } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { analyzeHolders } from "@/lib/holderAnalysis";

export default function HolderAnalysis({
  data
}: Props) {

  const {
    analysis,
    setAnalysis
  } = useAnalysis();

  const holders =
    data?.holders || 0;


  let score = 50;

  let status =
    "Unknown";


  if (holders > 10000) {

    score += 30;

    status =
      "Distributed Holders";

  }

  else if (holders > 1000) {

    score += 15;

    status =
      "Moderate Distribution";

  }

  else {

    status =
      "High Concentration Risk";

  }



  if (score > 100) {

    score = 100;

  }

useEffect(() => {

  if (!analysis?.market) return;


  const holders =
    analyzeHolders({
      holders:
      analysis?.market?.holders || 0
    });


  setAnalysis({

    ...analysis,

    holders

  });


}, [analysis?.market]);

  return {

    holderScore: score,

    holderStatus: status

  };


}

export function analyzeHolders(data: any) {

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



  return {

    holderScore: score,

    holderStatus: status

  };


}

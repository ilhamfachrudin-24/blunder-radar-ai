export function calculateHolderScore(data: any) {


  let score = 50;


  const holders =

    Number(data?.holders || 0);




  if (holders > 10000) {


    score += 30;


  }

  else if (holders > 1000) {


    score += 15;


  }





  if (score > 100) {


    score = 100;


  }





  let holderStatus = "High Concentration Risk";




  if (score >= 80) {


    holderStatus = "Distributed Holders";


  }

  else if (score >= 60) {


    holderStatus = "Moderate Distribution";


  }





  return {


    holderScore: score,


    holderStatus


  };


}

export function analyzeSmartMoney(data:any) {


  let score = 50;


  const wallets =
    data?.wallets || [];



  if (wallets.length > 10) {

    score += 20;

  }



  if (data?.accumulation) {

    score += 20;

  }



  if (score > 100) {

    score = 100;

  }




  let status =
    "No Smart Money Signal";



  if (score >= 80) {

    status =
      "Strong Smart Money Activity";

  }

  else if (score >= 60) {

    status =
      "Possible Accumulation";

  }




  return {


    smartMoneyScore: score,


    status,


    whaleCount: wallets.length,


    accumulation:
      data?.accumulation || false


  };


}

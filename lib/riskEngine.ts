export function calculateRiskScore(data: any) {

  let score = 50;


  const pair = data?.pairs?.[0];


  if (!pair) {
    return {
      score: 0,
      level: "Unknown",
    };
  }


  const liquidity =
    Number(pair.liquidity?.usd || 0);


  const volume =
    Number(pair.volume?.h24 || 0);



  if (liquidity > 100000) {
    score += 20;
  }


  if (volume > 50000) {
    score += 15;
  }


  if (pair.dexId) {
    score += 5;
  }


  if (score > 100) {
    score = 100;
  }



  let level = "High Risk";


  if (score >= 80) {
    level = "Lower Risk";
  } 
  else if (score >= 60) {
    level = "Medium Risk";
  }



  return {
    score,
    level,
  };

}

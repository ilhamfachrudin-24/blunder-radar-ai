export function calculateBlunderScore({

  riskScore = 50,

  securityScore = 50,

  holderScore = 50,

  smartMoneyScore = 50

}: any) {


  const score = Math.round(

    (

      riskScore * 0.25 +

      securityScore * 0.25 +

      holderScore * 0.25 +

      smartMoneyScore * 0.25

    )

  );



  let status =
    "High Risk";



  if (score >= 80) {

    status =
      "Strong Research Signal";

  }

  else if (score >= 60) {

    status =
      "Moderate Signal";

  }



  return {

    score,

    status

  };


}

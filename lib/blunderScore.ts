export function calculateBlunderScore({

  riskScore = 50,

  securityScore = 50,

  holderScore = 50,

  smartMoneyScore = 50


}: any) {



  const score = Math.round(

    (

      riskScore * 0.25 +

      securityScore * 0.30 +

      holderScore * 0.20 +

      smartMoneyScore * 0.25


    )

  );





  let status =
    "High Risk";



  let category =
    "Avoid / Need More Research";







  if(score >= 85){


    status =
      "Strong Research Signal";


    category =
      "High Potential";



  }


  else if(score >=70){


    status =
      "Positive Signal";


    category =
      "Watchlist";



  }


  else if(score >=50){


    status =
      "Moderate Signal";


    category =
      "Monitor";



  }








  return {


    score,


    status,


    category,



    breakdown:{


      riskScore,


      securityScore,


      holderScore,


      smartMoneyScore


    }


  };



}

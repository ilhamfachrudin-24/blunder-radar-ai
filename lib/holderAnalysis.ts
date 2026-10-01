export function calculateHolderScore(
  data:any
){


  let score = 50;



  const holders =

    Number(
      data?.holders || 0
    );



  const topHolderPercent =

    Number(
      data?.topHolderPercent || 0
    );







  // Holder distribution


  if(holders >=10000){


    score +=30;


  }


  else if(holders >=1000){


    score +=15;


  }


  else if(holders <100){


    score -=20;


  }







  // Whale concentration


  if(topHolderPercent >30){


    score -=20;


  }


  else if(topHolderPercent <10){


    score +=10;


  }







  if(score >100){

    score=100;

  }



  if(score <0){

    score=0;

  }








  let holderStatus =

    "High Concentration Risk";






  if(score >=80){


    holderStatus =

      "Distributed Holders";


  }


  else if(score >=60){


    holderStatus =

      "Moderate Distribution";


  }








  return {


    holderScore:score,


    holderStatus,



    metrics:{


      holders,


      topHolderPercent


    }


  };


}

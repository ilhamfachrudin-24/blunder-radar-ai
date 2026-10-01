export function calculateHolderScore(
  data:any
){


  let score = 50;



  const holders =

    Number(

      data?.holders ||

      data?.wallets?.length ||

      0

    );






  let topHolderPercent =

    Number(

      data?.topHolderPercent ||

      0

    );








  // Calculate whale concentration automatically


  if(

    data?.wallets &&

    data.wallets.length > 0

  ){



    const topHolder =

      data.wallets[0];



    topHolderPercent =

      Number(

        topHolder.percentage || 0

      );



  }









  // Holder amount analysis


  if(holders >= 10000){


    score +=30;


  }


  else if(holders >=1000){


    score +=15;


  }


  else if(holders <100){


    score -=20;


  }









  // Whale concentration risk


  if(topHolderPercent >30){


    score -=25;


  }


  else if(topHolderPercent >20){


    score -=15;


  }


  else if(topHolderPercent <10){


    score +=10;


  }









  if(score >100){


    score = 100;


  }






  if(score <0){


    score = 0;


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



      topHolderPercent,



      whaleRisk:

        topHolderPercent >30

        ? 

        "HIGH"

        :

        "LOW"



    }



  };



}

export function calculateRiskScore(data:any){


  let score = 50;



  const pair =
    data?.pairs?.[0];



  if(!pair){


    return {

      score:0,

      level:"Unknown"

    };


  }






  const liquidity =

    Number(
      pair.liquidity?.usd || 0
    );





  const volume =

    Number(
      pair.volume?.h24 || 0
    );





  const marketCap =

    Number(
      pair.fdv || pair.marketCap || 0
    );








  const txns =

    pair.txns?.h24 || {};






  const buys =

    Number(txns.buys || 0);





  const sells =

    Number(txns.sells || 0);








  // Liquidity analysis


  if(liquidity >= 100000){


    score +=20;


  }


  else if(liquidity >=10000){


    score +=10;


  }


  else if(liquidity <1000){


    score -=20;


  }








  // Volume analysis


  if(volume >=50000){


    score +=15;


  }


  else if(volume >=10000){


    score +=5;


  }








  // Trading activity


  if(buys > sells){


    score +=10;


  }


  else if(sells > buys){


    score -=10;


  }








  // Market presence


  if(marketCap > 1000000){


    score +=5;


  }








  // DEX check


  if(pair.dexId){


    score +=5;


  }








  // Limit


  if(score >100){


    score=100;


  }




  if(score <0){


    score=0;


  }








  let level =

    "High Risk";







  if(score >=80){


    level =

      "Lower Risk";


  }


  else if(score >=60){


    level =

      "Medium Risk";


  }








  return {


    score,


    level,


    metrics:{


      liquidity,


      volume,


      marketCap,


      buys,


      sells


    }


  };


}

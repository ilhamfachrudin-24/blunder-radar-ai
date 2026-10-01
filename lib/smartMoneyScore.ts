export function calculateSmartMoneyScore(
  walletData:any
){


  let score = 50;



  const balance =

    Number(
      walletData?.balance || 0
    );



  const transactions =

    Number(
      walletData?.transactions || 0
    );



  const profitableTrades =

    Number(
      walletData?.profitableTrades || 0
    );



  const tokenAge =

    Number(
      walletData?.walletAge || 0
    );






  // Wallet balance signal

  if(balance >=100){

    score +=15;

  }

  else if(balance >=20){

    score +=8;

  }







  // Activity signal

  if(transactions >=50){

    score +=20;

  }

  else if(transactions >=10){

    score +=10;

  }








  // Successful trading history

  if(profitableTrades >=10){

    score +=15;

  }








  // Older wallet is usually more reliable

  if(tokenAge >=180){

    score +=10;

  }









  if(score >100){

    score =100;

  }



  if(score <0){

    score =0;

  }









  let status =

    "Normal Wallet";







  if(score >=85){


    status =

    "🔥 Strong Smart Money";


  }

  else if(score >=70){


    status =

    "🐋 Active Whale Trader";


  }

  else if(score >=60){


    status =

    "👀 Active Wallet";


  }









  return {


    smartMoneyScore:score,


    score,


    status,


    metrics:{


      balance,


      transactions,


      profitableTrades,


      walletAgeDays:

      tokenAge



    }



  };


}

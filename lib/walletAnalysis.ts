export function calculateSmartMoneyScore({

  balance = 0,

  transactions = 0

}: any) {


  let score = 50;


  let status =
    "Unknown";




  // Wallet balance analysis

  if(balance >= 100){

    score += 20;

    status =
      "Large Wallet";

  }

  else if(balance >= 10){

    score += 10;

    status =
      "Active Wallet";

  }






  // Transaction activity

  if(transactions >= 20){

    score += 20;

  }

  else if(transactions >= 5){

    score += 10;

  }

  else {

    score -= 10;

  }







  if(score > 100){

    score = 100;

  }



  if(score < 0){

    score = 0;

  }







  return {


    score,


    smartMoneyScore: score,


    status


  };


}

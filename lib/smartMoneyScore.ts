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






  if(balance >=100){

    score +=25;

  }

  else if(balance >=20){

    score +=10;

  }





  if(transactions >=20){

    score +=25;

  }

  else if(transactions >=5){

    score +=10;

  }





  if(score >100){

    score =100;

  }



  if(score <0){

    score=0;

  }







  let status =
    "Normal Wallet";



  if(score >=80){


    status =
    "Potential Smart Money";


  }

  else if(score >=60){


    status =
    "Active Wallet";


  }






  return {


    smartMoneyScore:score,


    score,


    status



  };


}

export function rankWallets(wallets:any[]){

  if(!wallets || wallets.length===0){

    return [];

  }


  return wallets.map((wallet)=>{


    let score = 50;


    const balance =
      Number(wallet.amount || wallet.balance || 0);


    if(balance > 100){

      score +=25;

    }
    else if(balance > 20){

      score +=10;

    }



    if(score >100){

      score =100;

    }



    let label =
      "Normal Wallet";


    if(score>=80){

      label="🔥 Smart Money";

    }
    else if(score>=60){

      label="👀 Active Trader";

    }



    return {


      wallet:
        wallet.address,


      balance,


      score,


      label,


      smartMoneyScore:
        score


    };


  })
  .sort(
    (a,b)=>
    b.score-a.score
  );

}

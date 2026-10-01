export function rankWallets(wallets:any[]) {


  if (!wallets || wallets.length === 0) {

    return [];

  }



  const ranked = wallets.map((wallet)=>{


    let score = 50;



    const balance =
      Number(wallet.balance || wallet.amount || 0);



    const transactions =
      Number(wallet.transactions || 0);




    // Large wallet balance
    if(balance >= 100){

      score += 25;

    }

    else if(balance >= 20){

      score += 10;

    }





    // Wallet activity

    if(transactions >= 20){

      score += 25;

    }

    else if(transactions >= 5){

      score += 10;

    }




    if(score > 100){

      score = 100;

    }




    let label =
      "Normal Wallet";



    if(score >= 80){

      label =
      "🔥 Smart Money";

    }

    else if(score >= 60){

      label =
      "👀 Active Trader";

    }





    return {


      wallet:

        wallet.address || "Unknown",



      balance,



      transactions,



      score,



      smartMoneyScore:
        score,



      label


    };



  });






  return ranked.sort(

    (a,b)=>

      b.smartMoneyScore -
      a.smartMoneyScore

  );


}

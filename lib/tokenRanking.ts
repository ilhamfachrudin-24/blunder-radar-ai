export function calculateTokenRanking(tokens:any[]) {


  if (!tokens || tokens.length === 0) {

    return [];

  }



  const ranked = tokens.map((token)=>{


    const liquidity =
      Number(token.liquidity?.usd || 0);



    const volume =
      Number(token.volume?.h24 || 0);



    let score = 50;



    if (liquidity > 100000) {

      score += 20;

    }


    if (volume > 50000) {

      score += 15;

    }


    if (token.txns?.h24?.buys >
        token.txns?.h24?.sells) {

      score += 10;

    }



    if(score > 100){

      score = 100;

    }



    return {

      name:
      token.baseToken?.name || "Unknown",


      symbol:
      token.baseToken?.symbol || "",


      address:
      token.baseToken?.address,


      price:
      token.priceUsd,


      liquidity,


      volume,


      blunderScore: score

    };


  });




  return ranked.sort(

    (a,b)=>
    b.blunderScore-a.blunderScore

  );


}

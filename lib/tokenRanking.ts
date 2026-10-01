import { calculateRiskScore } from "./riskEngine";
import { calculateBlunderScore } from "./blunderScore";



export function calculateTokenRanking(
  tokens:any[]
){



  if(
    !tokens ||
    tokens.length === 0
  ){

    return [];

  }







  const ranked = tokens.map((token)=>{





    const risk =

      calculateRiskScore({

        pairs:[token]

      });









    const liquidity =

      Number(
        token.liquidity?.usd || 0
      );




    const volume =

      Number(
        token.volume?.h24 || 0
      );







    let holderScore = 50;



    if(liquidity > 50000){

      holderScore += 15;

    }


    if(volume > 100000){

      holderScore += 15;

    }









    let smartMoneyScore = 50;



    if(

      token.txns?.h24?.buys >

      token.txns?.h24?.sells

    ){

      smartMoneyScore += 20;

    }






    if(volume > liquidity){

      smartMoneyScore += 15;

    }









    let securityScore = 50;





    if(liquidity > 10000){

      securityScore += 20;

    }





    if(token.dexId){

      securityScore += 10;

    }









    if(holderScore > 100){

      holderScore = 100;

    }



    if(smartMoneyScore > 100){

      smartMoneyScore = 100;

    }



    if(securityScore > 100){

      securityScore = 100;

    }









    const blunder =

      calculateBlunderScore({



        riskScore:

        risk.score,



        securityScore,



        holderScore,



        smartMoneyScore



      });









    return {




      name:

        token.baseToken?.name ||

        "Unknown",






      symbol:

        token.baseToken?.symbol ||

        "",






      address:

        token.baseToken?.address,








      price:

        token.priceUsd,








      liquidity,








      volume,








      buys:

        token.txns?.h24?.buy || 0,







      sells:

        token.txns?.h24?.sell || 0,








      riskScore:

        risk.score,








      holderScore,








      smartMoneyScore,








      securityScore,








      blunderScore:

        blunder.score,








      status:

        blunder.status



    };



  });









  return ranked.sort(

    (a,b)=>

      b.blunderScore -

      a.blunderScore

  );



}

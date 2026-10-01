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






  const ranked =

    tokens.map((token)=>{



      const risk =

        calculateRiskScore({

          pairs:[
            token

          ]

        });








      const smartMoneyScore = 50;



      const holderScore = 50;



      const securityScore = 50;








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






        liquidity:

          Number(
            token.liquidity?.usd || 0
          ),





        volume:

          Number(
            token.volume?.h24 || 0
          ),






        riskScore:

          risk.score,






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

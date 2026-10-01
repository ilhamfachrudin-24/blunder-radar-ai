import { calculateRiskScore } from "./riskEngine";
import { calculateBlunderScore } from "./blunderScore";
import { checkSolanaSecurity } from "./solanaSecurity";
import { calculateHolderScore } from "./holderAnalysis";



export async function analyzeToken(
  address:string
){


  try {


    const response =

      await fetch(

        `https://api.dexscreener.com/latest/dex/tokens/${address}`

      );



    const data =

      await response.json();




    if(
      !data.pairs ||
      data.pairs.length === 0
    ){


      return {

        address,

        status:
        "Token data not found"


      };


    }





    const pair =
      data.pairs[0];






    const risk =

      calculateRiskScore(data);







    const security =

      await checkSolanaSecurity(address);







    const holders =

      calculateHolderScore({

        holders:
        pair?.holders || 0

      });







    const smartMoneyScore = 50;







    const finalRating =

      calculateBlunderScore({

        riskScore:
        risk.score,


        securityScore:
        security.securityScore,


        holderScore:
        holders.holderScore,


        smartMoneyScore

      });








    return {


      address,



      tokenName:

        pair.baseToken?.name ||
        "Unknown",



      symbol:

        pair.baseToken?.symbol ||
        "TOKEN",





      price:

        pair.priceUsd || "0",





      liquidity:

        pair.liquidity?.usd || 0,





      volume24h:

        pair.volume?.h24 || 0,





      risk,



      security,



      holders,



      smartMoneyScore,



      finalRating,



      status:
      finalRating.status


    };



  }

  catch(error){



    return {


      address,


      status:
      "Analysis Failed",


      error:
      "Unable to analyze token"


    };


  }


}

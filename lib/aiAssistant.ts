export function generateAIInsight(
  data:any
){



  if(!data){


    return {


      message:
      "No analysis data available."

    };


  }







  const risk =

    data?.risk?.score || 50;



  const security =

    data?.security?.securityScore || 50;



  const holder =

    data?.holders?.holderScore || 50;



  const smartMoney =

    data?.wallet?.smartMoneyScore ||

    data?.smartMoneyScore ||

    50;





  const finalScore =

    data?.finalRating?.score ||

    50;








  let message = "";







  if(finalScore >=80){



    message =

`🔥 Strong Signal Detected

Blunder AI Rating:
${finalScore}/100

Risk:
${risk}/100

Security:
${security}/100

Holder Distribution:
${holder}/100

Smart Money:
${smartMoney}/100


AI Insight:

Token shows strong indicators based on liquidity, security, holder structure, and smart money activity. Always verify market conditions before entering.`;



  }



  else if(finalScore >=60){



    message =

`⚠️ Moderate Signal

Blunder AI Rating:
${finalScore}/100


Risk:
${risk}/100

Security:
${security}/100

Holder:
${holder}/100

Smart Money:
${smartMoney}/100


AI Insight:

Token has some positive indicators but requires monitoring before making a decision.`;



  }



  else {



    message =

`🚨 High Risk Detection


Blunder AI Rating:
${finalScore}/100


Risk:
${risk}/100

Security:
${security}/100

Holder:
${holder}/100

Smart Money:
${smartMoney}/100


AI Insight:

Current data shows elevated risk. Low confidence signal detected. Perform deeper research.`;



  }








  return {


    message,


    score:finalScore,


    factors:{


      risk,


      security,


      holder,


      smartMoney


    }



  };



}

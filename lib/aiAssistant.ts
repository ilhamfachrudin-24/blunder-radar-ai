export function generateAIInsight(data: any) {

  const pair = data?.pairs?.[0];


  if (!pair) {
    return {
      message:
        "No token data available. Please analyze a valid token."
    };
  }


  const liquidity =
    Number(pair.liquidity?.usd || 0);


  const volume =
    Number(pair.volume?.h24 || 0);



  let message = "";


  if (liquidity > 100000 && volume > 50000) {

    message =
      "Token shows healthy liquidity and active trading volume. Market activity looks positive, but always perform additional research.";

  } 
  else if (liquidity > 10000) {

    message =
      "Token has moderate liquidity. Consider checking holder distribution and security risks before trading.";

  } 
  else {

    message =
      "Low liquidity detected. Higher volatility and risk may occur.";

  }


  return {
    message
  };

}

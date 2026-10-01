export function calculateSmartMoneyScore(
  walletData: any
) {

  let score = 50;


  const balance =
    Number(walletData.balance || 0);


  const transactions =
    Number(walletData.transactions || 0);



  // Wallet dengan saldo besar
  if (balance > 100) {

    score += 20;

  } 
  else if (balance > 20) {

    score += 10;

  }



  // Aktivitas transaksi
  if (transactions >= 10) {

    score += 20;

  } 
  else if (transactions >= 5) {

    score += 10;

  }



  if (score > 100) {

    score = 100;

  }



  let status =
    "Normal Wallet";


  if (score >= 80) {

    status =
      "High Activity Smart Money";

  }
  else if (score >= 60) {

    status =
      "Active Trader Wallet";

  }



  return {

    score,

    status

  };

}

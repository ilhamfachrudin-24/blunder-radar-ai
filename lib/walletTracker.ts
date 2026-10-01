const RPC_URL =
  "https://api.mainnet-beta.solana.com";



export async function getWalletData(
  wallet: string
) {


  try {


    const balanceResponse =
      await fetch(

        RPC_URL,

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },


          body: JSON.stringify({

            jsonrpc: "2.0",

            id: 1,

            method: "getBalance",

            params: [

              wallet

            ]

          })

        }

      );





    const balance =
      await balanceResponse.json();






    const transactionResponse =
      await fetch(

        RPC_URL,

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },


          body: JSON.stringify({

            jsonrpc: "2.0",

            id: 1,

            method: "getSignaturesForAddress",

            params: [

              wallet,

              {

                limit: 10

              }

            ]

          })

        }

      );







    const transactions =
      await transactionResponse.json();






    const walletBalance =

      balance?.result?.value / 1000000000 || 0;






    const transactionCount =

      transactions?.result?.length || 0;







    let smartMoneyScore = 50;


    if (walletBalance > 100) {

      smartMoneyScore += 20;

    }


    if (transactionCount > 5) {

      smartMoneyScore += 20;

    }



    if (smartMoneyScore > 100) {

      smartMoneyScore = 100;

    }





    let smartMoneyStatus =
      "Normal Wallet";



    if (smartMoneyScore >= 80) {

      smartMoneyStatus =
        "Potential Smart Money";

    }

    else if (smartMoneyScore >= 60) {

      smartMoneyStatus =
        "Active Wallet";

    }







    return {


      wallet,


      balance: walletBalance,


      transactions: transactionCount,


      smartMoneyScore,


      smartMoneyStatus


    };





  } catch(error) {



    return {


      wallet,


      balance: 0,


      transactions: 0,


      smartMoneyScore: 0,


      smartMoneyStatus:
        "Analysis Failed",


      error:
        "Failed to fetch wallet data"


    };


  }


}

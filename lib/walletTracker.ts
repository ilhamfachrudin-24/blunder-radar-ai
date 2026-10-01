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



    return {

      wallet,

      balance:
        balance?.result?.value / 1000000000 || 0,


      transactions:
        transactions?.result?.length || 0,


      const smartMoney =
  calculateSmartMoneyScore({

    balance:
      balance?.result?.value / 1000000000 || 0,

    transactions:
      transactions?.result?.length || 0

});

    };


  } catch(error) {


    return {smartMoneyScore:
smartMoney.score,

smartMoneyStatus:
smartMoney.status

      wallet,

      error:
        "Failed to fetch wallet data"

    };


  }

}

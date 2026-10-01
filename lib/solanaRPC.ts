const RPC_URL =
  `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`;



export async function solanaRequest(
  method:string,
  params:any[]
){


  try {


    const response =

      await fetch(

        RPC_URL,

        {

          method:"POST",

          headers:{

            "Content-Type":
            "application/json"

          },


          body:JSON.stringify({

            jsonrpc:"2.0",

            id:1,

            method,

            params


          })

        }

      );





    return await response.json();




  }

  catch(error){


    return {

      error:
      "Failed Solana RPC request"


    };


  }


}







export async function getTokenInfo(
  address:string
){


  return solanaRequest(

    "getAccountInfo",

    [

      address,

      {

        encoding:
        "jsonParsed"

      }

    ]

  );


}







export async function getWalletBalance(
  wallet:string
){


  return solanaRequest(

    "getBalance",

    [

      wallet

    ]

  );


}








export async function getWalletTransactions(
  wallet:string
){


  return solanaRequest(

    "getSignaturesForAddress",

    [

      wallet,

      {

        limit:20

      }

    ]

  );


}








export async function getTokenSupply(
  address:string
){


  return solanaRequest(

    "getTokenSupply",

    [

      address

    ]

  );


}

const RPC_URL =
  "https://api.mainnet-beta.solana.com";



export async function getTokenHolders(
  tokenAddress:string
) {


  try {


    const response = await fetch(

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

          method:
          "getProgramAccounts",

          params:[

            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",

            {

              encoding:"jsonParsed",

              filters:[

                {

                  dataSize:165

                },

                {

                  memcmp:{

                    offset:0,

                    bytes:
                    tokenAddress

                  }

                }

              ]

            }

          ]

        })

      }

    );




    const data =
      await response.json();





    const holders =

      data?.result?.map(

        (item:any)=>({


          address:
          item.pubkey,


          amount:
          item.account.data.parsed.info.tokenAmount.uiAmount


        })

      ) || [];





    return holders;




  }

  catch(error){


    return [];

  }


}

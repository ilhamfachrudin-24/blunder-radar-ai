import {
  solanaRequest
} from "./solanaRPC";



const TOKEN_PROGRAM_ID =
  "TokenkegQfeZyiNwAJbNbGKPFXCWvBvf9Ss623VQ5DA";





export async function getTokenHolders(
  tokenAddress:string
){


  try {



    const data =

      await solanaRequest(

        "getProgramAccounts",

        [

          TOKEN_PROGRAM_ID,


          {

            encoding:
            "jsonParsed",


            filters:[


              {

                dataSize:
                165

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

      );







    const holders =


      data?.result

      ?.map((item:any)=>{


        const info =

          item.account
          ?.data
          ?.parsed
          ?.info;



        return {


          address:

            info?.owner,



          tokenAccount:

            item.pubkey,



          amount:

            Number(

              info?.tokenAmount
              ?.uiAmount || 0

            )



        };



      })



      ?.filter(

        (wallet:any)=>

          wallet.amount > 0

      )

      || [];







    return holders;






  }

  catch(error){


    console.log(
      "Holder fetch error:",
      error
    );


    return [];


  }


}

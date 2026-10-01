const RPC_URL =
  "https://api.mainnet-beta.solana.com";



export async function checkSolanaSecurity(
  address:string
) {


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

            method:"getAccountInfo",

            params:[

              address,

              {

                encoding:"jsonParsed"

              }

            ]

          })

        }

      );





    const data =
      await response.json();





    let securityScore = 50;



    let mintAuthority =
      "Unknown";


    let freezeAuthority =
      "Unknown";



    let supply =
      "Unknown";



    const account =
      data?.result?.value;





    if(account){


      securityScore +=20;


    }

    else {


      securityScore -=30;


    }





    if(securityScore >100){

      securityScore=100;

    }



    if(securityScore <0){

      securityScore=0;

    }





    return {


      tokenAddress:address,


      mintAuthority,


      freezeAuthority,


      supply,


      securityScore,



      warnings:[

        "Advanced authority detection requires SPL Token parsing",

        "Always verify liquidity lock and holder distribution"

      ]


    };




  }

  catch(error){



    return {


      tokenAddress:address,


      mintAuthority:"Unknown",


      freezeAuthority:"Unknown",


      supply:"Unknown",


      securityScore:40,


      warnings:[

        "Unable to connect Solana RPC"

      ]


    };


  }


}

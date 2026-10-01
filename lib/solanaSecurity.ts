const RPC_URL =
  "https://api.mainnet-beta.solana.com";



export async function checkSolanaSecurity(
  address:string
){


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


          method:"getAccountInfo",


          params:[


            address,


            {

              encoding:
              "jsonParsed"

            }


          ]

        })


      }


    );






    const data =
      await response.json();







    const account =

      data?.result?.value;








    let securityScore = 50;



    let mintAuthority =
      null;



    let freezeAuthority =
      null;



    let supply =
      "Unknown";



    let warnings:string[] = [];









    if(!account){



      return {


        tokenAddress:address,


        mintAuthority:null,


        freezeAuthority:null,


        supply:"Unknown",


        securityScore:20,


        warnings:[

          "Token account not found"

        ]


      };


    }









    const parsed =

      account?.data?.parsed?.info;








    if(parsed){





      mintAuthority =

        parsed?.mintAuthority || null;





      freezeAuthority =

        parsed?.freezeAuthority || null;








      supply =

        parsed?.supply || "Unknown";



    }










    // Mint Authority Check


    if(mintAuthority){


      securityScore -= 20;



      warnings.push(

        "Mint authority is active. Token supply can be increased."

      );


    }

    else{


      securityScore +=15;


    }









    // Freeze Authority Check


    if(freezeAuthority){



      securityScore -=15;



      warnings.push(

        "Freeze authority detected. Token accounts may be frozen."

      );


    }

    else{


      securityScore +=10;


    }









    // Existing account bonus


    securityScore +=10;









    if(securityScore >100){


      securityScore = 100;


    }






    if(securityScore <0){


      securityScore = 0;


    }









    if(warnings.length === 0){


      warnings.push(

        "No critical authority risks detected."

      );


    }










    return {


      tokenAddress:address,


      mintAuthority:


        mintAuthority || "Disabled",





      freezeAuthority:


        freezeAuthority || "Disabled",





      supply,





      securityScore,





      warnings



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

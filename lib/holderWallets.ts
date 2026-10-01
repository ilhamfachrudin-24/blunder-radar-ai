import {
  solanaRequest
} from "./solanaRPC";


const TOKEN_PROGRAM_ID =
"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";


export async function getTokenHolders(
  tokenAddress:string
){

  try {

    const data:any = await solanaRequest(
      "getProgramAccounts",
      [
        TOKEN_PROGRAM_ID,
        {
          encoding:"jsonParsed",

          filters:[
            {
              dataSize:165
            },
            {
              memcmp:{
                offset:0,
                bytes:tokenAddress
              }
            }
          ]
        }
      ]
    );


    if(!data?.result || !Array.isArray(data.result)){
      return [];
    }


    const walletMap:any = {};


    data.result.forEach((item:any)=>{

      const info =
        item.account?.data?.parsed?.info;


      const owner =
        info?.owner;


      const amount =
        Number(
          info?.tokenAmount?.uiAmount || 0
        );


      if(owner && amount > 0){

        if(!walletMap[owner]){

          walletMap[owner] = {

            address:owner,

            amount:0,

            tokenAccounts:0

          };

        }


        walletMap[owner].amount += amount;

        walletMap[owner].tokenAccounts += 1;

      }


    });



    const holders:any[] =
      Object.values(walletMap);



    const sorted:any[] =
      holders.sort(
        (a:any,b:any)=>
          b.amount - a.amount
      );



    const totalSupply =
      sorted.reduce(
        (sum:number,wallet:any)=>
          sum + wallet.amount,
        0
      );



    return sorted.map(

      (wallet:any,index:number)=>{


        const percentage =
          totalSupply > 0

          ?

          (wallet.amount / totalSupply) * 100

          :

          0;



        return {

          ...wallet,

          rank:index + 1,

          percentage:Number(
            percentage.toFixed(2)
          )

        };


      }

    );



  }

  catch(error){


    console.log(
      "Holder fetch error:",
      error
    );


    return [];


  }


}

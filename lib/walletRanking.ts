import { 
  calculateSmartMoneyScore 
} from "./smartMoneyScore";



export function rankWallets(
  wallets:any[]
){



  if(
    !wallets ||
    wallets.length === 0
  ){

    return [];

  }







  const ranked =

    wallets.map((wallet)=>{





      const analysis =

        calculateSmartMoneyScore({


          balance:

            wallet.balance || 0,



          transactions:

            wallet.transactions || 0



        });









      return {


        wallet:

          wallet.address || wallet.wallet,



        balance:

          Number(
            wallet.balance || 0
          ),




        transactions:

          Number(
            wallet.transactions || 0
          ),





        smartMoneyScore:

          analysis.smartMoneyScore,





        label:

          analysis.status



      };



    });









  return ranked.sort(

    (a,b)=>

      b.smartMoneyScore -

      a.smartMoneyScore

  );



}

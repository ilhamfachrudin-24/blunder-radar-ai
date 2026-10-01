"use client";

import { useState } from "react";
import { rankWallets } from "@/lib/walletRanking";


export default function WhaleTracker() {


  const [wallets, setWallets] =
    useState<any[]>([]);


  const [loading, setLoading] =
    useState(false);





  async function scanSmartMoney() {


    setLoading(true);



    try {


      // Data sementara
      // nanti diganti holder wallet API


      const walletData = [


        {

          address:
          "WalletExample111",


          balance:
          250,


          transactions:
          35

        },



        {

          address:
          "WalletExample222",


          balance:
          40,


          transactions:
          15

        }



      ];





      const ranking =

        rankWallets(walletData);




      setWallets(ranking);




    }


    finally {


      setLoading(false);


    }


  }







  return (


    <div className="card mt-10">


      <h2 className="text-2xl font-bold">

        🐋 Smart Money Intelligence

      </h2>





      <p className="mt-3 text-gray-400">

        Detect profitable wallets and whale activity.

      </p>






      <button


        onClick={scanSmartMoney}


        className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-bold"


      >


        {loading
        ? "Scanning..."
        : "Scan Smart Money"}


      </button>







      <div className="mt-8 space-y-5">



        {wallets.map((wallet,index)=>(



          <div

          key={index}

          className="border border-white/10 rounded-xl p-5"

          >



            <h3 className="font-bold text-xl">

              #{index+1}

              {" "}

              {wallet.label}

            </h3>






            <p className="mt-2 text-gray-400">

              Wallet:

              {wallet.wallet}

            </p>







            <p>

              Balance:

              <span className="ml-2 text-green-400">

                {wallet.balance} SOL

              </span>

            </p>







            <p>

              Transactions:

              <span className="ml-2">

                {wallet.transactions}

              </span>

            </p>








            <p className="mt-3 text-2xl font-bold gradient-text">

              Smart Score:

              {wallet.score}/100

            </p>






          </div>



        ))}



      </div>





    </div>


  );

}

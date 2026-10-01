"use client";

import { useEffect, useState } from "react";
import { useAnalysis } from "@/context/AnalysisContext";
import { checkSolanaSecurity } from "@/lib/solanaSecurity";



export default function SecurityScanner(){


  const {
    analysis,
    setAnalysis
  } = useAnalysis();



  const [loading,setLoading] =
    useState(false);







  useEffect(()=>{


    async function runSecurityCheck(){



      const address =

        analysis
        ?.tokenAddress;



      if(!address) return;




      if(analysis?.security) return;






      try{


        setLoading(true);




        const security =

          await checkSolanaSecurity(

            address

          );







        setAnalysis((prev:any)=>({


          ...prev,


          security



        }));





      }

      finally{


        setLoading(false);


      }



    }






    runSecurityCheck();




  },[
    analysis?.tokenAddress
  ]);









  const security =

    analysis?.security;







  return (



    <div className="card mt-10">



      <h2 className="text-2xl font-bold">

        🛡️ Solana Security Scanner

      </h2>







      {loading && (


        <p className="mt-5 text-gray-400">

          Checking token security...

        </p>


      )}








      {!loading && !security && (


        <p className="mt-5 text-yellow-400">

          Analyze token first.

        </p>


      )}









      {security && (



        <div className="mt-5 space-y-4 text-gray-300">






          <p>

            Mint Authority:

            <span className="ml-2 text-yellow-400">

              {security.mintAuthority || "Unknown"}

            </span>

          </p>







          <p>

            Freeze Authority:

            <span className="ml-2 text-yellow-400">

              {security.freezeAuthority || "Unknown"}

            </span>

          </p>







          <p>

            Supply:

            <span className="ml-2">

              {security.supply || "Unknown"}

            </span>

          </p>









          <div>


            <p>

              Security Score:

            </p>




            <div className="mt-3 text-5xl font-bold gradient-text">


              {security.securityScore || 50}/100


            </div>




          </div>








          <div className="mt-5">


            <p className="text-gray-400">

              Security Factors:

            </p>



            <ul className="mt-3 space-y-2">


              <li>

                ✓ Mint Authority Check

              </li>



              <li>

                ✓ Freeze Authority Check

              </li>



              <li>

                ✓ Token Supply Analysis

              </li>



            </ul>


          </div>









          {security.warnings && (


            <div className="mt-5">


              <h3 className="font-bold text-red-400">

                ⚠️ Warnings

              </h3>




              {security.warnings.map(

                (warning:string,index:number)=>(


                  <p

                    key={index}

                    className="text-sm text-gray-400"

                  >

                    ⚠️ {warning}

                  </p>


                )

              )}


            </div>


          )}







        </div>


      )}







    </div>


  );


}

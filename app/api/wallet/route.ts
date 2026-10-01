import { NextResponse } from "next/server";
import { getWalletData } from "@/lib/walletAnalysis";


export async function GET(
  request: Request
) {


  const { searchParams } =
    new URL(request.url);



  const address =
    searchParams.get("address");



  if(!address){

    return NextResponse.json(
      {
        error:
        "Wallet address required"
      },
      {
        status:400
      }
    );

  }




  try {


    const data =
      await getWalletData(address);



    return NextResponse.json(data);



  }

  catch(error){


    return NextResponse.json(

      {
        error:
        "Failed wallet analysis"
      },

      {
        status:500
      }

    );


  }


}

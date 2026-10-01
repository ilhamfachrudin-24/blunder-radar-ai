import { NextResponse } from "next/server";


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
        success:false,
        error:"Token address required"
      },
      {
        status:400
      }
    );

  }



  try {


    const response =
      await fetch(

        `https://api.dexscreener.com/latest/dex/tokens/${address}`,

        {
          cache:"no-store"
        }

      );




    if(!response.ok){

      throw new Error(
        "Dexscreener API failed"
      );

    }




    const data =
      await response.json();




    return NextResponse.json({

      success:true,

      data

    });



  }

  catch(error){


    return NextResponse.json(

      {

        success:false,

        error:
        "Failed to fetch token data"

      },

      {
        status:500
      }

    );


  }


}

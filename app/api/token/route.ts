import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {

  const { searchParams } = new URL(request.url);

  const address = searchParams.get("address");


  if (!address) {

    return NextResponse.json(
      {
        error: "Token address required"
      },
      {
        status: 400
      }
    );

  }


  try {

    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${address}`
    );


    const data = await response.json();


    return NextResponse.json(data);


  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to fetch token data"
      },
      {
        status: 500
      }
    );

  }

}

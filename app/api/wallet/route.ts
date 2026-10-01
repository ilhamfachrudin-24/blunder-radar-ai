import { NextResponse } from "next/server";
import { getWalletData } from "@/lib/walletTracker";


export async function GET(
  request: Request
) {

  const { searchParams } =
    new URL(request.url);


  const wallet =
    searchParams.get("wallet");


  if (!wallet) {

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


  const data =
    await getWalletData(wallet);



  return NextResponse.json(data);

}

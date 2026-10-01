export async function getTokenInfo(address: string) {

  const RPC_URL =
    "https://api.mainnet-beta.solana.com";


  try {

    const response = await fetch(
      RPC_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          jsonrpc: "2.0",

          id: 1,

          method: "getAccountInfo",

          params: [
            address,
            {
              encoding: "jsonParsed"
            }
          ]

        })

      }
    );


    const data = await response.json();


    return data;


  } catch (error) {


    return {
      error: "Failed to fetch Solana data"
    };


  }

}

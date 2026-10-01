"use client";

export default function Loading() {

  return (

    <div className="flex flex-col items-center justify-center py-10">


      <div className="h-12 w-12 rounded-full border-4 border-white/20 border-t-white animate-spin">
      </div>


      <p className="mt-4 text-gray-400">

        Analyzing blockchain data...

      </p>


    </div>

  );

}

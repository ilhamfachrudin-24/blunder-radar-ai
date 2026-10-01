type Props = {
  data?: any;
};


export default function HolderAnalysis({
  data
}: Props) {


  return (

    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        👥 Holder Analysis
      </h2>


      <div className="mt-5 space-y-3 text-gray-300">


        <p>
          Holder Count:

          <span className="text-white">
            {data?.holders || "Checking..."}
          </span>

        </p>


        <p>
          Distribution:

          <span className="text-green-400">
            {data?.holderStatus || "Analyzing..."}
          </span>

        </p>


        <p>
          Holder Score:

          <span className="gradient-text font-bold">
            {data?.holderScore || 50}/100
          </span>

        </p>


      </div>

    </div>

  );

}

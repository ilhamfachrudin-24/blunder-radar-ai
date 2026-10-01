type Props = {
  insight?: string;
};


export default function AIAssistant({
  insight
}: Props) {


  return (

    <div className="card mt-10">

      <h2 className="text-2xl font-bold">
        🤖 Blunder AI Assistant
      </h2>


      <p className="mt-5 text-gray-300">

        {insight ||
        "Analyze a token to receive AI insights."}

      </p>


    </div>

  );

}

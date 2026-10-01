import TokenScanner from "@/components/TokenScanner";
import RiskScore from "@/components/RiskScore";
import WhaleTracker from "@/components/WhaleTracker";
import SecurityScanner from "@/components/SecurityScanner";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <main>

      <section className="container pt-20">

        <h1 className="text-5xl font-bold gradient-text">
          Blunder Radar AI
        </h1>

        <p className="mt-5 text-gray-300 text-lg">
          AI-powered Solana memecoin analysis platform
          for traders and Web3 researchers.
        </p>


        <TokenScanner />


        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <RiskScore />

          <WhaleTracker />

          <SecurityScanner />

        </div>


        <div className="card mt-10">

          <h2 className="text-2xl font-bold">
            Token Intelligence Engine
          </h2>

          <p className="mt-4 text-gray-300">
            Blunder Radar AI analyzes token liquidity,
            trading activity, holder distribution,
            wallet behavior, and market signals.
          </p>

        </div>


      </section>

      <AIAssistant />

    </main>
  );
}

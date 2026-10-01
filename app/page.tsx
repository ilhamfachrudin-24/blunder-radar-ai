import TokenScanner from "@/components/TokenScanner";
import RiskScore from "@/components/RiskScore";
import WhaleTracker from "@/components/WhaleTracker";
import SecurityScanner from "@/components/SecurityScanner";
import AIAssistant from "@/components/AIAssistant";
import BlunderRating from "@/components/BlunderRating";
import { useAnalysis } from "@/context/AnalysisContext";
import Navbar from "@/components/Navbar";

export default function Home() {

  const { analysis } = useAnalysis();
  
  return (

<main className="max-w-7xl mx-auto px-6">

<Navbar />

  <section className="py-20">


<h1 className="text-5xl md:text-7xl font-bold">

AI Powered

<br />

<span className="gradient-text">

Solana Intelligence Platform

</span>

</h1>


<p className="mt-6 text-gray-400 text-lg max-w-2xl">

Analyze tokens, track smart money,
and discover risks using AI-powered
Web3 analytics.

</p>


<div className="mt-8 flex gap-4">


<button className="px-6 py-3 rounded-xl bg-white text-black font-bold">

Start Analysis

</button>


<button className="px-6 py-3 rounded-xl border border-white/20">

View GitHub

</button>


</div>


</section>

      <section className="container pt-20">

        <h1 className="text-5xl font-bold gradient-text">
          Blunder Radar AI
        </h1>

        <p className="mt-5 text-gray-300 text-lg">
          AI-powered Solana memecoin analysis platform
          for traders and Web3 researchers.
        </p>


        <TokenScanner />
       <pre className="mt-6 rounded-lg bg-black p-4 text-sm text-green-400 overflow-auto">
  {JSON.stringify(analysis, null, 2)}
</pre>


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

      <BlunderRating />

    </main>
  );
}

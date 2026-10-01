"use client";

import TokenScanner from "@/components/TokenScanner";
import TokenRadar from "@/components/TokenRadar";
import RiskScore from "@/components/RiskScore";
import WhaleTracker from "@/components/WhaleTracker";
import SecurityScanner from "@/components/SecurityScanner";
import AIAssistant from "@/components/AIAssistant";
import BlunderRating from "@/components/BlunderRating";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";


export default function Home() {


  return (

    <main className="max-w-7xl mx-auto px-6">


      <Navbar />



      {/* HERO SECTION */}


      <section className="py-20 fade-in">


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


          <button className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition">

            Start Analysis

          </button>



          <button className="px-6 py-3 rounded-xl border border-white/20">

            View GitHub

          </button>


        </div>


      </section>





      {/* TOKEN RADAR */}


      <section id="radar" className="mt-20">


        <h2 className="text-3xl font-bold mb-6">

          🔥 Token Radar AI

        </h2>


        <TokenRadar />


      </section>






      {/* TOKEN INTELLIGENCE */}


      <section id="scanner" className="mt-20">


        <h2 className="text-3xl font-bold mb-6">

          🔍 Token Intelligence

        </h2>



        <TokenScanner />



        <RiskScore />




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






      {/* SECURITY */}


      <section className="mt-20">


        <h2 className="text-3xl font-bold mb-6">

          🛡️ Security Analysis

        </h2>



        <SecurityScanner />


      </section>







      {/* WHALE TRACKER */}


      <section id="whale" className="mt-20">


        <h2 className="text-3xl font-bold mb-6">

          🐋 Smart Money Intelligence

        </h2>



        <WhaleTracker />


      </section>







      {/* AI ANALYSIS */}


      <section className="mt-20">


        <h2 className="text-3xl font-bold mb-6">

          🤖 AI Analysis

        </h2>



        <AIAssistant />



        <BlunderRating />


      </section>







      {/* ABOUT BUILDER */}


      <About />




      {/* FOOTER */}


      <Footer />



    </main>

  );

}

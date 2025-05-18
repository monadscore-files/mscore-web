import React from "react";
import {
  herobg,
  hiw1,
  hiw2,
  hiw3,
  hiw4,
  hiw5,
  hiw6,
  hiw7,
  hiw8,
  mattersbg,
  readybg,
  startbg,
  sts2,
  sts3,
  sts4,
  sts5,
  whybg,
  wim1,
  wim2,
  wim3,
  wim4,
  wim5,
} from "../Assets";
import { Link } from "react-router-dom";
import { HowItWorksCard, StepsToStart, WhyItMattersCard } from "../Components";

const howitworksData = [
  { imageSrc: hiw1, title: "On-Chain Behavior Tracking", description: "Goes beyond wallet balances — tracks real DeFi, governance, and contract interactions."},
  { imageSrc: hiw2, title: "Adaptive Scoring System", description:'Scores update in real time based on consistency, participation, and verified activity.' },
  { imageSrc: hiw3, title: "AI-Driven Reputation Engine", description:'Uses machine learning to evaluate real user behavior across the Monad ecosystem.' },
  { imageSrc: hiw4, title: "AI Sybil Detection", description:'AI filters out manipulation and bot activity to ensure fairness.' },
  { imageSrc: hiw5, title: "Streak-Based Progression", description:`The longer you're active, the stronger your score — connection streaks matter.` },
  { imageSrc: hiw6, title: "Trust Node Infrastructure", description:'Nodes power the system — users run trust nodes to earn points and validate engagement.' },
  { imageSrc: hiw7, title: "Built on Monad", description:'Takes advantage of Monad’s parallel EVM execution and sub-second finality.' },
  {
    imageSrc: hiw8, title:'Lightweight & Permissionless',
    description: " Easy to join, no KYC required — anyone can start building their rep from day one.",
  },
];




const whyitmattersCard = [
  {
    imageSrc: wim1,
    title: "Fair Airdrops",
    description: "Projects can reward real users, not farmers.",
  },
  {
    imageSrc: wim2,
    title: "Credible Governance",
    description: "Credible Governance Votes carry weight based on reputation.",
  },
  {
    imageSrc: wim3,
    title: "Sybil Resistance",
    description: " One human, one score.",
  },
  {
    imageSrc: wim4,
    title: "Decentralized Identity",
    description: " Earn reputation without KYC.",
  },
  {
    imageSrc: wim5,
    title: "Smarter Onboarding",
    description: " Projects can gate access using scores.",
  },
];

// const stepstostart = [
//   { imageSrc: sts3, title: "1", description: "Connect to Monad testnet" },
//   { imageSrc: sts2, title: "2", description: "Spin up your node" },
//   { imageSrc: sts3, title: "3", description: "Complete weekly challenges" },
//   { imageSrc: sts4, title: "4", description: "Stay consistent for streaks" },
//   { imageSrc: sts5, title: "5", description: "Climb the leaderboard" },
// ];
const stepstostart = [
  { imageSrc: sts3, title: "1", description: "Run a Trust Node" },
  { imageSrc: sts2, title: "2", description: "Use Monad Ecosystem Apps" },
  { imageSrc: sts3, title: "3", description: "Avoid Multi-Wallet Farming" },
  { imageSrc: sts4, title: "4", description: "Complete Verified Onchain Actions" },
  { imageSrc: sts5, title: "5", description: "Maintain Uptime on Your Node" },

];








const Home = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <section className="w-full relative py-20 sm:py-32 min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-20"
        >
          <source src={herobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
        <div className="max-w-6xl relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold leading-tight sm:leading-snug">
            Your On-Chain Reputation. Scored in Real Time. Powered by AI.
          </h1>
          <p className="text-[#D8D8D8] max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            MonadScore is an AI-powered decentralized reputation system for the
            Monad ecosystem built to reward real users, prevent manipulation,
            and drive trust across Web3.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:space-x-4">
            <Link to="https://dashboard.monadscore.xyz" target="_blank">
              <button className="px-8 sm:px-12 py-3 bg-white/0 text-[#E300F3] font-semibold border border-[#E300F3] rounded-full transform hover:scale-x-105 transition-transform duration-500">
                Run a Trust Node
              </button>
            </Link>
            <Link to="https://repute.monadscore.xyz" target="_blank">

              <button className="px-8 sm:px-12 py-3  bg-gradient-to-r from-[#E300F3] to-[#620268] text-white hover:from-[#620268]  rounded-full transform hover:scale-x-105 transition-transform duration-500 hover:to-[#E300F3]">
                Check Your Score
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why MonadScore */}
      <section className="w-full py-20 sm:py-40 min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background image aligned to the right */}
        <img
          src={whybg}
          alt="Why MonadScore Background"
          className="absolute top-0 right-0 h-full object-cover object-right z-10"
        />

        <div className="max-w-6xl space-y-6">
          {/* Text */}
          <p className="text-white text-6xl sm:text-[150px] font-bold -m-36 text-outline">
            Why
          </p>

          <h2 className="text-4xl sm:text-6xl text-white font-semibold leading-snug">
            Why MonadScore
          </h2>
          <p className="text-[#D8D8D8] max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            Web3 is broken without trust. Airdrops get botted. Governance gets
            gamed. Real contributors get ignored. MonadScore fixes that.
          </p>

          {/* Grid for the 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 sm:mt-10">
            <div className="px-8 py-6 bg-white/0 text-white border border-white rounded-xl transform hover:scale-x-105 transition-transform duration-500">
              <span className="text-[#E300F3]">Real activity {">"} </span>
              <br /> wallet farming
            </div>
            <div className="px-8 py-6 bg-white/0 text-white border border-white rounded-xl transform hover:scale-x-105 transition-transform duration-500">
              <span className="text-[#E300F3]">Community {">"} </span>
              <br /> Sybil attackers
            </div>
            <div className="px-8 py-6 bg-white/0 text-white border border-white rounded-xl transform hover:scale-x-105 transition-transform duration-500">
              <span className="text-[#E300F3]">Merit {">"} </span>
              <br /> manipulation
            </div>
          </div>

          <p className="text-[#D8D8D8] max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            We track, score, and help projects reward real behavior. Fair, transparent, and
            unstoppable.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full py-20 sm:py-40 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-6xl space-y-6">
          {/* Text */}
          <p className="text-white text-6xl sm:text-[100px] font-bold -mb-16 sm:-mb-36 text-outline">
            Features
          </p>
          <h2 className="text-4xl sm:text-6xl text-white font-semibold leading-snug">
            Key Features
          </h2>
          <p className="text-[#D8D8D8] max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            Your Reputation = Your Score
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-20 max-w-7xl w-full px-4">
            {howitworksData.map((item, index) => (
              <HowItWorksCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="w-full py-20 sm:py-40 min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Full-height image aligned to the left */}
        <img
          src={mattersbg}
          alt="Why It Matters Background"
          className="absolute top-0 left-0 h-full object-cover object-left z-10"
        />

        <div className="max-w-6xl space-y-6">
          {/* Text */}
          <p className="text-white text-6xl sm:text-[150px] font-bold -m-24 sm:-m-36 text-outline">
            Why
          </p>
          <h2 className="text-4xl sm:text-6xl text-white font-semibold leading-snug">
            Why it Matters
          </h2>
          <p className="text-[#D8D8D8] max-w-3xl mx-auto text-lg sm:text-2xl md:text-2xl">
            Projects building on Monad can integrate monadscore to pilot:
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-12 sm:mt-20 max-w-7xl w-full px-4 text-left">
            {/* First 3 cards */}
            {whyitmattersCard.slice(0, 3).map((item, index) => (
              <WhyItMattersCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            ))}

{/* Last 2 cards centered */}
<div className="col-span-full flex justify-center gap-6 mt-6 sm:mt-12 flex-wrap sm:flex-nowrap">
  {whyitmattersCard.slice(3).map((item, index) => (
    <div className="w-full sm:w-auto">
      <WhyItMattersCard
        key={index + 3}
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
      />
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Start Earning Reputation */}
      <section className="w-full py-20 sm:py-40 min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Top-right background image */}
        <img
          src={startbg}
          alt="Start Background Top Right"
          className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] opacity-50 z-10"
        />

        {/* Bottom-left background image */}
        <img
          src={startbg}
          alt="Start Background Bottom Left"
          className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] lg:w-[600px] opacity-50 z-10"
        />

        <div className="max-w-6xl space-y-6">
          {/* Text */}
          <p className="text-white text-6xl sm:text-[100px] font-bold -m-16 sm:-m-36 text-outline">
            Start
          </p>
          <h2 className="text-4xl sm:text-6xl text-white font-semibold">
            Start Building Your Reputation
          </h2>
          <p className="text-[#D8D8D8] max-w-2xl mx-auto text-lg sm:text-2xl md:text-3xl">
            Get on-chain. Stay active. Get recognized.
          </p>
{/* 
          <h3 className="text-4xl sm:text-5xl text-white font-semibold py-12 sm:py-16">
            Steps to Start:
          </h3> */}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mt-12 sm:mt-16 max-w-7xl w-full px-4">
            {stepstostart.map((item, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className={
                    index % 2 === 0 ? "sm:ml-24 lg:ml-48" : "sm:mr-24 lg:mr-48"
                  }
                >
                  <StepsToStart
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to build */}
      <section className="w-full py-20 sm:py-40 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
        <img
          src={readybg}
          alt="Ready Background"
          className="absolute inset-0 z-20 w-full h-full object-cover"
        />

        <div className="max-w-6xl space-y-6">
  
          <p className="text-white text-6xl sm:text-[100px] font-bold -m-16 sm:-m-36 text-outline">
            Ready
          </p>
          <h2 className="text-4xl sm:text-6xl text-white font-semibold">
            Ready to build your on-chain rep?
          </h2>
          <p className="text-[#D8D8D8] max-w-2xl mx-auto text-lg sm:text-2xl md:text-3xl">
            Your score says more than your wallet ever could.
          </p>


  
          {/* <div className="space-y-4 sm:space-x-4 sm:space-y-0 sm:flex sm:justify-center sm:flex-wrap mt-6">
          <Link to="https://monadscore.xyz" className="z-40" target="_blank">

              <button className="px-12 cursor-pointer py-3 bg-white/0 text-white border border-white rounded-full transform hover:scale-x-105 hover:bg-[#620268] transition-transform duration-500 w-full sm:w-auto">
       
              Run a Trust Node
              </button>
              </Link>
         
          
            <Link to="https://repute.monadscore.xyz" className="z-40" target="_blank">
              <button className="px-12 py-3 bg-white/0 text-white border border-white rounded-full transform hover:scale-x-105  hover:bg-[#620268] transition-transform duration-500 w-full sm:w-auto">
                Check Your Score
              </button>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;

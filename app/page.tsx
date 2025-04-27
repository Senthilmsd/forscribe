"use client";
import Image from 'next/image';
import logoName from '../public/Assets/logo&name.png'
import logo from '../public/Assets/logo.png'
import google from '../public/Assets/g-logo.png'
import microsoft from '../public/Assets/microsoft.png'


import { useState, useEffect, useRef  } from "react";
import Card from "./cards/page";
import { animate, motion } from "framer-motion";
// import { Link } from 'react-router-dom';


export default function page() {
  // const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(true);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  

  // useEffect(() => {
  //   if (isScrollable && containerRef.current) {
  //     containerRef.current.scrollTo({
  //       top: containerRef.current.scrollHeight,
  //       behavior: "smooth", // Smooth scroll
  //     });
  //   }
  // }, [isScrollable]);


  if(!showSignIn){
    const mainPage = document.getElementById("main-content");
    if(mainPage){
      mainPage.style.overflow = "scroll";
    }
  }

  const cardsData = [
    {
      image: "/Assets/flatfile.png",
      title: "Flatfile",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/ariana.png",
      title: "Ariana",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/name-sheap.png",
      title: "name-sheap",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/jack-mark.png",
      title: "jack-mark",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/chat-gpt.png",
      title: "chat-gpt",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/kate.png",
      title: "kate",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/QB.png",
      title: "QB",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/notion.png",
      title: "notion",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/andrew.png",
      title: "andrew",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/skype.png",
      title: "skype",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/jack-mark.png",
      title: "jack-mark",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/linkedin.png",
      title: "LinkedIn",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/paul.png",
      title: "Paul",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },
    {
      image: "/Assets/aws.png",
      title: "AWS",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/canva.png",
      title: "Canva",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/jane-mary.png",
      title: "Jane mary",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”",
    },{
      image: "/Assets/chimp-monk.png",
      title: "Chimp monk",
      subtitle: "Project Management",
    },
    {
      image: "/Assets/jack-mark.png",
      title: "jack-mark",
      subtitle: "“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”.",
    },
  ];

  const column1 = cardsData.slice(0, 4);   // 4 cards
  const column2 = cardsData.slice(4, 7);   // 3 cards
  const column3 = cardsData.slice(7, 11);  // 4 cards
  const column4 = cardsData.slice(11, 14); // 3 cards
  const column5 = cardsData.slice(14, 18); // 4 cards

  return (



    <motion.main id='main-content' 
    className="h-screen overflow-hidden bg-gray-800 p-0 m-0 relative"
    initial={{ backgroundColor: "black" }}
      animate={{
        transition: { duration: 5 }, // Transition over 5 seconds
      }}
      >.
      {/* signin content  */}

      {/* <main className="min-h-screen bg-gray-100 "> */}
      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="overflow-hidden sticky bottom-10 bg-gradient-to-br from-black/100 via-black/80  to-purple-500/60 h-screen z-50 block">
          {/* Logo */}
          <div className="flex justify-left ml-6 pt-6">
            <Image src={logoName} alt='Logo&name' className="h-10"/>
          </div>
          {/* Title */}

          
          {/* Buttons */}
          <div className="flex flex-col items-center justify-center  space-y-4 mb-6 bg-black/50 w-96 absolute top-50 left-140 p-2 rounded-[20px]">
          <Image src={logo} alt="Forescribe" className="mt-5" />
          
          <h2 className="text-white text-2xl font-semibold text-center pb-3">
            Welcome to Forescribe
          </h2>
       .   
          <button
            onClick={() => setShowSignIn(false)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-2 rounded-lg w-80 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Image src={google} alt="Google" className="h-5 w-5 -ml-5" />
            Continue with Google
          </button>
          
          <button
            onClick={() => setShowSignIn(false)}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg w-80 flex items-center justify-center gap-2 mb-12 cursor-pointer"
          >
            <Image src={microsoft} alt="Microsoft" className="h-5 w-5 "/>
            Continue with Microsoft
          </button>

          
        </div>
        {/* Terms */}
       . <p className="text-xs text-gray-400 text-center absolute left-138 top-140 w-100">
              By clicking "Continue with Google/Microsoft" above, you acknowledge that you have read and understood, and agree to Forescribe’s{" "}
              <a href="#" className="underline text-purple-400">Terms & Conditions</a> and{" "}
              <a href="#" className="underline text-purple-400">Privacy Policy</a>.
          </p>
    
      </div>
      )}


    <style jsx>{`
      @keyframes autoScroll {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }
    `}</style>

      {/* card-content */}
      <motion.div id="card-content"
      ref={containerRef}
      style={{
        animation: showSignIn ? 'autoScroll 40s linear infinite' : 'none', // 🎯 Auto-scroll when sign-in page open
      }}
      className={`flex justify-center gap-2 absolute top-0 h-full${isScrollable ? "overflow-auto" : "overflow-hidden"}`}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}>
        {/* Column 1 */}
        <div className="flex flex-col gap-1">
          {column1.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1 mt-40">
          {column2.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1">
          {column3.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-1 mt-40">
          {column4.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-1">
          {column5.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
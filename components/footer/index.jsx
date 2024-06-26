import React, { useState, useEffect } from "react";
import FooterColumns from "./footerContent/FooterColumn";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Footer = () => {
  const [quote, setQuote] = useState("");
  const StartQuot = RiDoubleQuotesL;
  const EndQuot = RiDoubleQuotesR;

  // const quoteGenerator = async () => {
  //   const response = await fetch("https://api.quotable.io/random"); // funnyQuote
  //   const data = await response.json();
  //   setQuote(data.content);
  //   console.log(data.content);
  // };

  // useEffect(() => {
  //   quoteGenerator();
  // }, []);

  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          {"© "} {new Date().getFullYear()}{" "}
          {" CampusKart. All rights reserved - Designed and Developed with "}
          <BsFillSuitHeartFill
            style={{
              color: "#ee384e",
              margin: "0 0.3rem 0 0.3rem",
              fontSize: "1rem",
              display: "inline",
            }}
          />
          {"by Animesh Barik"}
        </div>
        {quote && (
          <div className="py-1">
            <StartQuot
              style={{
                display: "inline",
                verticalAlign: "top",
                fontSize: "0.8rem",
                color: "#A71B4A",
              }}
            />
            {quote}
            <EndQuot
              style={{
                display: "inline",
                verticalAlign: "top",
                fontSize: "0.8rem",
                color: "#A71B4A",
              }}
            />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

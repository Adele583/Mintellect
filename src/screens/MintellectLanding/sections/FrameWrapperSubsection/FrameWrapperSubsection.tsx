import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = (): JSX.Element => {
  // Data for feature cards
  const featureCards = [
    {
      title: "Learn While You Own",
      description:
        "Mintellect makes NFT ownership educational with gamified learning and quizzes tied to real rewards.",
      icon: "https://c.animaapp.com/mf0iy424DKI2iI/img/highlight-05.svg",
    },
    {
      title: "Knowledge-Backed NFTs",
      description:
        "Get access to limited-edition collections designed to combine art, knowledge, and utility.",
      icon: "https://c.animaapp.com/mf0iy424DKI2iI/img/highlight-05.svg",
    },
    {
      title: "Community-Powered Growth",
      description:
        "Join a growing ecosystem of creators, learners, and collectors shaping the next wave of digital ownership.",
      icon: "https://c.animaapp.com/mf0iy424DKI2iI/img/highlight-05.svg",
    },
  ];

  // Data for FAQ items
  const faqItems = [
    { question: "What is Mintellect?" },
    { question: "How does the Learn-to-Mint process work?" },
    { question: "Do I need crypto to use Mintellect?" },
    { question: "What happens if I fail the quiz?" },
    {
      question:
        "Why should I use Mintellect instead of other NFT marketplaces?",
    },
  ];

  // Data for roadmap phases
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Testnet Launch",
      description:
        "Deploy Mintellect on EduChain testnet, allow users to explore, learn, and mint demo NFTs.",
      position: "top-0 left-0",
    },
    {
      phase: "Phase 2",
      title: "Mainnet Launch",
      description:
        "Official Mintellect launch on EduChain mainnet with core features: Browse, Learn, Quiz, Mint.",
      position: "top-0 left-[910px]",
    },
    {
      phase: "Phase 4",
      title: "Edu Growth & Rewards",
      description:
        "Partnerships, learning challenges, and reward programs for active edu-chain collectors.",
      position: "top-[447px] left-0",
    },
    {
      phase: "Phase 3",
      title: "Marketplace & more",
      description:
        "Enable NFT trading and tools for creators to launch their own Learn-to-Mint collections.",
      position: "top-[592px] left-[910px]",
    },
  ];

  // Data for footer links
  const footerLinks = [
    { text: "©2025 Novus Academy. All rights reserved.", underline: false },
    { text: "Privacy Policy", underline: true },
    { text: "Terms of Service", underline: true },
    { text: "Cookie Settings", underline: true },
  ];

  // Data for social media icons
  const socialIcons = [
    {
      src: "https://c.animaapp.com/mf0iy424DKI2iI/img/vector-9.svg",
      alt: "Social icon 1",
      className: "w-3 h-3 top-0.5 left-0",
    },
    {
      src: "https://c.animaapp.com/mf0iy424DKI2iI/img/vector-2.svg",
      alt: "Social icon 2",
      className: "w-[3px] h-[3px] top-0 left-[11px]",
    },
    {
      src: "https://c.animaapp.com/mf0iy424DKI2iI/img/vector-8.svg",
      alt: "Social icon 3",
      className: "w-6 h-[22px]",
    },
    {
      src: "https://c.animaapp.com/mf0iy424DKI2iI/img/vector-7.svg",
      alt: "Social icon 4",
      className: "w-6 h-6",
    },
    {
      src: "https://c.animaapp.com/mf0iy424DKI2iI/img/vector-1.svg",
      alt: "Social icon 5",
      className: "w-[34px] h-6",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden [background:radial-gradient(50%_50%_at_16%_26%,rgba(73,44,245,0.06)_13%,rgba(66,49,49,0)_100%),linear-gradient(180deg,rgba(14,15,20,1)_0%,rgba(21,22,33,1)_100%)]">
      {/* Hero Section - NFT Collections */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex flex-col items-center gap-[60px]">
              <div className="flex flex-col w-[881px] max-w-full items-center gap-6">
                <p className="text-zinc-400 text-base text-center [font-family:'Lexend',Helvetica] font-light">
                  Discover Top NFT Collections
                </p>
              </div>

              <div className="relative w-full max-w-[1237px]">
                <div className="relative h-[835px]">
                  {/* Main featured NFT card */}
                  <Card className="absolute w-[435px] h-[624px] top-0 left-1/2 transform -translate-x-1/2 rounded-[33px] overflow-hidden shadow-[inset_0px_-4px_8px_#ffffff40,inset_0px_4px_8px_#00000040,inset_6px_6px_12px_#3a0ca340] bg-cover bg-[50%_50%] border-none">
                    <CardContent className="relative h-full p-0">
                      <div className="absolute bottom-0 left-0 right-0 h-[161px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_9%,rgba(0,0,0,0)_100%)]">
                        <div className="flex flex-col w-[300px] items-center gap-2 absolute top-[19px] left-1/2 transform -translate-x-1/2">
                          <h3 className="text-white text-xl text-center [font-family:'Lexend',Helvetica] font-semibold">
                            Neon Realities
                          </h3>
                          <p className="text-[#e4e4e4] text-sm text-center [font-family:'Lexend',Helvetica] font-normal">
                            A vibrant journey through futuristic art and
                            immersive design.
                          </p>
                          <Button className="h-auto px-4 py-[13px] rounded-[33px] overflow-hidden shadow-[0px_0px_12px_#4a2cf5cc] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(0deg,rgba(74,44,245,1)_0%,rgba(74,44,245,1)_100%)] border-none text-white [font-family:'Lexend',Helvetica] font-normal text-base">
                            Launching Soon!
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Side NFT images */}
                  <img
                    className="absolute w-[380px] h-[607px] top-[178px] right-0 object-cover"
                    alt="Frame"
                  />
                  <img
                    className="absolute w-[380px] h-[607px] top-[178px] left-0 object-cover"
                    alt="Frame"
                  />

                  {/* Carousel indicators */}
                  <div className="inline-flex items-center gap-[13px] absolute top-[689px] left-1/2 transform -translate-x-1/2">
                    <div className="w-[13px] h-[13px] bg-[#5c5c5e] rounded-[6.5px]" />
                    <div className="w-[19px] h-[19px] bg-[#01a083] rounded-[9.5px]" />
                    <div className="w-[13px] h-[13px] bg-[#5c5c5e] rounded-[6.5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <img
            className="absolute w-[127px] h-[127px] top-[118px] right-[200px] object-cover"
            alt="Freepik a vibrant"
          />
          <img
            className="absolute w-[173px] h-[173px] top-[222px] left-0"
            alt="Cone"
          />
          <img
            className="absolute w-[223px] h-[152px] top-[284px] right-0"
            alt="Highlight"
            src="https://c.animaapp.com/mf0iy424DKI2iI/img/highlight-10.svg"
          />
          <div className="absolute w-[188px] h-[233px] bottom-0 right-0 bg-[#21ffd624] blur-[100px]" />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col items-center gap-12">
              {/* Main visual element */}
              <div className="relative w-full max-w-[1409px]">
                <div className="flex items-center justify-center relative">
                  <img
                    className="absolute w-[162px] h-[22px] top-[169px] left-[119px]"
                    alt="Underline"
                    src="https://c.animaapp.com/mf0iy424DKI2iI/img/underline-06.svg"
                  />
                  <img
                    className="absolute w-[34px] h-[34px] top-[479px] left-[389px]"
                    alt="Misc"
                    src="https://c.animaapp.com/mf0iy424DKI2iI/img/misc-01-1.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-[417px] left-4"
                    alt="Misc"
                    src="https://c.animaapp.com/mf0iy424DKI2iI/img/misc-01.svg"
                  />
                  <div className="w-[914px] h-[574px] rounded-[33px] bg-cover bg-[50%_50%]" />
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1272px]">
                {featureCards.map((card, index) => (
                  <Card
                    key={index}
                    className="translate-y-[-1rem] animate-fade-in opacity-0 bg-transparent border-none"
                    style={{ "--animation-delay": `${400 + index * 200}ms` }}
                  >
                    <CardContent className="relative p-0">
                      <div className="relative h-[122px]">
                        <img
                          className="absolute w-[34px] h-[37px] top-0 left-0"
                          alt="Highlight"
                          src={card.icon}
                        />
                        <div className="flex flex-col w-[302px] items-start gap-2.5 absolute top-[22px] left-7">
                          <h3 className="text-[#20f7a7] text-2xl [font-family:'Lexend',Helvetica] font-bold">
                            {card.title}
                          </h3>
                          <p className="text-zinc-400 text-base [font-family:'Lexend',Helvetica] font-normal">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative blur elements */}
          <div className="absolute top-0 left-0 w-[188px] h-[233px] bg-[#21ffd624] blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[188px] h-[233px] bg-[#21ffd624] blur-[100px]" />
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="flex flex-col items-center gap-[76px]">
              <div className="flex flex-col w-[666px] max-w-full items-center gap-6">
                <p className="text-zinc-400 text-base text-center [font-family:'Lexend',Helvetica] font-light">
                  We're building the future of knowledge-driven NFTs
                </p>
              </div>

              <div className="relative w-full max-w-[1242px] h-[858px]">
                {/* Connecting lines */}
                <img
                  className="absolute w-[199px] h-[17px] top-[124px] left-1/2 transform -translate-x-1/2"
                  alt="Line"
                  src="https://c.animaapp.com/mf0iy424DKI2iI/img/line-16.svg"
                />
                <img
                  className="absolute w-[199px] h-[17px] top-[636px] left-1/2 transform -translate-x-1/2"
                  alt="Line"
                  src="https://c.animaapp.com/mf0iy424DKI2iI/img/line-18.svg"
                />
                <img
                  className="absolute w-[17px] h-[199px] top-[334px] right-[87px]"
                  alt="Line"
                  src="https://c.animaapp.com/mf0iy424DKI2iI/img/line-17.svg"
                />

                {/* Central icon */}
                <img
                  className="absolute w-[228px] h-[228px] top-[294px] left-1/2 transform -translate-x-1/2"
                  alt="Glasses"
                  src="https://c.animaapp.com/mf0iy424DKI2iI/img/glasses.svg"
                />

                {/* Roadmap phase cards */}
                {roadmapPhases.map((phase, index) => (
                  <Card
                    key={index}
                    className={`translate-y-[-1rem] animate-fade-in opacity-0 absolute ${phase.position} w-[332px] bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:linear-gradient(180deg,rgba(73,44,244,1)_0%,rgba(32,246,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
                    style={{ "--animation-delay": `${800 + index * 200}ms` }}
                  >
                    <CardContent className="flex flex-col items-center gap-[27px] px-0 py-7">
                      <div className="relative w-[68px] h-[66px]">
                        <div className="relative w-[66px] h-[66px] left-px rounded-[33px] bg-[linear-gradient(180deg,rgba(55,55,206,1)_0%,rgba(35,121,188,1)_100%)]">
                          <img
                            className="absolute w-[50px] h-[50px] top-2 left-2 object-cover"
                            alt="Element"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-[296px] items-center justify-center gap-2.5">
                        <div className="text-[#20f7a7] text-[15px] text-center [font-family:'Lexend',Helvetica] font-medium">
                          {phase.phase}
                        </div>
                        <div className="text-white text-xl text-center [font-family:'Poller_One',Helvetica] font-normal">
                          {phase.title}
                        </div>
                        <div className="text-zinc-400 text-sm text-center [font-family:'Lexend',Helvetica] font-normal">
                          {phase.description}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-[188px] h-[233px] bg-[#21ffd624] blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[188px] h-[233px] bg-[#21ffd624] blur-[100px]" />
          <img
            className="absolute w-[90px] h-[148px] top-[35px] right-0"
            alt="Highlight"
            src="https://c.animaapp.com/mf0iy424DKI2iI/img/highlight-12.svg"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[1248px]">
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-[30px]"
                >
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="flex w-full h-28 items-center justify-between p-[30px] rounded-[33px] border-t border-b border-[#e9eeee80] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        <span className="text-[#e6e6e6] text-[28px] text-center [font-family:'Lexend',Helvetica] font-normal">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        {/* Content would be added here when expanded */}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Decorative blur elements */}
          <div className="absolute top-0 left-0 bg-[#332b81] w-[188px] h-[233px] blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[188px] h-[233px] bg-[#21ffd624] blur-[100px]" />
        </div>
      </div>

      {/* Footer Image */}
      <img className="w-full h-[354px] object-cover" alt="Frame" />

      {/* Footer Section */}
      <footer className="relative w-full h-[188px]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <div className="inline-flex items-center gap-[188px] absolute top-[61px] left-20">
            <img className="w-44 h-[42px]" alt="Chatgpt image aug" />

            <div className="inline-flex items-center gap-[35px]">
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className={`text-white text-xs [font-family:'Space_Grotesk',Helvetica] font-normal leading-[67px] whitespace-nowrap ${link.underline ? "underline" : ""}`}
                >
                  {link.text}
                </div>
              ))}
            </div>

            <div className="inline-flex items-start gap-[25px]">
              <div className="relative w-6 h-6 bg-[url(https://c.animaapp.com/mf0iy424DKI2iI/img/vector.svg)] bg-[100%_100%]">
                <div className="relative w-3.5 h-3.5 top-1 left-1.5">
                  <img
                    className="absolute w-3 h-3 top-0.5 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mf0iy424DKI2iI/img/vector-9.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-0 left-[11px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mf0iy424DKI2iI/img/vector-2.svg"
                  />
                </div>
              </div>
              <img
                className="w-6 h-[22px]"
                alt="Vector"
                src="https://c.animaapp.com/mf0iy424DKI2iI/img/vector-8.svg"
              />
              <img
                className="w-6 h-6"
                alt="Vector"
                src="https://c.animaapp.com/mf0iy424DKI2iI/img/vector-7.svg"
              />
              <img
                className="w-[34px] h-6"
                alt="Vector"
                src="https://c.animaapp.com/mf0iy424DKI2iI/img/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

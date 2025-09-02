import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MacbookProSubsection = (): JSX.Element => {
  const nftCards = [
    {
      title: "!1914 0G Collection",
      id: "#3454",
      price: "3000",
      rotation: "rotate-[-14.24deg]",
      marginLeft: "",
      avatarRotation: "rotate-[14.24deg]",
      priceRotation: "rotate-[0.24deg]",
      newBadgeRotation: "rotate-[0.24deg]",
      newBadgePosition: "top-3 left-[11px]",
      priceIconRotation: "rotate-[14deg]",
    },
    {
      title: "Mediaplot Collectionn",
      id: "#3454",
      price: "3000",
      rotation: "",
      marginLeft: "ml-[-107px]",
      avatarRotation: "",
      priceRotation: "",
      newBadgeRotation: "",
      newBadgePosition: "top-2.5 left-[13px]",
      priceIconRotation: "",
    },
    {
      title: "Casafiere Friends",
      id: "#3454",
      price: "5000",
      rotation: "rotate-[14.24deg]",
      marginLeft: "ml-[-107px]",
      avatarRotation: "rotate-[-14.24deg]",
      priceRotation: "rotate-[-0.24deg]",
      newBadgeRotation: "rotate-[-0.24deg]",
      newBadgePosition: "top-[9px] left-3",
      priceIconRotation: "rotate-[-14deg]",
    },
  ];

  const navigationItems = [
    { label: "Home" },
    { label: "Explore" },
    { label: "About" },
    { label: "How it works" },
  ];

  const trustedByLogos = [
    { width: "w-[285px]", height: "h-[59px]", alt: "Base BRIDGE" },
    { width: "w-[204px]", height: "h-[63px]", alt: "Img" },
    { width: "w-52", height: "h-10", alt: "Img" },
    {
      width: "w-[226px]",
      height: "h-[64.29px]",
      alt: "Img",
      marginRight: "mr-[-1.00px]",
    },
  ];

  return (
    <section className="relative w-full h-[1326px] [background:url(https://c.animaapp.com/mf0iy424DKI2iI/img/macbook-pro-14----2.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_100%_6%,rgba(73,44,245,0.2)_13%,rgba(0,0,0,0)_100%),linear-gradient(180deg,rgba(14,15,20,1)_0%,rgba(21,22,33,1)_100%)]">
      <div className="relative w-full h-[787px] top-[489px] px-[67px]">
        <img
          className="absolute w-[180px] h-[180px] top-[300px] right-[180px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] hover:scale-110 transition-transform duration-500 animate-float-reverse"
          alt="Cube"
          src="https://c.animaapp.com/mf0iy424DKI2iI/img/cube.svg"
        />

        <img
          className="absolute w-[180px] h-[180px] top-[40px] left-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] hover:scale-110 transition-transform duration-500 animate-float"
          alt="Cube"
          src="https://c.animaapp.com/mf0iy424DKI2iI/img/cube.svg"
        />

        <div className="flex items-center justify-center absolute top-0 left-[200px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {nftCards.map((card, index) => (
            <Card
              key={index}
              className={`relative w-[300px] h-[400px] ${card.marginLeft} bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] ${card.rotation} shadow-[0px_4px_16px_#00000040] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:linear-gradient(214deg,rgba(74,44,245,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105 hover:shadow-[0px_8px_32px_#4a2cf540] transition-all duration-500 hover:z-10 animate-card-float`}
              style={
                {
                  "--animation-delay": `${index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-0 h-full">
                <div className="absolute w-[260px] h-[260px] top-[45px] left-[20px] rounded-[33px] overflow-hidden bg-cover bg-[50%_50%]">
                  <div
                    className={`inline-flex items-start gap-2.5 p-2 relative ${card.newBadgePosition} bg-[#afafaf4c] rounded-[25px] overflow-hidden ${card.newBadgeRotation} backdrop-blur-[6.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.85px)_brightness(100%)] hover:bg-[#20f7a740] transition-colors duration-300 animate-pulse-subtle`}
                  >
                    <div className="relative w-[28px] h-[16px] mt-[-1.00px] [font-family:'Lexend',Helvetica] font-extralight text-white text-xs tracking-[0] leading-[normal]">
                      New
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-[3px] absolute top-[320px] left-[30px]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-[#20f7a7] transition-colors duration-300">
                    {card.title}
                  </div>
                  <div className="relative self-stretch [font-family:'Lexend',Helvetica] font-extralight text-white text-xs tracking-[0] leading-[normal] opacity-70">
                    {card.id}
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[12px] absolute top-3 left-[20px]">
                  <img
                    className={`relative w-[30px] h-[30px] ${card.avatarRotation} object-cover hover:scale-110 transition-transform duration-300 animate-pulse-ring`}
                    alt="Ellipse"
                  />
                  <div className="flex flex-col w-[70px] items-start gap-[2px] relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal]">
                      Zappier Tariq
                    </div>
                    <div className="relative self-stretch [font-family:'Lexend',Helvetica] font-extralight text-white text-[8px] tracking-[0] leading-[normal] opacity-70">
                      Creator
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-start gap-2 px-2 py-[4px] absolute ${index === 0 ? "top-[350px] left-[220px]" : index === 1 ? "top-[355px] left-[225px]" : "top-[352px] left-[222px]"} bg-[#afafaf4c] rounded-[25px] overflow-hidden ${card.priceRotation} backdrop-blur-[6.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.85px)_brightness(100%)] hover:bg-[#4a2cf540] hover:scale-105 transition-all duration-300`}
                >
                  <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
                    <div className="relative w-[28px] h-[16px] mt-[-1.00px] [font-family:'Lexend',Helvetica] font-extralight text-white text-xs tracking-[0] leading-[normal]">
                      {card.price}
                    </div>
                    <img
                      className={`relative w-[14px] h-[14px] ${card.priceIconRotation} object-cover hover:rotate-180 transition-transform duration-500`}
                      alt="Ellipse"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col w-full items-center gap-[40px] absolute top-[520px] left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="relative self-stretch h-5 mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-[#ededed] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-white transition-colors duration-500">
            Trusted by
          </div>

          <div className="flex w-[1000px] items-center justify-center gap-16 relative flex-[0_0_auto]">
            {trustedByLogos.map((logo, index) => (
              <img
                key={index}
                className={`relative w-[200px] h-[40px] ${logo.marginRight || ""} object-cover hover:scale-110 transition-all duration-500 opacity-70 hover:opacity-100 animate-fade-in-up`}
                style={
                  {
                    "--animation-delay": `${1200 + index * 100}ms`,
                  } as React.CSSProperties
                }
                alt={logo.alt}
              />
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-4 absolute top-[320px] left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="relative w-[60px] h-[200px] bg-[#32323766] rounded-[25px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[25px] before:[background:linear-gradient(197deg,rgba(73,48,243,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105 transition-transform duration-500 animate-float" />
          <div className="relative w-[50px] h-8 bg-[#32323766] rounded-[12px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[12px] before:[background:linear-gradient(251deg,rgba(36,193,160,1)_0%,rgba(70,60,238,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-110 transition-transform duration-500 animate-pulse-glow" />
        </div>

        <div className="inline-flex items-center gap-4 absolute top-[320px] right-[50px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="relative w-[50px] h-8 bg-[#32323766] rounded-[12px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[12px] before:[background:linear-gradient(251deg,rgba(36,193,160,1)_0%,rgba(70,60,238,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-110 transition-transform duration-500 animate-pulse-glow" />
          <div className="relative w-[60px] h-[200px] bg-[#32323766] rounded-[25px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[25px] before:[background:linear-gradient(197deg,rgba(73,48,243,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105 transition-transform duration-500 animate-float-reverse" />
        </div>

        <img
          className="absolute w-[127px] h-[127px] top-[30px] right-[218px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          alt="Freepik a vibrant"
        />
      </div>

      <nav className="inline-flex items-center gap-[100px] absolute top-[50px] left-[50px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img className="relative w-36 h-[34px] hover:scale-105 transition-transform duration-300" alt="Chatgpt image aug" />

        <div className="relative w-[500px] h-[60px] bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] backdrop-blur-[10px] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:linear-gradient(66deg,rgba(74,44,245,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-[1.02] transition-transform duration-300">
          <div className="inline-flex items-center justify-center gap-[60px] relative top-[18px] left-[40px] right-[40px] w-[420px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] cursor-pointer hover:text-[#20f7a7] transition-all duration-300 hover:scale-110 hover:glow"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <Button className="h-auto inline-flex items-center gap-2 px-[20px] py-[12px] relative flex-[0_0_auto] rounded-[30px] overflow-hidden shadow-[0px_0px_12px_#4a2cf5cc] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(0deg,rgba(74,44,245,1)_0%,rgba(74,44,245,1)_100%)] hover:shadow-[0px_0px_20px_#4a2cf5dd] transition-all duration-300 hover:scale-105 hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(74,44,245,1)_0%,rgba(32,247,167,0.3)_100%)] animate-pulse-glow">
          <div className="relative w-fit [font-family:'Lexend',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
            Connect Wallet
          </div>
        </Button>
      </nav>


      <header className="absolute w-[1000px] h-[220px] top-[140px] left-[150px]">
        <div className="flex flex-col w-[900px] items-center gap-[30px] absolute top-[20px] left-[50px]">
          <div className="relative self-stretch h-5 mt-[-1.00px] [font-family:'Lexend',Helvetica] font-light text-zinc-400 text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] hover:text-white transition-colors duration-500">
            Reinventing the NFT Experience
          </div>

          <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-[25px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-white text-[52px] tracking-[0.52px] leading-[normal] whitespace-nowrap hover:scale-105 transition-transform duration-500 animate-pulse-glow">
                Mint With
              </div>

              <div className="relative w-[180px] h-[55px] rounded-[33px] bg-[url(https://c.animaapp.com/mf0iy424DKI2iI/img/frame-48096403.svg)] bg-cover bg-[50%_50%] hover:scale-110 transition-transform duration-500 animate-float" />

              <div className="relative w-fit mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-white text-[52px] tracking-[0.52px] leading-[normal] whitespace-nowrap hover:scale-105 transition-transform duration-500 animate-pulse-glow">
                Knowledge,
              </div>
            </div>

            <div className="relative self-stretch [font-family:'Poller_One',Helvetica] font-normal text-transparent text-[52px] text-center leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <span className="text-white tracking-[0] hover:scale-105 transition-transform duration-500 inline-block animate-text-shimmer">Own</span>
              <span className="text-[#20f7a7] tracking-[0] hover:scale-105 transition-transform duration-500 inline-block animate-text-glow"> Smarter.</span>
            </div>
          </div>
        </div>

        <img
          className="w-20 h-20 top-0 left-0 absolute object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] hover:scale-110 transition-transform duration-300 animate-spin-slow"
          alt="Sergey knyazev"
        />
      </header>
    </section>
  );
};

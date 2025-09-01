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
          className="absolute w-[239px] h-[239px] top-[340px] right-[201px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          alt="Cube"
          src="https://c.animaapp.com/mf0iy424DKI2iI/img/cube.svg"
        />

        <img
          className="absolute w-[239px] h-[239px] top-[47px] left-[131px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          alt="Cube"
          src="https://c.animaapp.com/mf0iy424DKI2iI/img/cube.svg"
        />

        <div className="flex items-center justify-center absolute top-0 left-[150px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {nftCards.map((card, index) => (
            <Card
              key={index}
              className={`relative w-[360px] h-[480px] ${card.marginLeft} bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] ${card.rotation} shadow-[0px_4px_16px_#00000040] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:linear-gradient(214deg,rgba(74,44,245,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <CardContent className="p-0 h-full">
                <div className="absolute w-[314px] h-[308px] top-[57px] left-[23px] rounded-[33px] overflow-hidden bg-cover bg-[50%_50%]">
                  <div
                    className={`inline-flex items-start gap-2.5 p-2.5 relative ${card.newBadgePosition} bg-[#afafaf4c] rounded-[33px] overflow-hidden ${card.newBadgeRotation} backdrop-blur-[6.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.85px)_brightness(100%)]`}
                  >
                    <div className="relative w-[33px] h-[18px] mt-[-1.00px] [font-family:'Lexend',Helvetica] font-extralight text-white text-sm tracking-[0] leading-[normal]">
                      New
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-[3px] absolute top-[387px] left-[41px]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                    {card.title}
                  </div>
                  <div className="relative self-stretch [font-family:'Lexend',Helvetica] font-extralight text-white text-sm tracking-[0] leading-[normal]">
                    {card.id}
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[15px] absolute top-3.5 left-[23px]">
                  <img
                    className={`relative w-[36.01px] h-[36.01px] ${card.avatarRotation} object-cover`}
                    alt="Ellipse"
                  />
                  <div className="flex flex-col w-[81px] items-start gap-[3px] relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                      Zappier Tariq
                    </div>
                    <div className="relative self-stretch [font-family:'Lexend',Helvetica] font-extralight text-white text-[10px] tracking-[0] leading-[normal]">
                      Creator
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-start gap-2.5 px-2.5 py-[5px] absolute ${index === 0 ? "top-[415px] left-[263px]" : index === 1 ? "top-[428px] left-[270px]" : "top-[424px] left-[266px]"} bg-[#afafaf4c] rounded-[33px] overflow-hidden ${card.priceRotation} backdrop-blur-[6.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.85px)_brightness(100%)]`}
                >
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[34px] h-[18px] mt-[-1.00px] [font-family:'Lexend',Helvetica] font-extralight text-white text-sm tracking-[0] leading-[normal]">
                      {card.price}
                    </div>
                    <img
                      className={`relative w-[18px] h-[18px] ${card.priceIconRotation} object-cover`}
                      alt="Ellipse"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col w-full items-center gap-[62px] absolute top-[641px] left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="relative self-stretch h-5 mt-[-1.00px] [font-family:'Poller_One',Helvetica] font-normal text-[#ededed] text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Trusted by
          </div>

          <div className="flex w-[1258px] items-center gap-28 relative flex-[0_0_auto]">
            {trustedByLogos.map((logo, index) => (
              <img
                key={index}
                className={`relative ${logo.width} ${logo.height} ${logo.marginRight || ""} object-cover`}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-5 absolute top-[380px] left-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="relative w-[81px] h-[274px] bg-[#32323766] rounded-[33px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[33px] before:[background:linear-gradient(197deg,rgba(73,48,243,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
          <div className="relative w-[68px] h-10 bg-[#32323766] rounded-[15px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[15px] before:[background:linear-gradient(251deg,rgba(36,193,160,1)_0%,rgba(70,60,238,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
        </div>

        <div className="inline-flex items-center gap-5 absolute top-[380px] right-[70px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="relative w-[68px] h-10 bg-[#32323766] rounded-[15px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[15px] before:[background:linear-gradient(251deg,rgba(36,193,160,1)_0%,rgba(70,60,238,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
          <div className="relative w-[81px] h-[274px] bg-[#32323766] rounded-[33px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[33px] before:[background:linear-gradient(197deg,rgba(73,48,243,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
        </div>

        <img
          className="absolute w-[127px] h-[127px] top-[30px] right-[218px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          alt="Freepik a vibrant"
        />
      </div>

      <nav className="inline-flex items-center gap-[156px] absolute top-[65px] left-[70px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img className="relative w-44 h-[42px]" alt="Chatgpt image aug" />

        <div className="relative w-[687px] h-[74px] bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:linear-gradient(66deg,rgba(74,44,245,1)_0%,rgba(32,247,167,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="inline-flex items-center gap-[106px] relative top-7 left-[58px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#20f7a7] transition-colors"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <Button className="h-auto inline-flex items-start gap-2.5 px-[27px] py-[24.5px] relative flex-[0_0_auto] rounded-[33px] overflow-hidden shadow-[0px_0px_12px_#4a2cf5cc] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(0deg,rgba(74,44,245,1)_0%,rgba(74,44,245,1)_100%)] hover:shadow-[0px_0px_16px_#4a2cf5dd] transition-[transform,box-shadow] hover:scale-105">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            Connect wallet
          </div>
        </Button>
      </nav>

      <header className="absolute w-[1219px] h-[272px] top-[169px] left-[99px]">
        <div className="flex flex-col w-[1123px] items-center gap-[38px] absolute top-[34px] left-24">
          <div className="relative self-stretch h-5 mt-[-1.00px] [font-family:'Lexend',Helvetica] font-light text-zinc-400 text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Reinventing the NFT Experience
          </div>

          <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-[33px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="relative w-fit mt-[-1.00px] ml-[-9.50px] [font-family:'Poller_One',Helvetica] font-normal text-white text-[64px] tracking-[0.64px] leading-[normal] whitespace-nowrap">
                Mint With
              </div>

              <div className="relative w-[217px] h-[67px] rounded-[33px] bg-[url(https://c.animaapp.com/mf0iy424DKI2iI/img/frame-48096403.svg)] bg-cover bg-[50%_50%]" />

              <div className="relative w-fit mt-[-1.00px] mr-[-9.50px] [font-family:'Poller_One',Helvetica] font-normal text-white text-[64px] tracking-[0.64px] leading-[normal] whitespace-nowrap">
                Knowledge,
              </div>
            </div>

            <div className="relative self-stretch [font-family:'Poller_One',Helvetica] font-normal text-transparent text-[64px] text-center leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <span className="text-white tracking-[0]">Own</span>
              <span className="text-[#20f7a7] tracking-[0]"> Smarter.</span>
            </div>
          </div>
        </div>

        <img
          className="w-28 h-28 top-0 left-0 absolute object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          alt="Sergey knyazev"
        />
      </header>
    </section>
  );
};

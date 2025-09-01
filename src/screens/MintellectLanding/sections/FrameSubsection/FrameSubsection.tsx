import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
  const stepCards = [
    {
      id: 1,
      step: "Step 1",
      title: "Explore Collections",
      description: "Discover unique NFT collections and choose your favorite.",
      className: "w-[753px] h-[253px] top-0 left-0",
      gradientBorder:
        "linear-gradient(250deg,rgba(32,247,167,1)_0%,rgba(71,56,239,1)_100%)",
      content: (
        <div className="absolute w-[297px] h-[248px] top-[5px] left-[55px]">
          <img
            className="absolute w-[297px] h-[231px] top-[17px] left-0"
            alt="Group"
          />
          <img
            className="absolute w-[33px] h-[33px] top-[187px] left-[243px] object-cover"
            alt="Sergey knyazev"
          />
          <img
            className="w-[33px] h-[33px] top-[54px] left-[203px] absolute object-cover"
            alt="Sergey knyazev"
          />
          <img
            className="w-[33px] h-[33px] top-[71px] left-[81px] absolute object-cover"
            alt="Sergey knyazev"
          />
          <img
            className="w-[33px] h-[33px] top-[148px] left-3 absolute object-cover"
            alt="Sergey knyazev"
          />
          <img
            className="w-[33px] h-[33px] top-0 left-[113px] absolute object-cover"
            alt="Sergey knyazev"
          />
          <img
            className="w-[33px] h-[33px] top-[207px] left-10 absolute object-cover"
            alt="Sergey knyazev"
          />
        </div>
      ),
      textPosition: "top-[77px] left-[418px]",
    },
    {
      id: 2,
      step: "Step 2",
      title: "Learn About the Project",
      description:
        "Get key insights about the collection or general Web3 knowledge.",
      className: "w-[600px] h-[253px] top-0 left-[778px]",
      gradientBorder:
        "linear-gradient(123deg,rgba(31,246,166,1)_0%,rgba(71,56,239,1)_100%)",
      content: (
        <>
          <div className="absolute w-[347px] h-60 top-0 left-[253px]">
            <div className="absolute w-[302px] h-[189px] top-[51px] left-[17px]">
              <img
                className="absolute w-[100px] h-[100px] top-0 left-[118px] object-cover"
                alt="Ellipse"
              />
            </div>
            <img
              className="absolute w-[78px] h-[100px] top-0 left-[269px] object-cover"
              alt="Ellipse"
            />
            <img
              className="absolute w-[100px] h-[87px] top-0 left-0 object-cover"
              alt="Ellipse"
            />
          </div>
          <img
            className="absolute w-[84px] h-[100px] top-4 left-0 object-cover"
            alt="Ellipse"
          />
          <div className="absolute w-28 h-28 top-[58px] left-[111px]">
            <div className="relative h-28 rounded-[56px]">
              <img
                className="absolute w-[100px] h-[100px] top-1.5 left-1.5 object-cover"
                alt="Ellipse"
              />
              <div className="absolute w-28 h-28 top-0 left-0 rounded-[56px] border border-solid border-[#948cab]" />
            </div>
          </div>
        </>
      ),
      textPosition: "top-[141px] left-[270px]",
    },
    {
      id: 3,
      step: "Step 3",
      title: "Complete a Quick Quiz",
      description: "Answer a few questions to show what you've learned.",
      className: "w-[417px] h-[253px] top-[278px] left-0",
      gradientBorder:
        "linear-gradient(73deg,rgba(40,210,182,1)_0%,rgba(71,56,239,1)_100%)",
      content: (
        <div className="absolute w-60 h-[66px] top-10 left-[136px] bg-[#01a083] rounded-[33px] shadow-[0px_0px_16px_#34bea5]">
          <div className="absolute top-[13px] left-[42px] [font-family:'Poller_One',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            1 + 1 = 11
          </div>
        </div>
      ),
      textPosition: "top-[127px] left-[34px]",
    },
    {
      id: 4,
      step: "Step 4",
      title: "Mint Your NFT Securely",
      description: "Unlock access and mint your NFT directly on EduChain.",
      className: "w-[937px] h-[253px] top-[278px] left-[441px]",
      gradientBorder:
        "linear-gradient(46deg,rgba(33,248,168,1)_0%,rgba(71,56,239,1)_100%)",
      content: (
        <>
          <div className="inline-flex items-center gap-5 absolute top-[19px] left-[145px]">
            <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
              <img
                className="relative w-[68px] h-[68px] object-cover"
                alt="Ellipse"
              />
              <div className="flex flex-col w-[68px] items-start gap-20 relative">
                <img
                  className="relative self-stretch w-full h-[68px] object-cover"
                  alt="Ellipse"
                />
                <img
                  className="relative self-stretch w-full h-[68px] object-cover"
                  alt="Ellipse"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
              <div className="flex flex-col w-[68px] items-start gap-20 relative">
                <img
                  className="relative self-stretch w-full h-[68px] object-cover"
                  alt="Ellipse"
                />
                <img
                  className="relative self-stretch w-full h-[68px] object-cover"
                  alt="Ellipse"
                />
              </div>
              <img
                className="relative w-[68px] h-[68px] object-cover"
                alt="Ellipse"
              />
            </div>
          </div>
          <div className="absolute w-[126px] h-[200px] top-[53px] left-0 bg-[url(https://c.animaapp.com/mf0iy424DKI2iI/img/ellipse-72.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[97px] h-[195px] top-[5px] left-0"
              alt="Ellipse"
              src="https://c.animaapp.com/mf0iy424DKI2iI/img/ellipse-72.svg"
            />
            <img
              className="absolute w-[63px] h-[186px] top-3.5 left-0"
              alt="Ellipse"
              src="https://c.animaapp.com/mf0iy424DKI2iI/img/ellipse-72.svg"
            />
          </div>
          <div className="absolute w-[118px] h-[180px] top-0 left-[819px] bg-[url(https://c.animaapp.com/mf0iy424DKI2iI/img/ellipse-72.svg)] bg-[100%_100%]">
            <img
              className="absolute w-24 h-[173px] top-0 left-[22px]"
              alt="Ellipse"
              src="https://c.animaapp.com/mf0iy424DKI2iI/img/ellipse-72.svg"
            />
          </div>
        </>
      ),
      textPosition: "top-[77px] left-[418px]",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden [background:radial-gradient(50%_50%_at_50%_4%,rgba(73,44,245,0.16)_13%,rgba(66,49,49,0)_100%),linear-gradient(180deg,rgba(14,15,20,1)_0%,rgba(21,22,33,1)_100%)] py-[30px]">
      <div className="relative w-full max-w-[1449px] mx-auto px-[67px]">
        <div className="flex flex-col items-center gap-[21px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <header className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col w-[881px] h-[103px] items-center gap-6 relative">
              <h2 className="relative self-stretch h-5 mt-[-1.00px] [font-family:'Lexend',Helvetica] font-light text-zinc-400 text-base text-center tracking-[0] leading-[normal]">
                How Mintellect Works
              </h2>
            </div>

            <Button className="inline-flex items-start gap-2.5 px-[27px] py-[24.5px] relative flex-[0_0_auto] rounded-[33px] overflow-hidden shadow-[0px_0px_12px_#4a2cf5cc] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(0deg,rgba(74,44,245,1)_0%,rgba(74,44,245,1)_100%)] h-auto hover:shadow-[0px_0px_16px_#4a2cf5cc] transition-shadow">
              <span className="w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] relative font-normal text-white text-xl tracking-[0] leading-[normal]">
                Explore Marketplace
              </span>
            </Button>
          </header>

          <div className="relative w-full h-[654px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="relative w-[1379px] h-[531px] top-[75px]">
              <div className="absolute w-[1378px] h-[531px] top-0 left-px">
                <div className="absolute w-[267px] h-[267px] top-[252px] left-[663px] bg-cover bg-[50%_50%]">
                  <div className="relative h-[267px]">
                    <img
                      className="absolute w-[185px] h-[199px] top-[27px] left-9"
                      alt="Color"
                      src="https://c.animaapp.com/mf0iy424DKI2iI/img/color.svg"
                    />
                    <div className="absolute w-[267px] h-[267px] top-0 left-0 bg-cover bg-[50%_50%]">
                      <img
                        className="absolute w-[267px] h-[267px] top-0 left-0 object-cover"
                        alt="Lights"
                      />
                    </div>
                  </div>
                </div>

                {stepCards.map((card, index) => (
                  <Card
                    key={card.id}
                    className={`absolute ${card.className} bg-[#3131364c] rounded-[33px] overflow-hidden border-[none] shadow-[0px_4px_16px_#00000040] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[33px] before:[background:${card.gradientBorder}] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0`}
                    style={
                      {
                        "--animation-delay": `${600 + index * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="relative w-full h-full p-0">
                      {card.content}

                      <div
                        className={`absolute ${card.textPosition} flex flex-col w-[302px] items-start gap-2.5`}
                      >
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-medium text-[#20f7a7] text-[15px] tracking-[0] leading-[normal]">
                          {card.step}
                        </div>
                        <h3 className="self-stretch [font-family:'Poller_One',Helvetica] relative font-normal text-white text-xl tracking-[0] leading-[normal]">
                          {card.title}
                        </h3>
                        <p className="relative self-stretch [font-family:'Lexend',Helvetica] font-normal text-zinc-400 text-sm tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="top-[834px] left-[1261px] bg-[#21ffd624] absolute w-[188px] h-[233px] blur-[100px]" />

        <img
          className="absolute w-[136px] h-[136px] top-0 left-[1150px]"
          alt="Glasses"
        />

        <img
          className="absolute w-[130px] h-[130px] top-[105px] left-[385px]"
          alt="Arrow"
          src="https://c.animaapp.com/mf0iy424DKI2iI/img/arrow-08.svg"
        />
      </div>
    </section>
  );
};

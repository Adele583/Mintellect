import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { MacbookProSubsection } from "./sections/MacbookProSubsection/MacbookProSubsection";

export const MintellectLanding = (): JSX.Element => {
  return (
    <div
      className="bg-[#0d0e12] flex flex-col items-center w-full min-h-screen"
      data-model-id="163:10"
    >
      <div className="bg-[#0d0e12] w-full max-w-[1512px] flex flex-col">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <MacbookProSubsection />
        </div>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <FrameSubsection />
        </div>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <FrameWrapperSubsection />
        </div>
      </div>
    </div>
  );
};

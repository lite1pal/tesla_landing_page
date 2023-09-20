"use client";

import Navbar from "@/components/navbar";
import { UIEventHandler, useEffect, useRef, useState } from "react";

function AbsoluteComponent({ isDarkText }: { isDarkText: boolean }) {
  return (
    <div className="pointer-events-none fixed z-10 flex h-screen w-full flex-col gap-5 pb-3">
      <Navbar isDarkText={isDarkText} />
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl font-semibold">Model 3</div>
          <div className="text-lg">From $29,740*</div>
          <div className="text-xs">
            After Federal Tax Credit & Est. Gas Savings
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="pointer-events-auto flex w-full flex-col items-center justify-center gap-6 md:flex-row">
            <button
              className={`w-10/12 rounded bg-white px-5 py-2 text-black transition hover:bg-opacity-80 md:w-64`}
            >
              Order Now
            </button>
            <button className="w-10/12 rounded bg-slate-800 bg-opacity-70 px-5 py-2 text-slate-200 transition hover:bg-opacity-40 md:w-64">
              Demo Drive
            </button>
          </div>
          <div className="text-center text-sm font-extralight text-slate-300">
            *Price before incentives and savings is $40,240, excluding taxes and
            fees. Subject to change.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Elements refs
  const model3Ref = useRef(null);
  const modelYRef = useRef(null);
  const modelSRef = useRef(null);
  const modelXRef = useRef(null);

  const [currentModel, setCurrentModel] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);

  // returns true if an element is in the viewport
  const IsVisibleInViewport = (el: Element, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;

    const rect = el.getBoundingClientRect();
    console.log(rect);

    return top < window.innerHeight;
  };

  // listens for scrolling
  const listenScroll = () => {
    console.log("| ELEMENTS |");
    if (model3Ref && IsVisibleInViewport(model3Ref.current!)) {
      setIsDarkText(true);
    }
    if (modelSRef && IsVisibleInViewport(modelSRef.current!)) {
      setIsDarkText(false);
    }
    if (modelYRef && IsVisibleInViewport(modelYRef.current!)) {
      setIsDarkText(true);
    }
    if (modelXRef && IsVisibleInViewport(modelXRef.current!)) {
      setIsDarkText(false);
    }
    console.log("| END |");
  };

  useEffect(() => {
    listenScroll();
  }, []);

  return (
    <main
      onScroll={listenScroll}
      className={`${
        isDarkText && "text-black"
      } relative top-0 h-screen snap-y snap-mandatory overflow-scroll scroll-smooth transition duration-1000`}
    >
      <AbsoluteComponent isDarkText={isDarkText} />

      <div
        id="model-3"
        ref={model3Ref}
        className={`monitor-element h-screen w-screen snap-start snap-always bg-[url('/tesla-gallery-model-s/ModelS_69.jpg')] bg-cover bg-center text-white`}
      ></div>
      <div
        id="model-s"
        ref={modelSRef}
        className="monitor-element h-screen snap-start snap-always bg-[url('/tesla-gallery-model-s/ModelS_71.jpg')] bg-cover bg-center"
      ></div>
      <div
        id="model-y"
        ref={modelYRef}
        className="monitor-element h-screen snap-start snap-always bg-[url('/tesla-gallery-model-s/ModelS_70.jpg')] bg-cover bg-center"
      ></div>
      <div
        id="model-x"
        ref={modelXRef}
        className="monitor-element h-screen snap-start snap-always bg-[url('/tesla-gallery-model-s/ModelS_72.jpg')] bg-cover bg-center"
      ></div>
    </main>
  );
}

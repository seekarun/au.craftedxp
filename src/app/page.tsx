"use client";

import { useEffect } from "react";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://proj-cally.vercel.app/embed.js";
    script.setAttribute("data-tenant-id", "uIUD5iirVfgH");
    script.setAttribute("data-widget", "booking");
    script.setAttribute("data-mode", "popup");
    document.body.appendChild(script);
    return () => {
      script.remove();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).CallyEmbed = undefined;
    };
  }, []);

  return (
    <div className="min-h-full w-full flex items-center justify-center bg-white">
      <Image
        src="/craftedXP.png"
        alt="Crafted XP"
        width={200}
        height={200}
        priority
      />
    </div>
  );
};

export default Home;

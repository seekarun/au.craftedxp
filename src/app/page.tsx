import Image from "next/image";
import Script from "next/script";

const Home = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-white">
      <Image
        src="/craftedXP.png"
        alt="Crafted XP"
        width={200}
        height={200}
        priority
      />
      <Script
        src="https://proj-cally.vercel.app/embed.js"
        data-tenant-id="uIUD5iirVfgH"
        data-widget="contact"
        data-mode="popup"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default Home;

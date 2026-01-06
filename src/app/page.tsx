import Image from "next/image";

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
    </div>
  );
};

export default Home;

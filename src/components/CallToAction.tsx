import helixImage from "@/assets/images/helix2.png";
import emojiStartImage from "@/assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] text-center">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt=""
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={emojiStartImage}
          alt=""
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

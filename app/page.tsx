import ArrowRightIcon from "@/public/icons/ontactus_gengduo.svg";
import ServiceCard from "./ServiceCard";
import { HeroChat } from "./HeroChat";
import CodePrinter from "./CodePrinter";

export default function Home() {
  return (
    <main className="">
      <section className="relative mb-[110px] flex flex-col items-center pb-32 pt-[178px]">
        <div className="absolute inset-0">
          <video
            src="/videos/hero_bg.mp4"
            playsInline
            muted
            autoPlay
            className="w-full"
          />
        </div>
        <div className="w-[742px] flex flex-col items-center z-10 mb-[70px]">
          <h1 className="text-[58px] font-semibold mb-[40px] leading-[67px] space-x-5">
            <span className="animate-fade-right-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
              Your Dream
            </span>
            <span className="animate-fade-left-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
              Our Mission
            </span>
            <span className="animate-fade-right-150 animate-delay-300 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
              Our Work
            </span>
            <span className="text-[#1F9D55] animate-delay-300 animate-fade-left-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
              AI-Enhanced
            </span>
          </h1>
          <div className="text-[#888A89] mb-[60px] text-center text-xl leading-[38px] whitespace-pre">
            <p className="animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-300 animate-fill-forwards opacity-0">
              Transforming your ideas into reality—from concept to launch,
            </p>
            <p className="animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[800ms] animate-fill-forwards opacity-0">
              we leverage cutting-edge AI technology to ensure precision at
              every step
            </p>
          </div>
          <button className="bg-[#1F9D55] py-[20px] px-[67px] rounded-[10px] text-white font-semibold flex items-center animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[1100ms] opacity-0 animate-fill-forwards hover:bg-[#373C39]">
            Contact Us
            <ArrowRightIcon className="ml-1.5" />
          </button>
        </div>
        <div className="flex z-10">
          <HeroChat />
          <CodePrinter />
        </div>
      </section>
      <section className="container mx-auto" id="our-service">
        <h3 className="font-bold text-[34px] text-center mb-[30px]">
          Our Service
        </h3>
        <p className="text-[#6F6F6F] text-center mb-[64px]">
          boosting efficiency and shortening project timelines
          This not only ensures delivery
        </p>
        <div className="grid grid-cols-2 gap-[50px]">
          <div className="grid gap-[50px]">
            <ServiceCard
              title={
                <h4>
                  <span className="text-[#1F9D55]">Website</span> Design
                </h4>
              }
              description="boosting efficiency and shortening project timelines This  not only ensures delivery "
              className="bg-[#F0F4ED] h-[450px]"
            >
              content
            </ServiceCard>
            <ServiceCard
              title={
                <h4 className="text-white">
                  Custom Software <span className="text-[#90D249]">&</span> CRM
                </h4>
              }
              description="boosting efficiency and shortening project timelines This  not only ensures delivery "
              className="bg-[#373C39] h-[290px]"
            >
              content
            </ServiceCard>
          </div>
          <div className="grid gap-[50px]">
            <ServiceCard
              title={
                <h4>
                  Mobile <span className="text-[#1F9D55]">Apps</span>
                </h4>
              }
              description="boosting efficiency and shortening project timelines This  not only ensures delivery "
              className="bg-[#F2F2F2] h-[290px]"
            >
              content
            </ServiceCard>
            <ServiceCard
              title="Website Design"
              description="boosting efficiency and shortening project timelines This  not only ensures delivery "
              className="bg-[#E4F4D3] h-[450px]"
            >
              content
            </ServiceCard>
          </div>
        </div>
      </section>
    </main>
  );
}

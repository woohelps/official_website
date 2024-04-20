import ArrowRightIcon from "@/public/icons/ontactus_gengduo.svg";
import ServiceCard from "./ServiceCard";

export default function Home() {
  return (
    <main className="">
      <section className="relative flex flex-col items-center overflow-hidden bg-[#EFEFEF] py-32 after:absolute after:-bottom-12 after:-left-16 after:h-96 after:w-96 after:rounded-full after:bg-[#D8F2BE] after:bg-opacity-40 after:blur-[180px] after:content-[''] before:absolute before:-top-32 before:-right-24 before:h-96 before:w-96 before:rounded-full before:bg-[#D8F2BE] before:bg-opacity-30 before:blur-[180px] before:content-[''] mb-[110px]">
        <div className="w-[742px] flex flex-col items-center">
          <h1 className="text-6xl font-semibold mb-[40px] text-center leading-[67px]">
            Your Dream Our Mission Our Work{" "}
            <span className="text-[#1F9D55]">AI-Enhanced</span>
          </h1>
          <div className="text-[#888A89] mb-[60px] text-center text-xl leading-[38px] whitespace-pre">
            Transforming your ideas into reality—from concept to launch, {"\n"}
            we leverage cutting-edge AI technology to ensure precision at every
            step
          </div>
          <button className="bg-[#1F9D55] py-[20px] px-[67px] rounded-[10px] text-white font-semibold flex items-center">
            Contact Us
            <ArrowRightIcon className="ml-1.5" />
          </button>
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

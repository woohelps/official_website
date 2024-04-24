import ServiceCard from "./ServiceCard";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
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

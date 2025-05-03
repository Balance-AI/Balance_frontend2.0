import AssessmentIcon from "@mui/icons-material/Assessment";
import Image from "next/image";

export default function BalanceHeader() {
  return (
    <section className="min-h-[70vh] bg-[#f3f3f3] flex items-center uplift">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto h-full px-6 pt-6 lg:pt-0">
        {/* Left Half */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Balance AI</h1>
          <p className="font-normal text-2xl md:text-3xl leading-7 tracking-[-0.03em] mt-6">
            Unlock valuable insights and drive impactful growth
          </p>

          <div className="mt-9 p-6 backdrop-blur-sm shadow-[2px_5px_16px_-4px_rgba(0,0,0,0.75)] rounded-2xl w-full">
            <div className="flex items-center mb-8 flex-col sm:flex-row">
              <AssessmentIcon style={{ fontSize: 80, fill: "#FFC635" }} />
              <p className="ml-4 font-semibold  text-xl md:text-2xl leading-6 tracking-[-0.03em]">
                Connect to all your business platforms; Leverage AI to consolidate, visualize and execute on actionable insights.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <button className="font-semibold text-sm leading-5 tracking-[-0.02em] border-2 border-[#ffc635] rounded-md py-3 px-4 hover:bg-[#ffc635] hover:text-black transition">
                Get started
              </button>
              <button className="font-semibold text-sm leading-5 tracking-[-0.02em] border-2 border-[#ffc635] rounded-md py-3 px-4">
                Have an account? Sign in
              </button>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <Image
            className="w-full max-w-[800px] mx-auto"
            src="/Group1.svg"
            width={800}
            height={700}
            alt="Balance AI Illustration"
          />
        </div>
      </div>
    </section>
  );
}

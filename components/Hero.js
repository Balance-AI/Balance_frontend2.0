import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className="h-screen pt-20 bg-gradient-to-r from-black to-gray-900 max-h-[800px] relative z-[1]">
  <div className="h-full flex justify-between container mx-auto">
    <div className="w-1/2">
      <h1 className="text-gray-400 text-5xl font-medium">Cash Flow Made Easy for Creators</h1>
      <div className="mt-9 flex flex-col max-w-[440px]">
        <div className="relative text-center">
          <input
            type="text"
            className="py-5 px-8 w-full rounded-full border-2 border-white bg-black bg-opacity-25 text-white font-medium placeholder-white placeholder-opacity-50 transition-all duration-300 focus:bg-opacity-75 focus:outline-none"
            placeholder="Your E-mail Address"
          />
          <button
            className="mt-2 mb-2 w-full py-4 text-white font-bold rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    <div className="w-1/2 relative">
      <figure className="relative z-10">
        <img
          src="/heroiphone2.png"
          alt="Description of Image"
          className="shadow-lg rounded-3xl max-w-[250px] ml-3"
        />
      </figure>
      <img
        className="absolute top-[-164px] right-[-164px] w-[775px] z-5"
        src="/herotaskbarimg.svg"
        alt="Description of Image"
      />
      <img
        className="absolute top-[324px] right-[-96px] h-[324px] z-5"
        src="/herograph.svg"
        alt="Description of Image"
      />
      <img
        className="absolute top-[320px] right-[-154px] w-[260px] z-0"
        src="/herograph2.svg"
        alt="Description of Image"
      />
    </div>
  </div>
</section>

  );
}

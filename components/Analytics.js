import analyticsstyles from "../styles/Analytics.module.css";

export default function Analytics() {
  return (
    <section className="py-12">
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-3xl font-medium mb-16">
      Intuitive Analytics Dashboard
    </h1>
    <div className="flex flex-wrap w-full">
      <figure className="w-1/3 h-[600px] overflow-hidden relative flex justify-center items-center rounded-lg border-2 border-black m-4">
        <img
          src="/analyticsimg1.svg"
          alt="first image"
          className="w-full h-auto absolute top-0 object-center transition-all duration-[2s] hover:top-[-170%]"
        />
      </figure>
      <figure className="w-1/3 h-[600px] overflow-hidden relative flex justify-center items-center rounded-lg border-2 border-black m-4">
        <img
          src="/analyticsimg2.svg"
          alt="second image"
          className="w-full h-auto absolute top-0 object-center transition-all duration-[2s] hover:top-[-170%]"
        />
      </figure>
      <figure className="w-1/3 h-[600px] overflow-hidden relative flex justify-center items-center rounded-lg border-2 border-black m-4">
        <img
          src="/analyticsimg3.svg"
          alt="third image"
          className="w-full h-auto absolute top-0 object-center transition-all duration-[2s] hover:top-[-170%]"
        />
      </figure>
    </div>
  </div>
</section>
  );
}

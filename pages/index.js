import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-gradient rounded-lgshadow-md text-center text-white">
      <div className="transition-opacity duration-1000">
      <h1 className="text-white text-4xl md:text-center text-4xl sm:text-left text-2xl font-bold px-4">
          The Only Analytics Application That Centralizes Data Across <span style = {{fontWeight: 'bold', color: 'red'}} > ALL </span>  Platforms! 

      </h1>
      <h3 className = "text-white text-xl my-8 "> Centralize All Your Financial & Marketing Data  </h3>
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black-900 dark:text-black-100 my-8">
       We Support 
  </h2>


  <div className="flex flex-wrap justify-center items-center">
  {/* First row */}
  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">Youtube</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/youtube.png" alt="YouTube Image" width={64} height={64} />
    </div>
  </div>

  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">Meta</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/instagram.png" alt="Meta Image" width={64} height={64} />
    </div>
  </div>
  
  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">TikTok</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/tiktok.png" alt="TikTok Image" width={64} height={64} />
    </div>
  </div>

  {/* Second row */}
  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">Google</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/google.png" alt="LinkedIn Image" width={64} height={64} />
    </div>
  </div>

  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">Plaid</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/Plaid.png" alt="Twitter Image" width={108} height={84} />
    </div>
  </div>
  
  <div className="w-64 p-4 border rounded-full flex flex-col items-center mx-4 my-2">
    <h2 className="text-lg font-bold mb-2 text-center">Shopify</h2>
    <div className="rounded-full overflow-hidden">
      <Image src="/shopping.png" alt="Facebook Image" width={64} height={64} />
    </div>
  </div>
</div>






</div> 
</section>

      

    </>
  );
}

import {
  faGoogle,
  faMeta,
  faShopify,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import supportedstyles from "../styles/Supported.module.css";

export default function Supported() {
  return (
    <section className="bg-black-900 py-12">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <h1 className="text-center text-white font-medium text-5xl mb-4">
      The <span className="text-gray-400">Only</span> Analytics Application That Centralizes Data Across All Platforms
    </h1>
    <h3 className="text-white text-xl my-6">
      Centralize All Your Financial & Marketing Data
    </h3>
    <h2 className="text-2xl text-white mb-6">We Support</h2>
    <div className="flex flex-wrap justify-center w-full h-[268px] mt-12">
      <figure className="border-2 border-gray-400 rounded-full w-1/3 max-w-xs font-bold text-3xl text-white flex items-center justify-center m-4 bg-red-600">
        Youtube <FontAwesomeIcon icon={faYoutube} />
      </figure>
      <figure className="border-2 border-gray-400 rounded-full w-1/3 max-w-xs font-bold text-3xl text-white flex items-center justify-center m-4 bg-blue-600">
        Meta <FontAwesomeIcon icon={faMeta} />
      </figure>
      <figure className="border-2 border-gray-400 rounded-full w-1/3 max-w-xs font-bold text-3xl text-white flex items-center justify-center m-4 bg-pink-700">
        Tiktok <FontAwesomeIcon icon={faTiktok} />
      </figure>
      <figure className="border-2 border-gray-400 rounded-full w-1/3 max-w-xs font-bold text-3xl text-white flex items-center justify-center m-4 bg-green-600">
        Google <FontAwesomeIcon icon={faGoogle} />
      </figure>
      <figure className="border-2 border-gray-400 rounded-full w-1/3 max-w-xs font-bold text-3xl text-white flex items-center justify-center m-4 bg-lime-600">
        Shopify <FontAwesomeIcon icon={faShopify} />
      </figure>
    </div>
  </div>
</section>

  );
}

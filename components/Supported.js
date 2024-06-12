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
    <section className={supportedstyles.supported}>
      <div className="row">
        <div className="container">
          <h1>
            The Only Analytics Application That Centralizes Data Across All
            platforms!
          </h1>
          <h3>Centralize All Your Financial & Marketing Data</h3>
          <h2>We Support</h2>
          <div className={supportedstyles.supported__logos}>
            <figure className={supportedstyles.supported__logo}>
              Youtube <FontAwesomeIcon icon={faYoutube} />
            </figure>
            <figure className={supportedstyles.supported__logo}>
              Meta <FontAwesomeIcon icon={faMeta} />
            </figure>
            <figure className={supportedstyles.supported__logo}>
              Tiktok <FontAwesomeIcon icon={faTiktok} />
            </figure>
            <figure className={supportedstyles.supported__logo}>
              Google <FontAwesomeIcon icon={faGoogle} />
            </figure>
            <figure className={supportedstyles.supported__logo}>
              Shopify <FontAwesomeIcon icon={faShopify} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

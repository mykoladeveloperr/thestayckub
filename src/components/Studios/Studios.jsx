import "./Studios.scss";
import studioImage from "../../assets/girl.webp";

const features = [
  "Private en-suite bathroom",
  "Compact double bed with linen pack",
  "Study desk and chair",
  "Wardrobe and ample storage",
  "Kitchenette with hob and microwave",
  "Kitchen starter pack provided on arrival",
  "100Mbps WiFi throughout",
  "Mood lighting",
  "Sound proofing",
];

export default function Studios() {
  return (
    <section className="studios section">
      <div className="container">
        <div className="text-center studios__head">
          <span className="section-badge">Our studios</span>
          <h2 className="section-heading">
            Accommodation designed <br className="br-1440up" /> for your groups
          </h2>
        </div>
        <div className="studios__split">
          <div className="studios__split-media">
            <div className="studios__image">
              <img src={studioImage} alt="Stay Club studio interior" />
            </div>
          </div>
          <div className="studios__split-body">
            <h3 className="studios__subtitle">What&apos;s in every studio</h3>
            <p className="studios__intro">
              All our studios come fully equipped and ready to move into &mdash;
              everything included from day one.
            </p>
            <ul className="studios__list">
              {features.map((item) => (
                <li key={item}>
                  <span className="studios__item-text">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#cta" className="btn btn-primary rounded-pill mt-3 studios__cta">
              Request Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

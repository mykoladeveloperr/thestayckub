import "./Partners.scss";
import SvgSpriteIcon from "../SvgSpriteIcon";
import partnersImage from "../../assets/skyscraper.webp";

const features = [
  { symbolId: "users", label: "Faculty-led groups" },
  { symbolId: "map", label: "Pre-freshman programmes" },
  { symbolId: "calendar", label: "Seasonal internships" },
  { symbolId: "telescope", label: "Cultural immersions" },
  { symbolId: "clock", label: "Mini stays" },
];

export default function Partners() {
  return (
    <section className="partners section">
      <div className="container">
        <div className="partners__split">
          <div className="partners__split-media">
            <div className="partners__image">
              <img src={partnersImage} alt="London skyline" />
              <div className="partners__location">
                <SvgSpriteIcon
                  id="location"
                  size={32}
                  className="partners__location-icon"
                  style={{ color: "#fff" }}
                />
                <span className="partners__location-label">London, UK</span>
              </div>
            </div>
          </div>
          <div className="partners__split-body">
            <span className="section-badge">Who we work with</span>
            <h2 className="section-heading">
              Your trusted group <br className="br-1440up" /> booking partner
            </h2>
            <div className="partners__text">
              <p>
                We have built strong expertise in managing group accommodation
                at scale, supporting partners across a wide range of sectors.
              </p>
              <p>
                From short-term programmes to full academic placements, we
                deliver reliable, well-structured solutions tailored to each
                partner&apos;s needs.
              </p>
              <p>
                Our experience ensures a smooth process from enquiry to arrival,
                for both you and your students.
              </p>
            </div>
            <div className="partners__features">
              {features.map((item) => (
                <div className="partners__feature" key={item.label}>
                  <span className="partners__feature-icon">
                    <SvgSpriteIcon id={item.symbolId} size={20} />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

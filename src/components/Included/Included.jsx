import "./Included.scss";

import SvgSpriteIcon from "../SvgSpriteIcon";
import IncludedMobileSwiper, {
  chunkIncludedSlides,
} from "./IncludedMobileSwiper";

const items = [
  { symbolId: "bill", title: "Utility bills", text: "Utility bills covered" },
  {
    symbolId: "kettlebell",
    title: "Community Gym",
    text: "On-site fitness facilities",
  },
  {
    symbolId: "donate-coin",
    title: "Council Tax",
    text: "Included for all residents",
  },
  {
    symbolId: "storage",
    title: "Laundry facilities",
    text: "Pay per use machines",
  },

  {
    symbolId: "user",
    title: "On-site Maintenance",
    text: "Rapid response team on call",
  },
  {
    symbolId: "cushions",
    title: "Linen Packs",
    text: "Duvet, pillow and bed linen",
  },
  {
    symbolId: "ConnectionSpeed",
    title: "100Mbps WiFi",
    text: "High-speed, whole-building",
  },
  {
    symbolId: "stopwatch",
    title: "24/7 Reception",
    text: "Always someone on the desk",
  },

  {
    symbolId: "food",
    title: "Kitchen Packs",
    text: "Essentials provided on move-in",
  },
  {
    symbolId: "users",
    title: "Events",
    text: "Regular social programme",
  },
  {
    symbolId: "blackboard",
    title: "Social Spaces",
    text: "Communal lounges and games areas",
  },
  {
    symbolId: "earnings",
    title: "Local Discounts",
    text: "Exclusive deals nearby",
  },

  {
    symbolId: "pencil-book",
    title: "Quiet Study Areas",
    text: "Dedicated spaces for study",
  },
  {
    symbolId: "security-checked",
    title: "24/7 Security",
    text: "CCTV & staffed reception",
  },
];

const includedMobileSlides = chunkIncludedSlides(items);

export default function Included() {
  return (
    <section className="included section">
      <div className="container">
        <div className="included__head">
          <span className="section-badge included__head-badge">
            What&apos;s included
          </span>
          <h2 className="section-heading included__head-heading">
            Everything your <br className="br-1440up" /> group needs
          </h2>
          <p className="included__intro included__head-intro">
            Every Stay Club property comes fully equipped &mdash; amenities
            curated to support both learning and leisure for your group
            throughout their stay.
          </p>
        </div>

        <div className="included__desktop-grid included__grid">
          {items.map((item) => (
            <div className="included__grid-item" key={item.title}>
              <div className="included__cell">
                <span className="included__icon">
                  <SvgSpriteIcon id={item.symbolId} size={32} />
                </span>
                <div>
                  <h6 className="included__cell-title">{item.title}</h6>
                  <p className="included__cell-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <IncludedMobileSwiper slideGroups={includedMobileSlides} />

        <div className="text-center mt-5">
          <a href="#cta" className="btn btn-primary rounded-pill">
            Request Availability
          </a>
        </div>
      </div>
    </section>
  );
}

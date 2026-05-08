import ExpandCarousel from "../ExpandCarousel/ExpandCarousel";
import "./WhyPartner.scss";

import slide1 from "../../assets/swiper1.webp";
import slide2 from "../../assets/swiper2.webp";
import slide3 from "../../assets/swiper3.webp";
import slide4 from "../../assets/swiper4.webp";

const slides = [
  {
    number: "01",
    image: slide1,
    title: "Flexible stays, from one week to full term",
    text: "From a single week to a full academic year — we accommodate every timeline.",
  },
  {
    number: "02",
    image: slide2,
    title: "Four prime London locations",
    text: "6 properties across London with direct links to major schools and universities.",
  },
  {
    number: "03",
    image: slide3,
    title: "Dedicated support, every step of the way",
    text: "A dedicated account manager and 24/7 on-site team for every group stay.",
  },
  {
    number: "04",
    image: slide4,
    title: "Clear all inclusive pricing",
    text: "Bills, WiFi, maintenance & support all included — no extra costs.",
  },
];

export default function WhyPartner() {
  return (
    <section className="why-partner section">
      <div className="container">
        <div className="why-partner__head">
          <span className="section-badge section-badge--white why-partner__head-badge">
            Why partner with us
          </span>
          <h2 className="section-heading why-partner__head-heading">
            More than just <br className="br-1440up" /> a room
          </h2>
          <p className="why-partner__intro why-partner__head-intro">
            Our group accommodation is built to make placements seamless, with
            flexible stays, prime London locations, dedicated support and
            transparent pricing.
          </p>
        </div>

        <ExpandCarousel
          items={slides}
          getItemKey={(slide) => slide.number}
          ariaLabel="Why partner with us highlights"
          renderSlide={(slide) => (
            <>
              <article
                className="expand-carousel__card"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="expand-carousel__card-head">
                  <span className="expand-carousel__number">{slide.number}</span>
                  <span className="expand-carousel__number-dot" aria-hidden>
                    .
                  </span>
                </div>
                <div className="expand-carousel__card-body">
                  <h3 className="expand-carousel__card-title">{slide.title}</h3>
                  <p className="expand-carousel__card-text">{slide.text}</p>
                </div>
              </article>
              <div className="expand-carousel__card-stripe" aria-hidden />
            </>
          )}
        />
      </div>
    </section>
  );
}

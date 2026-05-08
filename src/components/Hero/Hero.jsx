import { useState, useEffect } from "react";
import "./Hero.scss";
import slideImage1 from "../../assets/hero-image-1.jpg";
import slideImage2 from "../../assets/hero-image-2.jpg";

const slides = [
  { id: 1, image: slideImage1 },
  { id: 2, image: slideImage2 },
];

export default function Hero({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <img
          src={slide.image}
          alt=""
          className={`hero__bg ${i === index ? "active" : ""}`}
          key={slide.id}
        />
      ))}
      <div className="hero__header">{children}</div>
      <div className="hero__section section">
        <div className="container">
          <h1 className="hero__title">
            Short-Term Accommodation for Groups in London
          </h1>
          <div className="hero__subtitle">
            Flexible, fully managed accommodation for{" "}
            <br className="br-1440up" />
            universities, study abroad programmes and{" "}
            <br className="br-1440up" />
            corporate partners.
          </div>
          <div className="hero__buttons">
            <div className="row g-3 flex-column flex-md-row align-items-stretch">
              <div className="col-12 col-md-auto ">
                <a
                  href="#cta"
                  className="btn btn-light rounded-pill hero__button w-100 hero__button"
                >
                  Request Availability
                </a>
              </div>

              <div className="col-12 col-md-auto">
                <a
                  href=""
                  className="btn btn-outline-light rounded-pill hero__button w-100 hero__button"
                >
                  Speak to Our Team
                </a>
              </div>
            </div>
          </div>
          <div className="hero__pagination">
            <div className="pagination">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`pagination__item ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

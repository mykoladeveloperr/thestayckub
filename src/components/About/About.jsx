import "./About.scss";
import aboutImage from "../../assets/office.webp";

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__head">
          <span className="section-badge section-badge--white">About us</span>
          <h2 className="section-heading">
            Partner with us to secure the best London homes for your students
          </h2>
          <div className="about__text">
            <p>
              Since 2012, we&apos;ve supported thousands of students in London
              with purpose-built accommodation, high-quality facilities, and
              award-winning service.
            </p>
            <p>
              We create vibrant communities where students can thrive &mdash;
              academically, socially, and personally &mdash; and we&apos;re
              excited about the opportunity to partner with you.
            </p>
            <p>
              From dynamic social spaces to dedicated study areas, we balance
              wellbeing and academic focus to deliver a truly exceptional
              student living experience.
            </p>
          </div>
        </div>
        <div className="about__image">
          <img src={aboutImage} alt="The Stay Club building" />
        </div>
      </div>
    </section>
  );
}

import "./Header.scss";
import React from "react";
import Drawer from "../Drawer/Drawer";
import Logo from "../Logo/Logo";
import useViewportScroll from "../../hooks/useViewportScroll";

const NAV_LINKS = [
  { href: "", label: "Accommodation" },
  { href: "", label: "Community" },
  { href: "", label: "Universities" },
  { href: "", label: "Co-Living" },
  { href: "", label: "Resources" },
  { href: "", label: "Get in touch" },
];

function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Порт хедера з tsc (`header.tsx`): фіксована позиція, стан за скролом / hover / мобільним меню,
 * опційний банер. Без Next.js, Motion і Directus — розмітка й логіка зберігаються.
 */
export default function Header({
  transparent = true,
  headerTheme = "light",
  showBanner = false,
  banner = null,
}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const { scrollY } = useViewportScroll(100);
  const isAlt = scrollY <= 100 && !isHovered && !drawerOpen;

  React.useEffect(() => {
    if (!drawerOpen) setIsHovered(false);
  }, [drawerOpen]);

  function drawerToggleHandler() {
    setDrawerOpen((prev) => !prev);
  }

  const headerClass = cn(
    "header",
    transparent && isAlt && headerTheme === "light" && "header--alt-light",
    transparent && isAlt && headerTheme === "dark" && "header--alt-dark",
    (!isAlt || !transparent) && "header--solid",
    transparent && "header--fixed",
  );

  const ctaOnHero = isAlt && transparent && headerTheme === "light";

  return (
    <>
      <header
        className={headerClass}
        onMouseEnter={() => !drawerOpen && setIsHovered(true)}
        onMouseLeave={() => !drawerOpen && setIsHovered(false)}
      >
        {showBanner && banner ? (
          <div className="header__banner">
            <div className="header__banner-inner">{banner}</div>
          </div>
        ) : null}

        <div className="header__inner">
          <div className="header__row">
            <a href="/" className="header__logo-link">
              <Logo className="header__logo" />
            </a>

            <div className="header__actions">
              <div className="header__actions-inner">
                <nav className="header__nav" aria-label="Main">
                  <ul className="header__nav-list">
                    {NAV_LINKS.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="header__nav-item link">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <a
                  href="#cta"
                  className={cn(
                    "header__cta",
                    ctaOnHero && "header__cta--on-hero",
                  )}
                >
                  Book a Room
                </a>
              </div>

              <button
                type="button"
                className="header__burger"
                onClick={drawerToggleHandler}
                aria-label="open menu"
              >
                <i className="bi bi-list" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="header__drawer">
        <Drawer isOpen={drawerOpen} drawerToggleHandler={drawerToggleHandler} />
      </div>
    </>
  );
}

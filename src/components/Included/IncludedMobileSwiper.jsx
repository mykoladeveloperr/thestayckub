import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SvgSpriteIcon from "../SvgSpriteIcon";

function IncludedSwiperChevron({ mirror }) {
  return (
    <svg
      className={`included__swiper-nav-icon${mirror ? " included__swiper-nav-icon--mirror" : ""}`}
      width={48}
      height={48}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeWidth={2.6667}
        d="M18.968 8l-4.983 4.983c-1.056 1.056-1.584 1.584-1.782 2.193-0.174 0.536-0.174 1.113 0 1.648 0.198 0.609 0.726 1.137 1.782 2.193l4.983 4.983"
      />
    </svg>
  );
}

/** Слайди: 4 + 4 + 3 + 3 елементи за макетом. */
export function chunkIncludedSlides(list) {
  const sizes = [4, 4, 3, 3];
  let offset = 0;
  return sizes.map((n) => {
    const slide = list.slice(offset, offset + n);
    offset += n;
    return slide;
  });
}

export default function IncludedMobileSwiper({ slideGroups }) {
  const swiperHostRef = useRef(null);
  const swiperInstRef = useRef(null);

  useEffect(() => {
    const host = swiperHostRef.current;
    if (!host) return undefined;

    const root = host.querySelector(".included__swiper-root");
    if (!root) return undefined;

    const prevEl = root.querySelector(".included__swiper-prev");
    const nextEl = root.querySelector(".included__swiper-next");
    const pagEl = root.querySelector(".included__swiper-pag");

    swiperInstRef.current?.destroy(true, true);
    swiperInstRef.current = null;

    if (!prevEl || !nextEl || !pagEl) return undefined;

    swiperInstRef.current = new Swiper(root, {
      modules: [Navigation, Pagination],
      slidesPerView: 1.12,
      spaceBetween: 0,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      navigation: {
        prevEl,
        nextEl,
      },
      pagination: {
        el: pagEl,
        clickable: true,
      },
    });

    return () => {
      swiperInstRef.current?.destroy(true, true);
      swiperInstRef.current = null;
    };
  }, [slideGroups]);

  return (
    <div className="included__swiper-host" ref={swiperHostRef}>
      <div className="swiper included__swiper-root">
        <div className="swiper-wrapper">
          {slideGroups.map((group, slideIndex) => (
            <div className="swiper-slide" key={slideIndex}>
              <div className="included__swiper-slide-stack">
                {group.map((item) => (
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
            </div>
          ))}
        </div>

        <div className="included__swiper-controls">
          <button
            type="button"
            className="included__swiper-nav included__swiper-prev swiper-button-prev"
            aria-label="Попередній слайд"
          >
            <IncludedSwiperChevron />
          </button>
          <div className="included__swiper-pag swiper-pagination" />
          <button
            type="button"
            className="included__swiper-nav included__swiper-next swiper-button-next"
            aria-label="Наступний слайд"
          >
            <IncludedSwiperChevron mirror />
          </button>
        </div>
      </div>
    </div>
  );
}

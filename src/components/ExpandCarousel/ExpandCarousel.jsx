import { useCallback, useEffect, useRef, useState } from "react";
import "./ExpandCarousel.scss";

export default function ExpandCarousel({
  items,
  getItemKey,
  renderSlide,
  ariaLabel,
  className = "",
}) {
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);
  const programmaticLockUntilRef = useRef(0);
  const idleSyncTimerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = items.length;
  const isBeginning = activeIndex === 0;
  const isEnd = activeIndex === count - 1;

  const bumpProgrammaticLock = useCallback((extraMs) => {
    programmaticLockUntilRef.current = Math.max(
      programmaticLockUntilRef.current,
      Date.now() + extraMs,
    );
  }, []);

  const clearIdleSync = useCallback(() => {
    window.clearTimeout(idleSyncTimerRef.current);
    idleSyncTimerRef.current = null;
  }, []);

  const indexMostVisible = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;
    const vr = viewport.getBoundingClientRect();
    let bestIdx = 0;
    let bestFrac = -1;
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const sr = slide.getBoundingClientRect();
      const overlap = Math.min(sr.right, vr.right) - Math.max(sr.left, vr.left);
      const frac = overlap > 0 ? overlap / sr.width : 0;
      if (frac > bestFrac) {
        bestFrac = frac;
        bestIdx = i;
      }
    });
    return bestIdx;
  }, []);

  const syncActiveFromScrollPosition = useCallback(() => {
    if (Date.now() < programmaticLockUntilRef.current) return;
    const best = indexMostVisible();
    if (best !== activeIndexRef.current) {
      activeIndexRef.current = best;
      setActiveIndex(best);
    }
  }, [indexMostVisible]);

  const scrollToIndex = useCallback(
    (index, behavior) => {
      bumpProgrammaticLock(behavior === "smooth" ? 1000 : 500);

      const viewport = viewportRef.current;
      const slide = slideRefs.current[index];
      if (!viewport || !slide) return;

      const maxScroll = Math.max(
        0,
        viewport.scrollWidth - viewport.clientWidth,
      );
      let left = slide.offsetLeft;

      if (index === count - 1) {
        left = slide.offsetLeft + slide.offsetWidth - viewport.clientWidth;
      }

      left = Math.max(0, Math.min(left, maxScroll));
      viewport.scrollTo({
        left,
        behavior: behavior === "smooth" ? "smooth" : "auto",
      });
    },
    [bumpProgrammaticLock, count],
  );

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= count) return;
      clearIdleSync();
      activeIndexRef.current = index;
      setActiveIndex(index);
      bumpProgrammaticLock(1000);
      requestAnimationFrame(() => scrollToIndex(index, "smooth"));
    },
    [bumpProgrammaticLock, clearIdleSync, count, scrollToIndex],
  );

  useEffect(() => {
    const id = window.setTimeout(() => scrollToIndex(activeIndex, "auto"), 520);
    return () => window.clearTimeout(id);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const scheduleIdleSync = () => {
      if (Date.now() < programmaticLockUntilRef.current) {
        window.clearTimeout(idleSyncTimerRef.current);
        idleSyncTimerRef.current = null;
        return;
      }
      window.clearTimeout(idleSyncTimerRef.current);
      idleSyncTimerRef.current = window.setTimeout(() => {
        idleSyncTimerRef.current = null;
        syncActiveFromScrollPosition();
      }, 180);
    };

    const onScrollEnd = () => syncActiveFromScrollPosition();

    el.addEventListener("scroll", scheduleIdleSync, { passive: true });
    el.addEventListener("scrollend", onScrollEnd);
    return () => {
      clearIdleSync();
      el.removeEventListener("scroll", scheduleIdleSync);
      el.removeEventListener("scrollend", onScrollEnd);
    };
  }, [clearIdleSync, syncActiveFromScrollPosition]);

  useEffect(() => () => clearIdleSync(), [clearIdleSync]);

  const goNext = () => goTo(Math.min(count - 1, activeIndexRef.current + 1));
  const goPrev = () => goTo(Math.max(0, activeIndexRef.current - 1));

  const rootClass = className
    ? `expand-carousel ${className}`
    : "expand-carousel";

  return (
    <div className={rootClass}>
      <div
        ref={viewportRef}
        className="expand-carousel__viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        <div className="expand-carousel__track" role="list">
          {items.map((item, idx) => (
            <div
              key={getItemKey(item, idx)}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              role="listitem"
              className={`expand-carousel__slide ${idx === activeIndex ? "is-active" : ""}`}
              aria-current={idx === activeIndex}
              onClick={() => idx !== activeIndexRef.current && goTo(idx)}
            >
              {renderSlide(item, idx, idx === activeIndex)}
            </div>
          ))}
        </div>
      </div>

      <div className="expand-carousel__controls">
        <button
          type="button"
          className="expand-carousel__nav"
          onClick={goPrev}
          disabled={isBeginning}
          aria-label="Previous slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="expand-carousel__pagination">
          {items.map((item, idx) => (
            <button
              key={getItemKey(item, idx)}
              type="button"
              className={`expand-carousel__bullet ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex}
            />
          ))}
        </div>
        <button
          type="button"
          className="expand-carousel__nav"
          onClick={goNext}
          disabled={isEnd}
          aria-label="Next slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

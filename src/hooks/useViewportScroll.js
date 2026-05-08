import { useState, useEffect } from "react";

export function useViewportScroll(threshold = 0) {
  const [scrollState, setScrollState] = useState({ scrollY: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastUpdate = 0;
    let lastScrollY = window.scrollY;
    const THROTTLE_MS = 50;

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;

      const hasThresholdCrossed =
        (lastScrollY <= threshold && currentScrollY > threshold) ||
        (lastScrollY > threshold && currentScrollY <= threshold);

      if (
        now - lastUpdate >= THROTTLE_MS &&
        (hasThresholdCrossed || Math.abs(currentScrollY - lastScrollY) >= 50)
      ) {
        setScrollState({ scrollY: currentScrollY });
        lastUpdate = now;
        lastScrollY = currentScrollY;
      }
    };

    setScrollState({ scrollY: window.scrollY });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}

export default useViewportScroll;

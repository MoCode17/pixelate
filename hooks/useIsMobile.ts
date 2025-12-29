"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the user is on a mobile device
 * Checks both viewport width and touch capability
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check viewport width
      const isSmallViewport = window.innerWidth < breakpoint;

      // Check if device has touch capability
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - for older browsers
        navigator.msMaxTouchPoints > 0;

      // Device is mobile if it has small viewport OR is touch-capable
      setIsMobile(isSmallViewport || isTouchDevice);
    };

    // Check on mount
    checkMobile();

    // Re-check on resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Hook to detect if the user is on a touch device
 * Use this specifically for disabling mouse-based interactions
 */
export function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - for older browsers
        navigator.msMaxTouchPoints > 0;

      setIsTouchDevice(hasTouch);
    };

    checkTouch();
  }, []);

  return isTouchDevice;
}

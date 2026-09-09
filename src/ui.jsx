import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "./data";

/** Matches the original's Image component: absolutely positioned, contain or cover. */
export function Img({ src, alt, className = "", fittingType = "fill", ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`absolute inset-0 w-full h-full ${
        fittingType === "fit" ? "object-contain" : "object-cover"
      } ${className}`}
      {...rest}
    />
  );
}

/** True when the visitor has asked the OS to reduce motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Freezes background scrolling while an overlay is open, without a layout jump. */
export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [active]);
}

/** Calls onEscape when Escape is pressed while active. */
export function useEscapeKey(active, onEscape) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") onEscape();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, onEscape]);
}

/**
 * Moves focus into an overlay, keeps Tab inside it, and restores focus on close.
 * Returns the ref to put on the overlay container.
 */
export function useFocusTrap(active) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    const node = ref.current;
    const restoreTo = document.activeElement;
    const focusables = () =>
      [...node.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((el) => el.offsetParent !== null);

    const first = focusables()[0];
    (first || node).focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => {
      node.removeEventListener("keydown", onKey);
      if (restoreTo instanceof HTMLElement) restoreTo.focus({ preventScroll: true });
    };
  }, [active]);
  return ref;
}

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px", ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, tone = "terracotta" }) {
  return (
    <p
      className={`text-[11px] md:text-[12px] uppercase tracking-[0.3em] ${
        tone === "light" ? "text-[#F5F2E8]/70" : "text-[#8E4A35]"
      } mb-5`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-display text-[#1B3022] leading-[1.02] tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

function useParallax(ref, { from = -80, to = 80, offset = ["start end", "end start"] } = {}) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return useTransform(scrollYProgress, [0, 1], [from, to]);
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  from = -60,
  to = 60,
  ...rest
}) {
  const ref = useRef(null);
  const y = useParallax(ref, { from, to });
  const reduced = usePrefersReducedMotion();
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-0 will-change-transform"
      >
        <Img
          src={src}
          alt={alt}
          className={reduced ? "" : "scale-110"}
          fittingType="fill"
          {...rest}
        />
      </motion.div>
    </div>
  );
}

export function Logo({ size = 46, withWordmark = true, tone = "dark", className = "" }) {
  const toneClass = tone === "light" ? "text-[#F5F2E8]" : "text-[#1B3022]";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0 rounded-full overflow-hidden"
        style={{ height: size, width: size }}
      >
        <Img
          src={IMAGES.logo}
          alt="Vibrant Valley — Farm House & Resort Project, Velavadar Blackbuck Century"
          className="rounded-full"
          fittingType="fit"
        />
      </span>
      {withWordmark && (
        <span className="leading-none whitespace-nowrap">
          <span
            className={`font-display text-xl md:text-[22px] tracking-wide block ${toneClass}`}
          >
            Vibrant Valley
          </span>
          <span
            className={`text-[8px] uppercase tracking-[0.28em] block ${
              tone === "light" ? "text-[#F5F2E8]/55" : "text-[#1B3022]/55"
            }`}
          >
            Farm House &amp; Resort Project
          </span>
        </span>
      )}
    </span>
  );
}

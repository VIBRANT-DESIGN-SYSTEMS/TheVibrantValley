import { useCallback, useEffect, useState } from "react";
import { Check, MapPin, Menu, X } from "lucide-react";
import {
  Logo,
  useBodyScrollLock,
  useEscapeKey,
  useFocusTrap,
} from "./ui";
import { CONTACT, FOOTER_LINKS, MARQUEE_WORDS, NAV_LINKS } from "./data";

export function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useBodyScrollLock(menuOpen);
  useEscapeKey(menuOpen, closeMenu);
  const menuRef = useFocusTrap(menuOpen);

  // Before the page scrolls, the header sits on the dark hero image, so it needs
  // light text. Once the cream bar fades in, it switches back to dark.
  const onDark = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F2E8]/90 backdrop-blur-md py-2.5 shadow-[0_1px_0_rgba(107,93,79,0.2)]"
            : "py-4"
        }`}
      >
        {/* Scrim: guarantees the nav stays legible over any hero imagery. */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#1B3022]/70 to-transparent transition-opacity duration-500 ${
            onDark ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center shrink-0">
            <Logo size={scrolled ? 42 : 48} tone={onDark ? "light" : "dark"} />
          </a>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.anchor}
                className={`text-[13px] uppercase tracking-[0.18em] whitespace-nowrap hover:text-[#8E4A35] transition-colors duration-300 ${
                  onDark ? "text-[#F5F2E8]" : "text-[#1B3022]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 shrink-0">
            <span
              className={`hidden 2xl:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                onDark ? "text-[#F5F2E8]/80" : "text-[#1B3022]/55"
              }`}
            >
              <MapPin size={12} className={onDark ? "text-[#D1DCE5]" : "text-[#8E4A35]"} />
              Velavadar Blackbuck Century
            </span>
            <button
              onClick={onBookClick}
              className="hidden md:inline-flex items-center whitespace-nowrap px-5 py-2.5 bg-[#8E4A35] text-white text-[12px] uppercase tracking-[0.18em] hover:bg-[#1B3022] transition-colors duration-300"
            >
              Book Site Visit
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden transition-colors duration-300 ${
                onDark ? "text-[#F5F2E8]" : "text-[#1B3022]"
              }`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-[#1B3022] grain-overlay overflow-y-auto"
        >
          <div className="flex items-center justify-between px-6 md:px-10 py-5">
            <Logo size={48} tone="light" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#F5F2E8]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-2 pb-12">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.label}
                href={item.anchor}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl md:text-6xl text-[#F5F2E8] hover:text-[#8E4A35] transition-colors duration-300"
                style={{ animation: `fade-up 0.6s ${i * 0.05}s both` }}
              >
                {item.label}
              </a>
            ))}
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#D1DCE5]/70">
              <MapPin size={14} className="text-[#8E4A35]" />
              Velavadar Blackbuck Century
            </span>
            <button
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
              className="mt-6 px-8 py-4 bg-[#8E4A35] text-white text-[13px] uppercase tracking-[0.2em]"
            >
              Book Your Site Experience
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function Marquee() {
  return (
    <div className="bg-[#1B3022] grain-overlay py-5 overflow-hidden border-y border-[#F5F2E8]/10">
      <div className="marquee-track flex whitespace-nowrap">
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl md:text-3xl text-[#F5F2E8]/80 px-8 italic">
              {word}
            </span>
            <span className="text-[#8E4A35] text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#1B3022] grain-overlay text-[#F5F2E8] pt-20 pb-10 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Logo size={64} tone="light" withWordmark={false} />
            <h3 className="font-display text-4xl md:text-5xl leading-[0.95] mt-6">
              Vibrant <span className="italic text-[#D1DCE5]">Valley</span>
            </h3>
            <p className="mt-4 text-[#F5F2E8]/65 max-w-sm leading-relaxed">
              Farm House &amp; Resort Project. A destination designed around nature,
              farming, recreation, wellness and memorable family experiences.
            </p>
            <p className="mt-4 font-display text-xl italic text-[hsl(var(--card))]">
              Live Vibrant, Live Green.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#F5F2E8]/50 mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-[15px]">
              {FOOTER_LINKS.map((link) => (
                <li key={link.l}>
                  <a
                    href={link.a}
                    className="text-[#F5F2E8]/75 hover:text-[#8E4A35] transition-colors"
                  >
                    {link.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#F5F2E8]/50 mb-5">
              Connect
            </p>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-[#F5F2E8]/75 hover:text-[#8E4A35] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#8E4A35]">📞</span> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F2E8]/75 hover:text-[#8E4A35] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#8E4A35]">🌐</span> {CONTACT.websiteLabel}
                </a>
              </li>
              <li className="text-[#F5F2E8]/75 flex items-start gap-2 pt-2">
                <MapPin size={16} className="text-[#8E4A35] shrink-0 mt-0.5" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F5F2E8]/15 flex flex-col md:flex-row justify-between gap-4 text-[#F5F2E8]/45 text-xs">
          <p>© {new Date().getFullYear()} Vibrant Valley. All rights reserved.</p>
          <p className="italic">
            Proposed concepts. Final inclusions governed by applicable offer terms.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function StickyBookButton({ onBookClick }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={onBookClick}
      className={`fixed bottom-6 right-6 z-30 px-6 py-4 bg-[#8E4A35] text-white text-[12px] uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 hover:bg-[#1B3022] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 pointer-events-none"
      }`}
      style={{ animation: visible ? "float-magnetic 3s ease-in-out infinite" : undefined }}
    >
      Book Site Visit
    </button>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-[#1B3022]/60 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}

const EMPTY_FORM = { name: "", mobile: "", city: "", date: "", visitors: "1" };
const INPUT_CLASS =
  "w-full bg-transparent border-b border-[#1B3022]/30 focus:border-[#8E4A35] outline-none py-2 text-lg text-[#1B3022] transition-colors";

export function BookingModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);

  const close = useCallback(() => {
    setSubmitted(false);
    setSending(false);
    setError("");
    setForm(EMPTY_FORM);
    onClose();
  }, [onClose]);

  useBodyScrollLock(open);
  useEscapeKey(open, close);
  const dialogRef = useFocusTrap(open);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // No endpoint configured -> keep the original front-end-only confirmation.
    if (!CONTACT.leadEndpoint) {
      setSubmitted(true);
      return;
    }
    setSending(true);
    try {
      const res = await fetch(CONTACT.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "vibrantvalley.com" }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch {
      setError(
        `Something went wrong sending your request. Please call us on ${CONTACT.phone}.`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#1B3022]/80 backdrop-blur-md" onClick={close} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Book your site experience"
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#F5F2E8] grain-overlay max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={close}
          className="absolute top-5 right-5 text-[#1B3022]/60 hover:text-[#8E4A35] transition-colors z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center px-8 py-24 min-h-[420px]">
            <div className="w-16 h-16 rounded-full bg-[#8E4A35] flex items-center justify-center mb-6">
              <Check className="text-white" size={30} />
            </div>
            <p className="font-display text-3xl md:text-4xl text-[#1B3022] mb-3">
              Preparing your journey to the Valley.
            </p>
            <p className="text-[#1B3022]/70 max-w-md leading-relaxed">
              Thank you, {form.name || "friend"}. Our team will reach out shortly to
              confirm your site experience near Velavadar.
            </p>
            <button
              onClick={close}
              className="mt-8 px-8 py-3 border border-[#1B3022] text-[#1B3022] text-[12px] uppercase tracking-[0.2em] hover:bg-[#1B3022] hover:text-[#F5F2E8] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-8 md:px-12 py-12 md:py-16">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[#8E4A35] mb-3">
              Book Your Site Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1B3022] leading-[1.05] mb-2">
              Walk through the land.
            </h2>
            <p className="text-[#1B3022]/70 mb-10 max-w-md">
              Share a few details and we'll arrange your visit to Vibrant Valley.
            </p>
            <form onSubmit={handleSubmit} className="space-y-7">
              <Field label="Name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={INPUT_CLASS}
                />
              </Field>
              <Field label="Mobile Number">
                <input
                  required
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className={INPUT_CLASS}
                />
              </Field>
              <Field label="City">
                <input
                  required
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className={INPUT_CLASS}
                />
              </Field>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Field label="Preferred Visit Date">
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </Field>
                <Field label="Number of Visitors">
                  <select
                    value={form.visitors}
                    onChange={(e) => setForm({ ...form, visitors: e.target.value })}
                    className={INPUT_CLASS}
                  >
                    {["1", "2", "3", "4", "5", "6+"].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              {error && (
                <p role="alert" className="text-[#8E4A35] text-sm">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full mt-4 py-4 bg-[#8E4A35] text-white text-[13px] uppercase tracking-[0.25em] hover:bg-[#1B3022] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Book My Site Experience"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

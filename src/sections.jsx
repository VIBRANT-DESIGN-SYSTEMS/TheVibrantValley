import { MapPin } from "lucide-react";
import { Eyebrow, Img, ParallaxImage, Reveal, SectionTitle } from "./ui";
import {
  AMENITIES,
  CHILDHOOD,
  COMPARISON,
  CONTACT,
  EVENT_FACILITIES,
  EVENT_TYPES,
  EXPERIENCE_BLOCKS,
  FOOD,
  FOUR_WORDS,
  GENERATIONS,
  IMAGES,
  IMAGINE_LINES,
  LAND_BENEFITS,
  MASTERPLAN_PINS,
  MEMBERSHIP_BENEFITS,
  NIGHT,
  OFFERINGS,
  PILLARS,
  STAY_TYPES,
  SUSTAINABILITY,
  WELLNESS,
} from "./data";

/* ------------------------------------------------------------------ Hero */

export function Hero({ onBookClick }) {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#1B3022] grain-overlay"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Img
          src={IMAGES.hero}
          alt="Dawn over the Gujarat plains near Velavadar with a Blackbuck in the distance"
          fittingType="fit"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B3022]/45 via-[#1B3022]/35 to-[#1B3022]/75" />
      <div className="absolute left-6 md:left-10 top-0 bottom-0 vertical-rule hidden md:block" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto pt-28 pb-32">
        <div className="reveal in-view mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F2E8]/12 backdrop-blur-md border border-[#F5F2E8]/25 text-[#F5F2E8]">
            <MapPin size={14} className="text-[#D1DCE5]" />
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.25em]">
              Velavadar Blackbuck Century
            </span>
          </span>
        </div>

        <p
          className="font-display text-[#D1DCE5] text-2xl md:text-3xl italic reveal in-view"
          style={{ animationDelay: "0.05s" }}
        >
          A Life Closer to Nature.
        </p>

        <h1 className="font-display text-[#F5F2E8] leading-[0.95] tracking-tight mt-3">
          <span
            className="block text-[13vw] md:text-[7.5rem] lg:text-[8.5rem] font-light reveal in-view"
            style={{ animationDelay: "0.15s" }}
          >
            Own a Piece
          </span>
          <span
            className="block text-[13vw] md:text-[7.5rem] lg:text-[8.5rem] font-light italic text-[#D1DCE5] reveal in-view"
            style={{ animationDelay: "0.3s" }}
          >
            of Nature.
          </span>
        </h1>

        <div className="mt-7 max-w-xl reveal in-view" style={{ animationDelay: "0.45s" }}>
          <p className="text-[#F5F2E8]/85 text-lg md:text-xl leading-relaxed font-light">
            Live the experience. Leave a legacy. Own your personal piece of land inside a
            destination designed around nature, farming, recreation, wellness and memorable
            family experiences.
          </p>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[#F5F2E8]/75 text-[11px] uppercase tracking-[0.22em] reveal in-view"
          style={{ animationDelay: "0.6s" }}
        >
          {["Farmhouses", "Resort", "Plots"].map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#8E4A35]">•</span>}
              {label}
            </span>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 reveal in-view"
          style={{ animationDelay: "0.75s" }}
        >
          <button
            onClick={onBookClick}
            className="px-8 py-4 bg-[#8E4A35] text-white text-[12px] uppercase tracking-[0.25em] hover:bg-[#F5F2E8] hover:text-[#1B3022] transition-colors duration-300"
          >
            Book a Site Visit
          </button>
          <a
            href="#overview"
            className="px-8 py-4 border border-[#F5F2E8]/40 text-[#F5F2E8] text-[12px] uppercase tracking-[0.25em] hover:bg-[#F5F2E8]/10 transition-colors duration-300 text-center"
          >
            Explore Vibrant Valley
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[#F5F2E8]/50 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-12 bg-[#F5F2E8]/40 scroll-cue-line" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Overview */

export function Overview({ onBookClick }) {
  return (
    <section
      id="overview"
      className="bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow tone="light">Project Overview</Eyebrow>
          <h2 className="font-display text-[#F5F2E8] text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
            A Life Closer to <span className="italic text-[#D1DCE5]">Nature.</span>
          </h2>
          <p className="mt-5 text-[#F5F2E8]/65 text-sm md:text-base uppercase tracking-[0.25em]">
            Farmhouses <span className="text-[#8E4A35]">|</span> Resort{" "}
            <span className="text-[#8E4A35]">|</span> Plots
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F2E8]/15">
            {PILLARS.map((pillar, i) => (
              <div key={pillar} className="bg-[#1B3022] px-6 py-7 text-center">
                <span className="text-[11px] uppercase tracking-[0.3em] block mb-2 text-[hsl(var(--card))]">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl md:text-3xl text-[#F5F2E8]">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-14 md:mt-20 aspect-[16/10] w-full overflow-hidden">
            <Img
              src={IMAGES.masterplan}
              alt="Vibrant Valley master plan — farmhouses, clubhouse, swimming pool, lotus lake and adventure activities"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/55 via-transparent to-[#1B3022]/20 rounded" />
            {MASTERPLAN_PINS.map((pin, i) => (
              <span
                key={pin.label}
                className="absolute hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F2E8]/90 backdrop-blur-sm text-[#1B3022] text-[10px] uppercase tracking-[0.18em] reveal in-view"
                style={{
                  top: pin.top,
                  left: pin.left,
                  animationDelay: `${0.4 + i * 0.12}s`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E4A35]" />
                {pin.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 md:hidden">
            {MASTERPLAN_PINS.map((pin) => (
              <div
                key={pin.label}
                className="bg-[#F5F2E8]/5 border border-[#F5F2E8]/15 px-3 py-3 text-center"
              >
                <span className="text-[#D1DCE5] text-[10px] uppercase tracking-[0.15em]">
                  {pin.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-20">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center md:text-left text-[hsl(var(--card))]">
              Within the destination
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-px bg-[#F5F2E8]/10">
              {AMENITIES.map((item) => (
                <div
                  key={item.text}
                  className="bg-[#1B3022] px-3 py-5 flex flex-col items-center text-center gap-2 hover:bg-[#8E4A35] transition-colors duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[#F5F2E8]/80 group-hover:text-[#F5F2E8] text-[10px] uppercase tracking-[0.12em] leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[#F5F2E8]/50 text-[11px] uppercase tracking-[0.2em]">
              And more…
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#F5F2E8]/15 pt-10">
            <p className="font-display text-2xl md:text-3xl italic text-[#D1DCE5] flex items-center gap-3">
              <MapPin size={20} className="text-[#8E4A35]" />
              Your Green Escape Awaits…
            </p>
            <button
              onClick={onBookClick}
              className="px-8 py-4 bg-[#8E4A35] text-white text-[12px] uppercase tracking-[0.25em] hover:bg-[#F5F2E8] hover:text-[#1B3022] transition-colors duration-300"
            >
              Book a Site Visit
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- MoreThanLand */

export function MoreThanLand({ onBookClick }) {
  return (
    <section className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>This is more than a farm plot</Eyebrow>
              <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
                A Plot That Gives You{" "}
                <span className="italic text-[#8E4A35]">More Than Land.</span>
              </SectionTitle>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-[#1B3022]/75 leading-relaxed max-w-xl">
                Imagine owning your own farm plot surrounded by greenery, open skies and
                nature — while an entire nature destination grows around you. Vibrant Valley
                brings together:
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-px bg-[#1B3022]/15">
          {OFFERINGS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="bg-[#F5F2E8] p-7 md:p-8 h-full flex flex-col">
                <span className="font-display text-3xl text-[#8E4A35] mb-4">0{i + 1}</span>
                <h3 className="font-display text-xl md:text-2xl text-[#1B3022] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1B3022]/65 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl text-[#1B3022]/60 italic">
              You don't simply buy a plot.
            </p>
            <SectionTitle className="text-5xl md:text-6xl lg:text-7xl mt-2">
              You become part of a{" "}
              <span className="italic text-[#8E4A35]">destination.</span>
            </SectionTitle>
            <button
              onClick={onBookClick}
              className="mt-10 px-8 py-4 bg-[#8E4A35] text-white text-[12px] uppercase tracking-[0.25em] hover:bg-[#1B3022] transition-colors duration-300"
            >
              Schedule Your Site Experience
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- FourWords */

export function FourWords() {
  return (
    <section
      id="own"
      className="bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow tone="light">Own • Experience • Stay • Grow</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mt-12 md:mt-16 bg-[#F5F2E8]/15">
          {FOUR_WORDS.map((item, i) => (
            <Reveal key={item.word} delay={i * 0.1}>
              <div className="bg-[#1B3022] p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
                <span className="text-[12px] uppercase tracking-[0.3em] text-[hsl(var(--card))]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-5xl md:text-6xl text-[#F5F2E8] my-6">
                  {item.word}
                </h3>
                <p className="text-[#F5F2E8]/70 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Experience */

function ExperienceBlock({ block, flip }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <div className="relative overflow-hidden group">
          <div className="aspect-[4/3] w-full">
            <ParallaxImage
              src={block.image}
              alt={block.title}
              className="w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              from={-40}
              to={40}
            />
          </div>
          <div className="absolute top-5 left-5 bg-[#F5F2E8]/90 backdrop-blur-sm px-4 py-2 z-10">
            <span className="text-2xl mr-2 float-icon">{block.icon}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#1B3022]">
              {block.label}
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1B3022] leading-[1.05] mb-6">
            {block.title}
          </h3>
          {block.intro && (
            <p className="text-[#1B3022]/70 text-lg leading-relaxed mb-6 max-w-lg">
              {block.intro}
            </p>
          )}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-[#1B3022]/80"
              >
                <span className="text-[#8E4A35] mt-1 text-xs">—</span>
                {item}
              </li>
            ))}
          </ul>
          {block.note && (
            <p className="mt-8 font-display text-xl md:text-2xl italic text-[#8E4A35] border-l-2 border-[#8E4A35] pl-4">
              {block.note}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow>The Vibrant Valley Experience</Eyebrow>
          <SectionTitle className="text-5xl md:text-6xl lg:text-7xl max-w-3xl">
            One Destination.{" "}
            <span className="italic text-[#8E4A35]">Endless Experiences.</span>
          </SectionTitle>
        </Reveal>
        <div className="mt-16 md:mt-24 space-y-24 md:space-y-32">
          {EXPERIENCE_BLOCKS.map((block, i) => (
            <ExperienceBlock key={block.id} block={block} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Generations */

export function Generations() {
  return (
    <section
      id="generations"
      className="bg-[#D1DCE5]/40 grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow>Something for every generation</Eyebrow>
          <div className="font-display text-[#1B3022] leading-[0.95]">
            <p className="text-5xl md:text-6xl lg:text-7xl">One Destination.</p>
            <p className="text-5xl md:text-6xl lg:text-7xl italic text-[#8E4A35]">
              Three Generations.
            </p>
            <p className="text-5xl md:text-6xl lg:text-7xl">Hundreds of Memories.</p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {GENERATIONS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.12}>
              <div className="bg-[#F5F2E8] p-8 md:p-10 h-full flex flex-col min-h-[340px]">
                <h3
                  className="font-display text-3xl md:text-4xl mb-6"
                  style={{ color: group.accent }}
                >
                  {group.title}
                </h3>
                <div
                  className="w-12 h-px mb-6"
                  style={{ backgroundColor: group.accent }}
                />
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#1B3022]/80 text-[15px] flex items-center gap-2"
                    >
                      <span className="text-[#8E4A35] text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Childhood */

export function Childhood() {
  return (
    <section className="bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="light">Sports, play &amp; childhood</Eyebrow>
              <SectionTitle className="text-5xl md:text-6xl text-[#F5F2E8]">
                Let Childhood Happen{" "}
                <span className="italic text-[#D1DCE5]">Outdoors Again.</span>
              </SectionTitle>
              <p className="mt-6 text-[#F5F2E8]/70 text-lg leading-relaxed max-w-md">
                Today's children spend more time with screens than soil. At Vibrant Valley,
                let them:
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-px bg-[#F5F2E8]/15">
                {CHILDHOOD.map((item, i) => (
                  <div
                    key={item}
                    className="bg-[#1B3022] px-6 py-5 flex items-center gap-3 hover:bg-[#8E4A35] transition-colors duration-300 group"
                  >
                    <span className="font-display text-2xl text-[#8E4A35] group-hover:text-[#F5F2E8] w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#F5F2E8]/85 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <p className="mt-16 md:mt-20 font-display text-2xl md:text-3xl italic text-[#D1DCE5] max-w-2xl leading-relaxed">
            Let them touch soil, explore nature and discover a world beyond screens.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Stay */

export function Stay() {
  return (
    <section
      id="stay"
      className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow>Stay different</Eyebrow>
          <SectionTitle className="text-5xl md:text-6xl lg:text-7xl max-w-3xl">
            Wake Up to Birds{" "}
            <span className="italic text-[#8E4A35]">Instead of Traffic.</span>
          </SectionTitle>
          <p className="mt-6 text-[#1B3022]/70 text-lg max-w-xl leading-relaxed">
            Why stay in another conventional hotel room when your weekend can become an
            experience? Proposed stay concepts:
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[16/11] w-full overflow-hidden relative">
              <Img
                src={IMAGES.farmhouse}
                alt="Modern two-level farmhouse with balcony and terrace at dusk"
                fittingType="fill"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="flex flex-col h-full justify-center">
              {STAY_TYPES.map((item, i) => (
                <div
                  key={item.name}
                  className="py-5 border-b border-[#1B3022]/15 last:border-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xl text-[#8E4A35]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-[#1B3022]">
                        {item.name}
                      </h3>
                      <p className="text-[#1B3022]/65 text-[15px] mt-1">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Wellness */

export function Wellness() {
  return (
    <section
      id="wellness"
      className="bg-[#D1DCE5]/30 grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/3] w-full overflow-hidden order-2 lg:order-1 relative">
              <Img
                src={IMAGES.wellness}
                alt="Yoga deck overlooking a lotus pond at sunrise"
                fittingType="fill"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="order-1 lg:order-2">
              <Eyebrow>Wellness in nature</Eyebrow>
              <SectionTitle className="text-5xl md:text-6xl">
                Sometimes Luxury Means{" "}
                <span className="italic text-[#8E4A35]">Silence.</span>
              </SectionTitle>
              <p className="mt-6 text-[#1B3022]/70 text-lg leading-relaxed max-w-md">
                Recharge through a proposed wellness environment featuring:
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {WELLNESS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#1B3022]/80"
                  >
                    <span className="text-[#8E4A35] mt-1 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-l-2 border-[#8E4A35] pl-5">
                <p className="font-display text-2xl md:text-3xl italic text-[#1B3022]">
                  Switch off your phone.
                </p>
                <p className="font-display text-2xl md:text-3xl italic text-[#8E4A35]">
                  Switch yourself back on.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Night */

export function Night() {
  return (
    <section className="relative bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Img
          src={IMAGES.night}
          alt="Campfire under a star-filled sky"
          fittingType="fill"
        />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow tone="light">When the sun goes down, the experience continues</Eyebrow>
          <SectionTitle className="text-5xl md:text-6xl text-[#F5F2E8] max-w-3xl">
            Vibrant Valley doesn't end{" "}
            <span className="italic text-[#D1DCE5]">at sunset.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F2E8]/15">
          {NIGHT.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.05}>
              <div className="bg-[#1B3022] p-6 md:p-8 flex flex-col items-start gap-3 hover:bg-[#8E4A35] transition-colors duration-300">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[#F5F2E8]/90 text-[15px]">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 font-display text-2xl md:text-3xl italic text-[#D1DCE5] max-w-2xl leading-relaxed">
            Create memories your family will talk about long after the weekend ends.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Food */

export function Food() {
  return (
    <section className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div>
              <Eyebrow>Shuddh Desi Food</Eyebrow>
              <SectionTitle className="text-5xl md:text-6xl">
                Food With a <span className="italic text-[#8E4A35]">Story Behind It.</span>
              </SectionTitle>
              <p className="mt-6 text-[#1B3022]/70 text-lg leading-relaxed max-w-md">
                Complete your nature experience with food inspired by the farm and village.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {FOOD.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#1B3022]/80"
                  >
                    <span className="text-[#8E4A35] mt-1 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <Img
                src={IMAGES.food}
                alt="Farm-to-table organic Gujarati food"
                fittingType="fill"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Events */

export function Events() {
  return (
    <section className="bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow tone="light">Celebrate differently</Eyebrow>
          <SectionTitle className="text-5xl md:text-6xl text-[#F5F2E8] max-w-3xl">
            Turn Important Days Into{" "}
            <span className="italic text-[#D1DCE5]">Experiences.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <p className="text-[#F5F2E8]/70 text-lg mb-8">
              Vibrant Valley is envisioned as a destination for:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F2E8]/15">
              {EVENT_TYPES.map((item) => (
                <div
                  key={item}
                  className="bg-[#1B3022] p-5 text-[#F5F2E8]/85 text-sm text-center hover:bg-[#8E4A35] transition-colors duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5">
            <div className="bg-[#F5F2E8] p-8 md:p-10 h-full">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8E4A35] mb-5">
                Supported by proposed facilities
              </p>
              <ul className="space-y-3">
                {EVENT_FACILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#1B3022]/85 text-[15px] border-b border-[#1B3022]/10 pb-3 last:border-0"
                  >
                    <span className="text-[#8E4A35]">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Sustainability */

export function Sustainability() {
  return (
    <section
      id="grow"
      className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow>A valley that thinks green</Eyebrow>
          <SectionTitle className="text-5xl md:text-6xl lg:text-7xl max-w-3xl">
            Sustainability You Can{" "}
            <span className="italic text-[#8E4A35]">Experience.</span>
          </SectionTitle>
          <p className="mt-6 text-[#1B3022]/70 text-lg max-w-xl">
            Proposed initiatives include:
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1B3022]/15">
          {SUSTAINABILITY.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.05}>
              <div className="bg-[#F5F2E8] p-8 flex flex-col items-center text-center gap-3 hover:bg-[#D1DCE5]/40 transition-colors duration-300">
                <span
                  className="text-3xl float-icon"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {item.icon}
                </span>
                <span className="text-[#1B3022] text-[15px] font-medium">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-display text-2xl md:text-3xl italic text-[#1B3022]/70">
              Children shouldn't only read about sustainability.
            </p>
            <p className="font-display text-3xl md:text-4xl text-[#8E4A35] mt-1">
              They should experience it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Blackbuck */

export function Blackbuck() {
  return (
    <section className="relative bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Img
                src={IMAGES.blackbuck}
                alt="A blackbuck in golden grassland near Velavadar at sunset"
                fittingType="fill"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#F5F2E8]/15" />
            </div>
          </Reveal>

          <div className="relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8E4A35]/15 border border-[#8E4A35]/40 text-[#D1DCE5] mb-6">
                <MapPin size={14} className="text-[#D1DCE5]" />
                <span className="text-[11px] uppercase tracking-[0.25em]">
                  Velavadar Blackbuck Century
                </span>
              </span>
              <Eyebrow tone="light">Close to the Land of the Blackbuck</Eyebrow>
              <SectionTitle className="text-4xl md:text-5xl lg:text-6xl text-[#F5F2E8]">
                A Distinctive{" "}
                <span className="italic text-[#D1DCE5]">Nature Identity.</span>
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 text-[#F5F2E8]/75 text-lg leading-relaxed max-w-xl">
                Located near the{" "}
                <span className="text-[#D1DCE5]">Velavadar Blackbuck landscape</span>,
                Vibrant Valley celebrates the ecology and natural character of the region
                through responsible nature experiences, bird watching and environmental
                education.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 font-display text-xl md:text-2xl italic text-[#8E4A35] max-w-xl leading-relaxed border-l-2 border-[#8E4A35] pl-5">
                A setting that creates a completely different identity from a conventional
                weekend-home development.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- YourLand */

export function YourLand() {
  return (
    <section className="bg-[#F5F2E8] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow>Your own farm plot</Eyebrow>
          <p className="text-[#1B3022]/60 text-lg mb-2">At the centre of everything:</p>
          <SectionTitle className="text-6xl md:text-7xl lg:text-8xl">
            YOUR OWN <span className="italic text-[#8E4A35]">LAND.</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="aspect-[16/11] w-full overflow-hidden relative">
              <Img
                src={IMAGES.plot}
                alt="Expansive green farm plot landscape"
                fittingType="fill"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="text-[#1B3022]/75 text-lg leading-relaxed mb-8">
                A place where you can potentially:
              </p>
              <ul className="space-y-4">
                {LAND_BENEFITS.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-4 text-[#1B3022]/85 text-[16px]"
                  >
                    <span className="text-2xl w-9 text-center">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-l-2 border-[#8E4A35] pl-5">
                <p className="font-display text-xl md:text-2xl italic text-[#1B3022] leading-relaxed">
                  And instead of owning an isolated plot, you become part of a larger
                  destination ecosystem.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- WhyVibrantValley */

export function WhyVibrantValley() {
  return (
    <section className="bg-[#1B3022] grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <Eyebrow tone="light">Why Vibrant Valley?</Eyebrow>
        </Reveal>

        <div className="mt-12 space-y-px bg-[#F5F2E8]/15">
          {COMPARISON.map((row, i) => (
            <Reveal key={row.gives} delay={i * 0.08}>
              <div className="bg-[#1B3022] py-7 md:py-9 px-4 md:px-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-[#F5F2E8]/50 text-sm md:text-base md:w-56 shrink-0">
                  {row.source} gives you
                </span>
                <span className="font-display text-3xl md:text-5xl text-[#D1DCE5] tracking-wide">
                  {row.gives}.
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F5F2E8]">
              VIBRANT VALLEY BRINGS THEM{" "}
              <span className="italic text-[#8E4A35]">TOGETHER.</span>
            </p>
            <p className="mt-6 text-[#F5F2E8]/60 text-sm md:text-base tracking-[0.15em] uppercase">
              Land + Farming + Resort + Adventure + Wellness + Community + Nature
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Membership */

export function Membership() {
  return (
    <section className="bg-[#D1DCE5]/30 grain-overlay py-24 md:py-36 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <Eyebrow>Owner privileges</Eyebrow>
            <SectionTitle className="text-5xl md:text-6xl">
              Ownership That Feels Like{" "}
              <span className="italic text-[#8E4A35]">Membership.</span>
            </SectionTitle>
            <p className="mt-6 text-[#1B3022]/70 text-lg leading-relaxed max-w-md">
              Eligible plot owners can be offered a proposed:
            </p>
            <div className="mt-6 inline-block border border-[#8E4A35] px-6 py-4">
              <p className="font-display text-2xl md:text-3xl text-[#8E4A35]">
                3-Year Vibrant Valley Privilege Membership
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#1B3022]/60 mb-6">
              Benefits may include
            </p>
            <div className="grid grid-cols-2 gap-px bg-[#1B3022]/15">
              {MEMBERSHIP_BENEFITS.map((item) => (
                <div
                  key={item}
                  className="bg-[#F5F2E8] p-6 flex items-center gap-3 hover:bg-[#8E4A35] hover:text-[#F5F2E8] transition-colors duration-300 group"
                >
                  <span className="text-[#8E4A35] group-hover:text-[#F5F2E8]">✦</span>
                  <span className="text-[#1B3022]/85 group-hover:text-[#F5F2E8] text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#1B3022]/55 text-sm italic">
              *Final membership inclusions and conditions will be governed by applicable
              offer terms.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- FinalCall */

export function FinalCall({ onBookClick }) {
  return (
    <section
      id="contact"
      className="bg-[#F5F2E8] grain-overlay py-24 md:py-40 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <Eyebrow>Final call</Eyebrow>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1B3022] leading-[1.02]">
            Don't just see it online.{" "}
            <span className="italic text-[#8E4A35]">Come experience it.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {IMAGINE_LINES.map((line, i) => (
            <Reveal key={line} delay={i * 0.06}>
              <p
                className={`font-display text-xl md:text-2xl leading-relaxed ${
                  i === IMAGINE_LINES.length - 1
                    ? "text-[#8E4A35] italic"
                    : "text-[#1B3022]/70"
                }`}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 border-t border-[#1B3022]/15 pt-12">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1B3022] leading-tight">
              Then imagine having your own piece of land within this ecosystem.
            </p>
            <div className="mt-8 space-y-1">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1B3022]">
                OWN A PIECE OF NATURE.
              </p>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#8E4A35] italic">
                LIVE THE EXPERIENCE.
              </p>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1B3022]">
                LEAVE A LEGACY.
              </p>
            </div>
            <button
              onClick={onBookClick}
              className="mt-10 px-10 py-5 bg-[#8E4A35] text-white text-[13px] uppercase tracking-[0.25em] hover:bg-[#1B3022] transition-colors duration-300"
            >
              Book Your Site Experience
            </button>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 text-[#1B3022]">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 hover:text-[#8E4A35] transition-colors"
              >
                <span className="text-[#8E4A35]">📞</span>
                <span className="font-display text-2xl">{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#8E4A35] transition-colors"
              >
                <span className="text-[#8E4A35]">🌐</span>
                <span className="font-display text-2xl">{CONTACT.websiteLabel}</span>
              </a>
            </div>

            <p className="mt-6 text-[#1B3022]/60 text-sm uppercase tracking-[0.2em]">
              {CONTACT.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

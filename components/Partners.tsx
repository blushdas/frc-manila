"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Saucony PH", logo: "/logos/saucony.svg" },
  { name: "Prime Ape Club Marikina", logo: "/logos/prime-ape-club.svg" },
  { name: "RVCA", logo: "/logos/rvca.svg" },
  { name: "Allbirds", logo: "/logos/allbirds.svg" },
  { name: "St. Ali Coffee", logo: "/logos/st-ali.svg" },
  { name: "Single Origin", logo: "/logos/single-origin.png" },
  { name: "The Westin Manila", logo: "/logos/the-westin-manila.svg" },
  { name: "Kultura Filipino", logo: "/logos/kultura-filipino.svg" },
  { name: "startup.ph", logo: "/logos/startup-ph.svg" },
  { name: "Kaskasan Buddies", logo: "/logos/kaskasan-buddies.svg" },
  { name: "FHMoms", logo: "/logos/fhmoms.svg" },
  { name: "MBT", logo: "/logos/mbt.png" },
  { name: "Pretty Huge Gym", logo: "/logos/pretty-huge-gym.png" },
  { name: "Haraya Residences", logo: "/logos/haraya-residences.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "DJI", logo: "/logos/dji.svg" },
  { name: "Sun Life", logo: "/logos/sun-life.png" },
  { name: "Bitget", logo: "/logos/bitget.svg" },
  { name: "MotionRx", logo: "/logos/motionrx.png" },
];

const VISIBLE_COUNT = 12;

function PartnerLogo({ p }: { p: (typeof partners)[number] }) {
  return (
    <div className="flex items-center justify-center h-10 md:h-14 group cursor-default">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.logo}
        alt={p.name}
        className="max-h-full max-w-full w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
      />
    </div>
  );
}

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".partners-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const visible = partners.slice(0, VISIBLE_COUNT);
  const rest = partners.slice(VISIBLE_COUNT);

  return (
    <section ref={sectionRef} className="bg-black py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="partners-header mb-16" style={{ opacity: 0 }}>
          <p
            className="text-white/30 uppercase text-sm tracking-widest mb-4"
            style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.2em" }}
          >
            Our Partners
          </p>
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "var(--font-koulen), Koulen, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.85,
              letterSpacing: "0.03em",
            }}
          >
            BUILT WITH THE BEST
          </h2>
        </div>

        {/* Static grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-14">
          {visible.map((p) => (
            <PartnerLogo key={p.name} p={p} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-14 pt-10 md:pt-14">
                  {rest.map((p) => (
                    <PartnerLogo key={p.name} p={p} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-16">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="uppercase text-sm tracking-widest text-white/40 hover:text-white transition-colors duration-300"
                style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.15em" }}
              >
                {expanded ? "Show Less" : `View All Partners (${partners.length})`}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

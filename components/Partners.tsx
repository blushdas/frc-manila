"use client";

import { useEffect, useRef } from "react";
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
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const doubled = [...partners, ...partners, ...partners, ...partners];

  return (
    <section ref={sectionRef} className="bg-black py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="partners-header" style={{ opacity: 0 }}>
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
      </div>

      {/* Single marquee slider */}
      <div className="overflow-hidden">
        <div
          className="flex items-center gap-12 md:gap-20 py-8"
          style={{
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-8 md:h-12 max-w-[104px] md:max-w-[136px] group cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-full max-w-full w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

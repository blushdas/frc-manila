export default function EventsCalendar() {
  return (
    <section
      aria-labelledby="event-calendar-title"
      className="overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 gap-5 border-t border-white/10 pt-6 md:grid-cols-12 md:items-end md:gap-10">
          <p
            className="text-xs uppercase text-white/35 md:col-span-4"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              letterSpacing: "0.24em",
            }}
          >
            Upcoming Runs
          </p>

          <div className="md:col-span-8">
            <h2
              id="event-calendar-title"
              className="uppercase text-white"
              style={{
                fontFamily: "var(--font-koulen), Koulen, sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                lineHeight: 0.84,
                letterSpacing: "0.03em",
              }}
            >
              Event Calendar
            </h2>
            <p
              className="mt-4 max-w-xl text-base leading-relaxed text-white/50 md:text-lg"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Pick your next run and meet the community at the starting line.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-6 md:mt-14 md:px-12">
        <div className="overflow-hidden rounded-[4px] border border-white/10 bg-[oklch(0.19_0.006_265)] shadow-[0_28px_80px_rgba(0,0,0,0.5)]">
          <iframe
            src="https://luma.com/embed/calendar/cal-8SuDoLU5jUzRSNz/events"
            width="100%"
            frameBorder="0"
            title="FRC Manila upcoming events calendar"
            className="block h-[560px] w-full sm:h-[640px] lg:h-[720px]"
            style={{
              backgroundColor: "oklch(0.19 0.006 265)",
              colorScheme: "dark",
            }}
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}

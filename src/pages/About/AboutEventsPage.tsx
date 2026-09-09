import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Calendar, ArrowLeft, Clock, Tag, ArrowUpRight } from "lucide-react";
import heroBg from "../../assets/images/hero-about-bg.png";
import EventUsAdmissionCrop from "../../assets/EventUsAdmissionCrop.png";
import BookerClub from "../../assets/BookerClub.png";
import ToranlhaRunningCupCrop from "../../assets/ToranlhaRunningCupCrop.png";
import CTASection from "../Home/whySection/whyChooseExplore/CTASection";

export interface EventItem {
  id: number | string;
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  tags: string[];
  status: "Upcoming" | "Past";
  href: string;
}

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 1,
    image: EventUsAdmissionCrop,
    title: "Grand US Admission Day",
    description:
      "We recently organized Grand USA Admission day with Top 10 US based Universities participating and engaging with our Students. Highlights: On the Spot I20 Eligibility Test, Scholarships.",
    date: "Fri, Dec 19, 2025",
    time: "3:45 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/grand-us-admission-day",
  },
  {
    id: 2,
    image: BookerClub,
    title: "Rio Carnival 2026 - EventMX",
    description:
      "Prepare to be swept away by the rhythm and spectacle of the Rio Carnival 2026, the planet's biggest and most exhilarating party! For five days and nights, the city of Rio de Janeiro transforms into a non-stop celebration of music, dance, and vibrant energy.",
    date: "Wed, Dec 17, 2025",
    time: "5:17 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/rio-carnival-2026",
  },
  {
    id: 3,
    image: ToranlhaRunningCupCrop,
    title: "Marketing Event",
    description:
      "We regularly participate in education seminars and fairs for larger audience. Also, we invest heavily in promoting Australian Education in respective regions with local schools, colleges conducting regular workshop and presentations.",
    date: "Fri, Dec 26, 2025",
    time: "6:50 PM",
    tags: ["General"],
    status: "Past",
    href: "/explore-event/marketing-event",
  },
];

export const AboutEventsPage: React.FC = () => {
  const navigate = useNavigate();
  const categories = ["All", "General"];
  const timeOptions = ["Upcoming", "Past", "All Events"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Upcoming");

  const filteredEvents = useMemo(() => {
    return INITIAL_EVENTS.filter((e) => {
      const categoryMatch =
        activeCategory === "All" || e.tags.includes(activeCategory);
      const timeMatch =
        timeFilter === "All Events" || e.status === timeFilter;
      return categoryMatch && timeMatch;
    });
  }, [activeCategory, timeFilter]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 1. Hero Banner Section */}
      <section
        className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[440px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto flex min-h-[360px] sm:min-h-[400px] md:min-h-[440px] max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 pt-28 sm:pt-32 text-white">
          {/* Back Navigation Link */}
          <button
            onClick={() => navigate(-1)}
            className="mb-3 inline-flex w-fit items-center gap-1.5 text-sm sm:text-base text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            ← Back
          </button>

          {/* Hero Banner Title */}
          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight text-white tracking-tight">
            Upcoming &amp; Past Events
          </h1>

          {/* Hero Banner Subtitle */}
          <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal">
            Join us for exclusive education fairs, workshops, and seminars designed to help you achieve your study abroad dreams.
          </p>
        </div>
      </section>

      {/* 2. Main Page Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16">
        {/* Section Header Block */}
        <div className="mb-8">
          {/* Accent Line & Tag */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-11 h-[3px] bg-[#0084CA] rounded-full inline-block" />
            <span className="text-[#FFB800] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
              CONNECTING MINDS THROUGH EXPERIENCES
            </span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-[#0084CA] font-extrabold text-3xl sm:text-4xl md:text-[42px] tracking-tight leading-tight mb-4">
            Events That Inspire, Inform, and Empower
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#475569] text-base sm:text-[17px] leading-relaxed max-w-4xl font-normal">
            From educational seminars to interactive workshops and global exposure events, our programs are designed to guide students with clarity.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
          {/* Left Category Filter Pills */}
          <div className="flex items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0084CA] text-white shadow-sm"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Status Filter Select */}
          <div className="relative">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="appearance-none rounded-xl border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm font-medium text-gray-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0084CA]/30 cursor-pointer"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Events Cards Grid OR Empty State */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                to={event.href}
                className="group grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-md hover:border-sky-100"
              >
                {/* Event Thumbnail */}
                <div className="relative h-48 md:h-full w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Event Information */}
                <div className="flex flex-col justify-between py-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0084CA] transition-colors leading-snug flex items-center gap-1.5">
                        {event.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0084CA]" />
                      </h3>
                      <div className="shrink-0 text-right text-xs text-gray-500 font-medium leading-tight">
                        <div className="flex items-center gap-1 justify-end text-gray-600 font-semibold mb-0.5">
                          <Clock className="w-3.5 h-3.5 text-[#0084CA]" />
                          {event.time}
                        </div>
                        <div>{event.date}</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0084CA]"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State Display (Matches Screenshot 2) */
          <div className="flex flex-col items-center justify-center py-20 md:py-24 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#0084CA]">
              <Calendar className="h-7 w-7 text-[#0084CA]" />
            </div>
            <p className="text-gray-600 font-medium text-base sm:text-lg">
              {timeFilter === "Upcoming"
                ? "No upcoming events at this time."
                : "No events found matching your criteria."}
            </p>
          </div>
        )}
      </section>

      {/* 3. Ready to Get Started CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutEventsPage;

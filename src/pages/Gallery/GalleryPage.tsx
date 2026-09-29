import { useState, useEffect } from "react";
import SectionHeading from "../Home/Components/SectionHeadingProps";
import { apiClient } from "../../services/apiClient";

export interface GalleryItem {
  id: string | number;
  title: string;
  image: string;
  category?: string;
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 1,
    title: "Student Counseling Session",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    category: "Counseling",
  },
  {
    id: 2,
    title: "University Education Fair",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80",
    category: "Events",
  },
  {
    id: 3,
    title: "Visa Success Celebrations",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    category: "Success Stories",
  },
  {
    id: 4,
    title: "Australia Orientation Seminar",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
    category: "Seminars",
  },
  {
    id: 5,
    title: "Pre-departure Briefing Session",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
    category: "Briefings",
  },
  {
    id: 6,
    title: "Student Farewell Gathering",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    category: "Events",
  },
];

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await apiClient.get<any[]>('/gallery');
        if (Array.isArray(data) && data.length > 0) {
          const list = data.map((item, idx) => ({
            id: item._id || item.id || idx + 1,
            title: item.title || item.caption || 'Gallery Image',
            image: item.image || item.imageUrl || item.url || DEFAULT_GALLERY[idx % DEFAULT_GALLERY.length].image,
            category: item.category || 'Events',
          }));
          setItems(list);
        }
      } catch (err) {
        console.error('Failed to load gallery items:', err);
      }
    }
    loadGallery();
  }, []);

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category || "Events")))];
  const filtered = selectedCategory === "All" ? items : items.filter((i) => i.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="section-heading-override">
        <SectionHeading
          headingOne="Gallery"
          title="Moments & Memories from Hima Aus"
          briefDesc="Explore photo highlights from our educational seminars, visa celebrations, university fairs, and student success stories."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#248bc7] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 text-[11px] font-bold bg-[#248bc7] rounded-full mb-2 uppercase tracking-wider">
                  {item.category || "Event"}
                </span>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

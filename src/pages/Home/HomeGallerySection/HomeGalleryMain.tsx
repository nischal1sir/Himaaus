import { useState, useEffect } from "react";
import SectionButton from "../Components/SectionButtonProps";
import SectionHeading from "../Components/SectionHeadingProps";
import { apiClient } from "../../../services/apiClient";

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
];

const HomeGalleryMain = () => {
  const [items, setItems] = useState<GalleryItem[]>(DEFAULT_GALLERY);

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
        console.error('Failed to load gallery items from API:', err);
      }
    }
    loadGallery();
  }, []);

  return (
    <>
      <div className="min-h-full max-w-full py-12 section-heading-override">
        <SectionHeading
          headingOne="Gallery"
          title="Moments from the Hima Aus journey"
          briefDesc="Click into any collection to open its story page and see full photo essays, itineraries and student tips."
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-[#248bc7] rounded-full mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold leading-snug">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <SectionButton
          to="/gallery"
          ButtonContent="View More Story"
        />
      </div>
    </>
  );
};

export default HomeGalleryMain;
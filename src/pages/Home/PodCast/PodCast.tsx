import { useState, useEffect } from "react";
import SectionHeading from "../Components/SectionHeadingProps";
import SectionButton from "../Components/SectionButtonProps";
import austriaposs from "../../../assets/Podcast/austrailiaPoss.jpg";
import RightPodcast from "../../../assets/Podcast/RightPodcast.jpg";
import Card from "./Components/Card";
import { apiClient } from "../../../services/apiClient";

export interface PodcastEpisode {
  id: string | number;
  src: string;
  title: string;
  videoId?: string;
}

const DEFAULT_PODCASTS: PodcastEpisode[] = [
  {
    id: 1,
    src: austriaposs,
    title: "Study in Australia, Southern Cross University, Access 2026 and More..",
    videoId: "2fo9FdN8fao",
  },
  {
    id: 2,
    src: RightPodcast,
    title: "Hima Aus Education X Hult Prize IOE, Pulchowk Campus",
    videoId: "AjKOW1ExvmQ",
  },
];

const PodCast = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>(DEFAULT_PODCASTS);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await apiClient.get<any[]>('/podcasts');
        if (Array.isArray(data) && data.length > 0) {
          const list = data.slice(0, 2).map((item, idx) => ({
            id: item._id || item.id || idx + 1,
            src: item.image || item.coverImage || item.thumbnail || (idx === 0 ? austriaposs : RightPodcast),
            title: item.title || item.name || 'Podcast Episode',
            videoId: item.videoId || item.youtubeId || item.videoUrl || '2fo9FdN8fao',
          }));
          setEpisodes(list);
        }
      } catch (err) {
        console.error('Failed to load podcasts from API:', err);
      }
    }
    loadPodcasts();
  }, []);

  return (
    <section className="min-h-screen max-w-full section-heading-override pt-5">
      <SectionHeading
        headingOne="Podcast"
        title="Featured Podcasts"
        briefDesc="Listen to our latest episodes on technology, innovation, career growth, and the future of education."
      />

      <div
        className="
        max-w-8xl mx-auto
        flex flex-col md:flex-row
        gap-6 lg:gap-10
        items-stretch
        mt-10 lg:mt-20
        px-4 sm:px-6 lg:px-16 xl:px-25
      "
      >
        {episodes.map((ep) => (
          <Card
            key={ep.id}
            src={ep.src}
            title={ep.title}
            videoId={ep.videoId}
          />
        ))}
      </div>

      <div className="pt-10 lg:pt-16 pb-10 px-4">
        <SectionButton
          ButtonContent="Explore All Podcast"
          to="all-podcast"
        />
      </div>
    </section>
  );
};

export default PodCast;
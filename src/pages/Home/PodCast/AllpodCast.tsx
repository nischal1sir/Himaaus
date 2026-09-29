import { memo, useState, useEffect } from "react";
import SectionHeading from "../Components/SectionHeadingProps";
import Card from "./Components/Card";

import third from "../../../assets/Podcast/third.jpg";
import four from "../../../assets/Podcast/four.jpg";
import austriaposs from "../../../assets/Podcast/austrailiaPoss.jpg";
import RightPodcast from "../../../assets/Podcast/RightPodcast.jpg";
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
  {
    id: 3,
    src: third,
    title: "Study in Australia exclusive, NAPS, Documentation and VISA !",
    videoId: "dO16CevGqb4",
  },
  {
    id: 4,
    src: four,
    title: "Get It Right about USA Application, Interview, Universities and Scholarships, life in USA and more",
    videoId: "ya84Kn26iZM",
  },
];

const AllpodCast = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>(DEFAULT_PODCASTS);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await apiClient.get<any[]>('/podcasts');
        if (Array.isArray(data) && data.length > 0) {
          const list = data.map((item, idx) => ({
            id: item._id || item.id || idx + 1,
            src: item.image || item.coverImage || item.thumbnail || DEFAULT_PODCASTS[idx % DEFAULT_PODCASTS.length].src,
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
    <section className="bg-gray-50 py-20 section-heading-override">
      <SectionHeading
        headingOne="Podcasts"
        title="Hima Aus Podcasts"
        briefDesc="Listen to expert discussions, interviews, and insights on technology, education, and career growth."
      />

      <div
        className="
        mx-auto mt-12
        grid max-w-7xl
        grid-cols-1 md:grid-cols-2
        gap-6 lg:gap-8
        px-4 sm:px-6 lg:px-12 xl:px-20
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
    </section>
  );
};

export default memo(AllpodCast);
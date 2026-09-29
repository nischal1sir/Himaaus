import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import initialTestimonials, { type Testimonial } from './data/testimonials.ts';
import TestimonialCard from './TestimonialCard.tsx';
import { apiClient } from '../../../../services/apiClient';

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const compute = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const update = () => setCount(compute());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function TestimonialsSection() {
  const [testimonialList, setTestimonialList] = useState<Testimonial[]>(initialTestimonials);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await apiClient.get<any[]>('/testimonials');
        if (Array.isArray(data) && data.length > 0) {
          const list: Testimonial[] = data.map((item) => ({
            quote: item.quote || item.content || item.review || '',
            name: item.name || item.studentName || 'Student',
            role: item.role || item.title || 'Student',
            course: item.course || item.program || item.degree || 'Study Abroad',
            university: item.university || item.institution || item.country || 'Australia',
            avatar: item.avatar || item.image || item.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
          }));
          setTestimonialList(list);
        }
      } catch (err) {
        console.error('Failed to load testimonials from API:', err);
      }
    }
    loadTestimonials();
  }, []);

  const totalCount = testimonialList.length;
  const perView = useVisibleCount();
  const maxIndex = Math.max(0, totalCount - perView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === maxIndex;
  const step = 100 / perView;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
          What Our Students Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
          Don&rsquo;t just take our word for it &mdash; hear from students who have successfully
          transformed their lives with our guidance.
        </p>

        <div className="relative mt-14 px-9 sm:px-12 lg:px-0">
          <button
            type="button"
            onClick={goPrev}
            disabled={isPrevDisabled}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 lg:-left-8 xl:-left-10"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * step}%)` }}
            >
              {testimonialList.map((t, i) => (
                <div key={t.name + i} className="shrink-0 px-2.5" style={{ flex: `0 0 ${step}%` }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={isNextDisabled}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 flex -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 lg:-right-8 xl:-right-10"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="mt-8 text-sm font-semibold text-brand-gold">
  {index + 1} / {maxIndex + 1}
</p>
      </div>
    </section>
  );
}
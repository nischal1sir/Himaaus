import { useState, useEffect } from 'react';
import { blogs as initialBlogs, type BlogPost } from '../blogsData';
import { BlogList } from './Bloglist';
import { apiClient } from '../../../services/apiClient';

function normalizeBlog(item: any, idx: number): BlogPost {
  return {
    id: typeof item.id === 'number' ? item.id : idx + 1,
    slug: item.slug || `blog-${item.id || idx}`,
    title: item.title || 'Untitled Post',
    excerpt: item.excerpt || item.summary || item.content?.slice(0, 150) || '',
    date: item.date || item.createdAt?.slice(0, 10) || new Date().toISOString().slice(0, 10),
    author: item.author || item.authorName || 'Himaaus',
    readTime: item.readTime || item.readingTime || '3 min read',
    category: item.category || 'General',
    image: item.image || item.imageUrl || item.coverImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
  };
}

export const Body1 = () => {
  const [blogList, setBlogList] = useState<BlogPost[]>(initialBlogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await apiClient.get<any[]>('/blogs');
        if (Array.isArray(data) && data.length > 0) {
          setBlogList(data.map((item, idx) => normalizeBlog(item, idx)));
        }
      } catch (err) {
        console.error('Failed to fetch blogs from API:', err);
      }
    }
    loadBlogs();
  }, []);

  const filteredBlogs = blogList.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || blog.category.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-6 py-2 rounded-full ${activeFilter === "All" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Educational")}
            className={`px-6 py-2 rounded-full ${activeFilter === "Educational" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            Educational
          </button>
          <button
            onClick={() => setActiveFilter("General")}
            className={`px-6 py-2 rounded-full ${activeFilter === "General" ? 'bg-[#0078bd] text-white' : 'bg-gray-100'}`}
          >
            General
          </button>
        </div>

        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full md:w-96 p-4 border border-gray-300 rounded-full focus:outline-none focus:border-[#0078bd]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <BlogList blogs={filteredBlogs} />
    </div>
  );
};
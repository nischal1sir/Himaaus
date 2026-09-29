import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../Components/SectionHeadingProps";
import { apiClient } from "../../../services/apiClient";

const DEFAULT_CATEGORIES = [
  {
    name: "General",
    questions: [
      {
        question: "Is an English language test mandatory for studying abroad?",
        answer: "It depends on the country. For most English-speaking destinations like Australia, you must submit a valid English test score to both the university and the visa office.",
      },
    ],
  },
  {
    name: "Scholarship & Cost",
    questions: [
      {
        question: "Is it easy to get a scholarship for study abroad?",
        answer: "Scholarships are competitive and offered by institutions, governments, or third parties. Eligibility depends on each provider's criteria.",
      },
      {
        question: "How much does the whole process cost?",
        answer: "There's no fixed amount. Costs vary by institution, program, and country. Hima Aus offers guidance on fee expectations during counseling.",
      },
    ],
  },
  {
    name: "Visa & Process",
    questions: [
      {
        question: "How long does the study abroad application process take?",
        answer: "It depends on offer letter issuance, English test, and visa processing, which can take 21–45 days after lodgement. Start at least 6 months before intake.",
      },
      {
        question: "What documents are required for a student visa application?",
        answer: "Commonly required: academic certificates, English test results, SOP, financial proof, and passport.",
      },
    ],
  },
];

export default function FAQSection() {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [activeCategoryName, setActiveCategoryName] = useState("General");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await apiClient.get<any[]>('/faqs');
        if (Array.isArray(data) && data.length > 0) {
          const grouped: Record<string, { question: string; answer: string }[]> = {};
          data.forEach((item) => {
            const cat = item.category || 'General';
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push({
              question: item.question || item.title || 'FAQ Question',
              answer: item.answer || item.content || '',
            });
          });
          const catList = Object.keys(grouped).map((catName) => ({
            name: catName,
            questions: grouped[catName],
          }));
          setCategories(catList);
          if (catList.length > 0) {
            setActiveCategoryName(catList[0].name);
          }
        }
      } catch (err) {
        console.error('Failed to load FAQs from API:', err);
      }
    }
    loadFaqs();
  }, []);

  // Find the full category object that matches the selected name
  const activeCategory = categories.find((c) => c.name === activeCategoryName);
  const questions = activeCategory ? activeCategory.questions : [];

  const isAllOpen = openQuestions.length === questions.length && questions.length > 0;

  function selectCategory(name: string) {
    setActiveCategoryName(name);
    setOpenQuestions([]); // reset when switching category
  }

  function toggleQuestion(index: number) {
    if (openQuestions.includes(index)) {
      // already open -> close it
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      // closed -> open it
      setOpenQuestions([...openQuestions, index]);
    }
  }

  function toggleExpandAll() {
    if (isAllOpen) {
      setOpenQuestions([]); // collapse everything
    } else {
      const allIndexes = questions.map((_, index) => index);
      setOpenQuestions(allIndexes); // expand everything
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="section-heading-override">
            
     <SectionHeading
     headingOne="FAQS"
     title="Frequently Asked Questions"
     briefDesc="Quick answers, neatly organized."
     />
        </div>

      {/* Expand all / Collapse all button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleExpandAll}
          className="text-sm font-medium text-[#248bc7] border rounded-lg px-4 py-2 hover:bg-slate-50"
        >
          {isAllOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Category buttons on the left */}
        <div className="w-full md:w-56 bg-slate-50 rounded-xl p-2 flex md:flex-col gap-1 shrink-0">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => selectCategory(category.name)}
              className={
                activeCategoryName === category.name
                  ? "text-left text-sm font-semibold px-4 py-3 rounded-lg bg-[#248bc7] text-white"
                  : "text-left text-sm font-semibold px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100"
              }
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Questions and answers on the right */}
        <div className="flex-1 space-y-3">
          {questions.map((item, index) => {
            const isOpen = openQuestions.includes(index);

            return (
              <div key={item.question} className="bg-slate-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-slate-800 text-sm">{item.question}</span>
                  <ChevronDown
                    className={
                      isOpen
                        ? "w-4 h-4 text-[#248bc7] shrink-0 rotate-180 transition-transform"
                        : "w-4 h-4 text-[#248bc7] shrink-0 transition-transform"
                    }
                  />
                </button>

                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-slate-500">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
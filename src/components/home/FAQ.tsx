import React, { useState } from "react";

type Faq = {
  id: number;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    id: 1,
    question: "What is Sundar Group?",
    answer:
      "Sundar Group is a diversified organization committed to sustainable development, quality services, and long-term growth across multiple sectors while creating positive social impact.",
  },
  {
    id: 2,
    question: "Which sectors does Sundar Group operate in?",
    answer:
      "Sundar Group operates across various sectors including real estate, hospitality, infrastructure, services, and social development initiatives.",
  },
  {
    id: 3,
    question: "What is Sundar Group’s vision?",
    answer:
      "Our vision is to build a responsible and future-ready organization that delivers value-driven growth while contributing positively to society and communities.",
  },
  {
    id: 4,
    question: "How does Sundar Group contribute to society?",
    answer:
      "Through focused CSR initiatives, Sundar Group works towards education, livelihood development, rural upliftment, and sustainable community growth.",
  },
  {
    id: 5,
    question: "How can we partner with Sundar Group?",
    answer:
      "You can connect with us through our official website or contact page to explore strategic partnerships, collaborations, and business opportunities.",
  },
];

const FaqSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Sundar Group, our values,
            operations, and commitment to growth and responsibility.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-3 md:p-5 text-left"
              >
                <span className="text-gray-900 font-medium">
                  {faq.question}
                </span>
                <span className="text-red-600 text-xl">
                  {activeId === faq.id ? "−" : "+"}
                </span>
              </button>

              {activeId === faq.id && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

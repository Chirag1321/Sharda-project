import React, { useState } from 'react';

const faqs = [
  {
    question: "How can I volunteer with Sharda Welfare Foundation?",
    answer: "You can volunteer by visiting our Contact Us page and filling out the form. Select 'Volunteer' in your message, and our team will get back to you with upcoming opportunities and orientations."
  },
  {
    question: "Where do my donations go?",
    answer: "100% of your donations go directly towards funding our programs: organizing health camps, providing educational materials for underprivileged children, and executing environmental drives like tree plantations. We maintain full transparency in our operations."
  },
  {
    question: "How do you select locations for Health Camps?",
    answer: "We partner with local community leaders, rural healthcare workers, and schools to identify areas with the least access to medical facilities. Our focus is on remote villages and underserved urban slums."
  },
  {
    question: "Can my organization partner with you?",
    answer: "Absolutely! We actively seek partnerships with NGOs, corporate CSR wings, and local businesses to maximize our impact. Please reach out to us via the Contact Us page with your organization's details."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-foundation-secondary tracking-[0.2em] uppercase mb-4">Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to some of the most common questions about our foundation, initiatives, and how you can help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border transition-all duration-300 overflow-hidden rounded-2xl ${
                openIndex === index 
                  ? 'border-foundation-secondary shadow-[0_10px_30px_rgba(233,84,124,0.15)]' 
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-foundation-secondary' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className={`w-6 h-6 ${openIndex === index ? 'text-foundation-secondary' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;

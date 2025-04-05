import React, { useState } from 'react';

const faqs = [
  {
    question: 'Are MERN based Websites secure?',
    answer: 'MERN based applications are secure and reliable. The framework allows the easy integration with secured hosting providers and devops environments. Such integrations ensure robust data security, device security management, and user data protection (secured signups and logins). We put the best efforts at securing our MERN web applications by implementing the necessary technologies.'
  },
  {
    question: 'Is there any difference between MEAN and MERN Stack?',
    answer: 'Yes, the main difference between MEAN and MERN stack is Angular vs React. MEAN uses Angular for the front end, while MERN uses React. React provides better flexibility and a large community, making it popular among developers.'
  },
  {
    question: 'What are the benefits of MERN Development?',
    answer: 'MERN development is fast, scalable, and offers end-to-end JavaScript-based development. It allows for easy integration with APIs, rapid development cycles, and a robust ecosystem of libraries and tools.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" p-6 bg-white flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">FAQs on MERN Stack Development</h2>
      <p className="text-gray-600 mb-8 text-center text-md md:text-lg max-w-5xl">MERN stack is a new entrant into the tech market. Understandably, there are numerous doubts and concerns revolving around it that affect the framework’s steady adoption. Here are some common queries to help you with the crucial information regarding MERN stack web development.</p>
      <div className="w-full max-w-5xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-4 text-xl ${openIndex === index ? 'bg-green-100 text-green-600/80' : 'hover:bg-gray-100'}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </div>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 text-md md:text-lg font-semibold">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 


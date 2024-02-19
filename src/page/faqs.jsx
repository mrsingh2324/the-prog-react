// FAQs.js
import React from 'react';

const FAQs = () => {
  const faqs = [
    { question: 'What is the purpose of this website?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team through the Contact Us page.' },
    // Add more FAQs related to edutech company's products
    { question: 'How do I access course materials?', answer: 'Once you enroll, you will get instant access to all course materials.' },
    { question: 'Are there any prerequisites for the courses?', answer: 'Prerequisites vary by course. Please check the course details for specific requirements.' },
    // Add more FAQs as needed
  ];

  return (
    <section className="faqs">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="faqs_list space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq_item">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

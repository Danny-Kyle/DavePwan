import Image from 'next/image';
import React from 'react';
import { FaqImg } from './assets';

const FAQSection = ({ faqs }) => {
  return (
    <div className="pb-14 rounded-lg gap-48 flex flex-row justify-evenly">
      <div className="space-y-4 space-x-4">
        {faqs.map((faq, index) => (
          <details key={index} className="border-b pb-2">
            <summary className="text-lg font-medium cursor-pointer">{faq.question}</summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-4 w-6/12 h-full bg-gray-300 flex items-center justify-center">
        <Image src={FaqImg} alt='faqimg' width={1000} height={200}/>
      </div>
    </div>
  );
};

export default FAQSection;
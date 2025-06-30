import { contactBg } from "@/features/assets";
import ContactSection from "@/features/ContactSection";
import FAQSection from "@/features/FAQSection";
import Link from "next/link";
import React from "react";

const index = () => {
  const faqs = [
    {
      question: "What is PWAN Elite?",
      answer:
        "Absolutely, we offer flexible payment plans — monthly or quarterly — to make owning land easy and affordable for everyone.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Absolutely, we offer flexible payment plans — monthly or quarterly — to make owning land easy and affordable for everyone.",
    },
    {
      question: "Can I buy property from abroad (diaspora)?",
      answer: "Yes, you can purchase property remotely with our support.",
    },
    {
      question: "How long does allocation take after payment?",
      answer:
        "Allocation typically takes 7-14 business days after payment confirmation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans">
      <div
        className="bg-cover bg-center h-[34rem] -mt-18 flex flex-col justify-center items-center text-center p-12"
        style={{ backgroundImage: `url(${contactBg.src})` }}
      >
        <h1 className="text-6xl text-white font-semibold">Contact Us</h1>
        <p className="max-w-2xl text-white mt-4">
          Exposing clients to goldmine that abounds in land and housing globally
          and spreading empowerment through real estate opportunities.
        </p>
      </div>

      <section>
        <main className="max-w-7xl mx-auto p-4">
          <header className="p-4 flex justify-center">
            <div className="text-red-600 flex items-center">
              <span className="mr-2">✨</span> Connect with our team
            </div>
          </header>

          <h1 className="text-6xl text-wrap font-semibold text-center mb-8">
            We are always ready to help you and answer your questions
          </h1>
        </main>
            <ContactSection />
      </section>

      <section className="bg-gray-200">
        <main className="max-w-7xl mx-auto px-4 pt-4">
          <header className="p-4 flex justify-center">
          <div className="text-red-600 flex items-center">
            <span className="mr-2">✨</span> Frequently Asked Questions
          </div>
        </header>
          <h1 className="text-5xl font-semibold text-center capitalize mb-8">
            Your Common Queries Answered with Additional FAQs
          </h1>
            <FAQSection faqs={faqs} />
        </main>
      </section>
    </div>
  );
};

export default index;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-200 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-lg font-bold font-league-spartan text-base-content py-4 px-6 focus:outline-none"
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="font-league-spartan text-base text-base-content/80 px-6 pb-4">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <div id="faq" className="flex flex-col h-full bg-base-100 rounded-3xl p-2 lg:p-4">
      <div className="text-center mb-8">
        <h2 className="font-lobster font-bold text-3xl sm:text-4xl text-accent mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-league-spartan text-lg text-base-content/80">
          Answers to common queries about our popcorn.
        </p>
      </div>

      <div className="space-y-4 flex-grow">
        {[
          {
            question: "Where do you source your popcorn kernels?",
            answer: "We procure premium-quality corn kernels from trusted suppliers in India, ensuring each batch meets our stringent quality standards for freshness and taste."
          },
          {
            question: "How is your popcorn prepared?",
            answer: "Our popcorn is handcrafted in small batches using hygienic processes and natural ingredients, ensuring a delightful snacking experience every time."
          },
          {
            question: "How can I place an order?",
            answer: "Simply select your favorite flavors on our website and click the \"Order via WhatsApp\" button. This will open a pre-filled message in WhatsApp, making the ordering process quick and convenient."
          },
          {
            question: "What are the delivery timelines?",
            answer: "We typically dispatch orders within 24-48 hours. Delivery times vary based on location: 2-3 working days for nearby regions and up to 5-7 working days for more distant areas."
          },
          {
            question: "What if I receive a damaged order?",
            answer: "Customer satisfaction is our priority. If you encounter any issues with your order, please contact us within 7 days of delivery, and we'll promptly address your concerns."
          }
        ].map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
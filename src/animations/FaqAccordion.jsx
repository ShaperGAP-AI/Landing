import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../data/faqData";

const ChevronIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-5 h-5 transition-transform duration-300"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export default function FaqAccordion() {
  // State to keep track of the currently open question index.
    const [openIndex, setOpenIndex] = useState(0); // Start with the first question open.

    // Animation variants for the answer container.
    const answerVariants = {
        hidden: { opacity: 0, height: 0, y: -10 },
        visible: {
            opacity: 1,
            height: 'auto',
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 relative z-30">
            {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="mb-4 overflow-hidden rounded-xl bg-white text-background">
                        {/* Clickable header to toggle the accordion item */}
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full text-left flex justify-between items-center p-5 font-semibold"
                        >
                            <span>{item.question}</span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronIcon />
                            </motion.div>
                        </button>

                        {/* AnimatePresence handles the animation when the component is added or removed from the DOM */}
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={answerVariants}
                                    className="px-5"
                                >
                                    <p className="pb-5 text-slate-600">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
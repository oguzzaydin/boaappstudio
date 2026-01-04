"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 mt-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-4 text-blue-600">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-lg">
                        Quick answers about our apps, privacy approach, and monetization.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${openIndex === index
                                ? "border-blue-200 shadow-lg shadow-blue-50 ring-1 ring-blue-100"
                                : "border-slate-200 hover:border-slate-300"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? "text-blue-700" : "text-slate-800"}`}>
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? "transform rotate-180 text-blue-500" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// End of component

import { useState } from "react";
import frequentlyAsked from '../../data/FAQ';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const faqs: FAQItem[] = frequentlyAsked;

    const handleTabClick = (tabId:number): void => {
        setActiveTab(tabId === activeTab ? null : tabId);
    };

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-[1000px]">
                <h3 className="text-center mb-8">Frequently Asked Questions</h3>
                <div className="border-t border-gray-500">
                    {faqs.map((faq, index) => (
                        <>
                            <div key={index} onClick={() => handleTabClick(index)} className="border-b border-purple-haze">
                                <div className="flex justify-between p-4 hover:cursor-pointer hover:bg-purple-2">
                                    <p>{faq.question}</p>
                                    {activeTab === index 
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    }
                                </div>
                                {activeTab === index &&
                                    <div className="p-4">{faq.answer}</div>
                                }
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
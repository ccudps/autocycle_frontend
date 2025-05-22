import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "What is AutoCycle?",
      answer: "AutoCycle is a platform that connects brands for sustainable collaborations. We transform recycling efforts into powerful brand assets by matching companies based on material technical requirements, brand placement, and advertising value."
    },
    {
      question: "How does the matchmaking work?",
      answer: "Our matchmaking algorithm analyzes your company's materials and sustainability goals, then identifies potential collaboration partners with complementary needs and values. We consider technical requirements, brand alignment, and potential marketing value to create meaningful partnerships."
    },
    {
      question: "What is the next step after matchmaking?",
      answer: "After finding a potential match, we facilitate an introduction between both parties. Our team helps guide the initial discussions, assists with planning the collaboration project, and provides support throughout the implementation process to ensure a successful partnership."
    }
  ];

  return (
    <>
      <div className="relative min-h-[85px] w-full max-w-[1106px] font-normal mt-[129px] max-md:max-w-full max-md:mt-10">
        <div className="min-w-60 w-[486px]">
          <h2 className="w-full text-[41px] text-[rgba(57,48,45,1)] leading-none max-md:max-w-full">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <div className="min-h-[270px] w-full max-w-[1106px] mt-[29px] pt-[15px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border w-full mt-[19px] border-black border-solid max-md:max-w-full"
              >
                <AccordionTrigger className="flex min-h-11 w-full items-center justify-center flex-wrap p-[22px] max-md:max-w-full max-md:px-5">
                  <div className="self-stretch flex min-w-60 items-stretch text-2xl text-[#39302D] font-normal leading-none flex-1 shrink basis-[11px] my-auto max-md:max-w-full">
                    <div className="font-normal min-w-60">
                      {item.question}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-[22px] py-4 text-lg text-[#39302D]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqSection;

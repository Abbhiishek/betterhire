"use client"
import { faqs } from '@/data/faq';
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TypographyH1, TypographyH2 } from '../ui/typography';

function FrequentlyAskedQuestionSection() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 pb-32">
      <TypographyH2 className="mb-2 text-center font-mono">Frequently Asked Questions</TypographyH2>
      <div className="space-y-4 w-full">
        <Accordion variant="splitted" className='w-full dark:text-slate-400'>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} aria-label={faq.question}
                classNames={{
                  title: 'text-slate-400',
                }}
                title={faq.question} className='bg-transparent rounded-md w-full dark:text-[#31f745] text-[#15b312]'>
                {faq.answer}
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestionSection;

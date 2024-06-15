import React from "react";
import { data } from "./Data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqList = () => {
  return (
    <div className="basis-[50%]">
      <Accordion type="single" collapsible>
        {data.map((item, i) => {
          return (
            <AccordionItem key={i} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-left">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqList;

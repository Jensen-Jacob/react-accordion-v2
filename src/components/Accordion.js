import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map(
        (
          faq,
          index // Here key also can be used instead of index
        ) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            num={index + 1}
            title={faq.title}
            key={index}
          >
            {faq.text}
          </AccordionItem>
        )
      )}
    </div>
  );
}

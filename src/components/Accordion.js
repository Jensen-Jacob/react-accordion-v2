import AccordionItem from "./AccordionItem";
// import "../index.css";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {/* <AccordionItem num={num} title={title} text={text} /> */}
      {faqs.map(
        (
          faq,
          index // Here key also can be used instead of index
        ) => (
          <AccordionItem
            num={index + 1}
            title={faq.title}
            text={faq.text}
            key={index}
          />
        )
      )}
    </div>
  );
}

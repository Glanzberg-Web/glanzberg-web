import { frequentlyAsked } from "@/lib/site";

export default function FAQ() {
  return (
    <div className="faq-list">
      {frequentlyAsked.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}<span className="faq-plus" aria-hidden="true">+</span></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

import { useState } from "react";

const Question = ({ question }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setisOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};
export default Question;

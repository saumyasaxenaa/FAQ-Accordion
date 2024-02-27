import { useEffect, useState } from "react";
import "./styles.css";

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes));
  };
  return (
    <>
      <h1>Quote Generator</h1>
      <main>
        <section className="quote">
          <button onClick={getNewQuote}>New Quote</button>
          <h3>
            <span>"</span>
            {quote?.text}
          </h3>
          <i>- {quote?.author}</i>
        </section>
      </main>
    </>
  );
};
export default QuoteGenerator;

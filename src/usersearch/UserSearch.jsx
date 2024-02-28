import { useState } from "react";
import "./styles.css";

const API_URL = "https://api.github.com";

const fetchResult = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
};
const UserSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const results = await fetchResult(query);
    console.log(results);
    setResults(results);
  };

  return (
    <div className="app">
      <main className="'main">
        <h1>Github User Search</h1>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="result">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const User = ({ avatar, url, username }) => {
  console.log("test");
  return (
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
};
export default UserSearch;

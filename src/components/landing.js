import React, { useState } from "react";

const Landing = props => {
  const { onChangeCb } = props;
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!!query) onChangeCb(query);
  };

  return (
    <div className="landing">
      <h1 className="banner">doc32 Task</h1>
      <div className="form">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="submit_button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";

const UrlHistory = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="url-history">
      <h3>History</h3>
      <ul>
        {history.map((item, idx) => (
          <li key={idx}>
            <span className="long-url">{item.longUrl}</span> →
            <span className="short-url">{item.shortUrl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlHistory;

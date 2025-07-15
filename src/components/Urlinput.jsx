import React, { useState } from "react";
import { shortenUrl } from "../utils/api";
import Loader from "./Loader";

const UrlInput = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleShorten = async () => {
    if (!validateUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const short = await shortenUrl(url);
      onShorten({ longUrl: url, shortUrl: short });
      setUrl("");
    } catch (e) {
      setError("Error shortening URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="url-input">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your long URL"
        required
        aria-label="Long URL"
        disabled={loading}
      />
      <button onClick={handleShorten} disabled={loading}>
        Shorten
      </button>
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default UrlInput;

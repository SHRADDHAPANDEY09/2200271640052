import React, { useRef, useState } from "react";

const ShortenedUrl = ({ url }) => {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  if (!url) return null;

  return (
    <div className="shortened-url">
      <input
        ref={inputRef}
        type="text"
        value={url}
        readOnly
        aria-label="Shortened URL"
      />
      <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
};

export default ShortenedUrl;

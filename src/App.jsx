import React, { useState } from "react";
import UrlInput from "./components/Urlinput.jsx";
import ShortenedUrl from "./components/ShortenedUrl.jsx";
import UrlHistory from "./components/UrlHistory.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);

  const handleShorten = (result) => {
    setLatest(result.shortUrl);
    setHistory([result, ...history]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <h1>React URL Shortener</h1>
      <UrlInput onShorten={handleShorten} />
      <ShortenedUrl url={latest} />
      <UrlHistory history={history} />
      <Footer />
    </div>
  );
};

export default App;

// src/utils/api.js
export async function shortenUrl(longUrl) {
  const response = await fetch("https://your-backend-url/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: longUrl }),
  });
  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }
  const data = await response.json();
  // adapt this line if your backend uses a different response structure
  return data.shortUrl;
}

# 🌐 React URL Shortener – Frontend

A simple, scalable, and modern URL shortener web application built with **React**. This frontend communicates with a URL shortening API, providing users with an intuitive way to shorten and manage their links.

---

## ✨ Features

- **Shorten any valid URL** with instant feedback
- **Responsive input form** and clear UI
- **Copy** shortened links to clipboard in one click
- **URL history panel** – see previous shortened URLs (per session/localStorage)
- **Error handling** for invalid URLs or API errors

---

## 🚀 Tech Stack

- **React** – frontend library
- **CSS** / **Tailwind CSS** – styling
- **Axios** or `fetch()` – for API integration
- **Optional:** React Context or Redux for state, React Toastify for notifications

---

## 🖥️ Project Structure

- src/
- ├── components/
- │ ├── Navbar.js
- │ ├── Footer.js
- │ ├── InputForm.js
- │ ├── ShortenedUrl.js
- │ └── UrlHistory.js
- ├── utils/
- │ └── api.js
- ├── App.js
- ├── App.css
- └── main.jsx

- **InputForm:** User input for URLs
- **ShortenedUrl:** Displays the result + copy button
- **UrlHistory:** Shows previous links this session
- **Navbar/Footer:** Optional app layout additions

---

## ⚠️ `node_modules` Not Included

Due to maximum file upload size limitations on this platform, the `node_modules` folder was **not pushed** to this repository.

To get everything working locally, you’ll need to install project dependencies using the steps below.

---

## 📝 How to Use

1. **Enter a long URL** into the input field.
2. Click **Shorten** to generate a short URL.
3. **Copy** the result using the copy button.
4. Find your previously generated links in the **history panel**.

---

## 📦 Setup & Run

1. **Move into the project directory**
   - cd frontend
2. **Install Node dependencies**
   - npm install
3. **Start Development Server**
  - npm run dev

You need [Node.js](https://nodejs.org/) installed.


Visit `http://localhost:5173` (default for Vite) after running the dev server.

> **Note:** The `node_modules` folder is NOT included in this repository due to size limitations. Run `npm install` to restore all dependencies.

---

## 🔗 Example UI

- Clean layout for mobile & desktop
- Shorten field, result display, and URL history
- Copy to clipboard functionality

---

## 🚦 API Integration

- Calls a backend `/api/shorten` endpoint with your long URL
- Expects JSON response with a `shortUrl` field
- Handles errors and input validation gracefully

---

## 👨‍💻 Built With (examples)

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (or CRA)
- [Tailwind CSS](https://tailwindcss.com/) / CSS Modules
- [Axios](https://axios-http.com/) or `fetch`
- [react-toastify](https://fkhadra.github.io/react-toastify/) (for nice notifications)
- [nanoid](https://github.com/ai/nanoid) (if implementing your own backend)

---

## 🗂️ Example Component (`ShortenedUrl.js`)






# React + Vite

This project provides a minimal setup for running **React** with **Vite**, including support for **Hot Module Replacement (HMR)** and customizable **ESLint rules**.

Currently, two official React plugins for Vite are available:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Babel](https://babeljs.io/) for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/) for Fast Refresh

---

## 💡 ESLint Configuration Tips

If you're building a production-level React application, consider expanding your ESLint configuration with **TypeScript** and type-aware linting rules.

👉 Check out the [React + TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)  
👉 Explore [`typescript-eslint`](https://typescript-eslint.io) for deeper static analysis

---

## ⚠️ `node_modules` Not Included

Due to maximum file upload size limitations on this platform, the `node_modules` folder was **not pushed** to this repository.

To get everything working locally, you’ll need to install project dependencies using the steps below.

---

## 🚀 Getting Started

Clone this project, then set it up with the following commands:

Navigate into the frontend directory
cd frontend

Install dependencies
npm install

Start the Vite development server
npm run dev

Once running, you'll be able to access the app at:

http://localhost:5173

_For other ports or options, see the Vite config in `vite.config.js`._

---

## 📖 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://reactjs.org)
- [ESLint](https://eslint.org/)
- [Google Fonts](https://fonts.google.com/)

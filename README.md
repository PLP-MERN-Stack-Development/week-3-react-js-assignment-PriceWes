# PLP Task Manager

A modern React.js application for managing tasks, built with Vite, React Router, and Tailwind CSS.  
This project demonstrates component-based architecture, state management, API integration, and responsive design with dark mode support.

---

## 🚀 Features

- **Task Manager:** Add, complete, and delete tasks. Tasks are persisted in local storage.
- **API Integration:** Fetch and display posts from a public API with pagination and search.
- **Reusable Components:** Button, Card, Navbar, Footer, Layout, and more.
- **Dark Mode:** Toggle between light and dark themes.
- **Routing:** Navigate between Home and Tasks pages.
- **Responsive Design:** Looks great on all devices.

---

## 🗂️ Project Structure

```
src/
  components/
    Button.jsx
    Card.jsx
    Footer.jsx
    Layout.jsx
    Navbar.jsx
    PostList.jsx
    TaskManager.jsx
    ThemeSwitcher.jsx
  context/
    ThemeContext.jsx
  pages/
    Home.jsx
    Tasks.jsx
  utils/
    useLocalStorage.js
  App.jsx
  main.jsx
  index.css
tailwind.config.js
```

---

## 🛠️ Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/week-3-react-js-assignment-PriceWes.git
cd week-3-react-js-assignment-PriceWes
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🌟 Usage

- **Home Page:** Welcome message and project introduction.
- **Tasks Page:**  
  - **Task Manager:** Add, complete, and delete tasks.
  - **API Data:** View posts from JSONPlaceholder API, search and paginate.

Use the navigation bar to switch between pages.  
Toggle dark mode using the theme switcher in the navbar.

---

## 🧩 Main Components

- **Button:** Reusable button with variants and sizes.
- **Card:** Container for grouping content.
- **Navbar & Footer:** Consistent layout across pages.
- **Layout:** Wraps pages with navbar and footer.
- **TaskManager:** Handles all task CRUD operations.
- **PostList:** Fetches and displays API data.
- **ThemeSwitcher:** Toggle between light and dark mode.
- **ThemeContext:** Provides theme state across the app.

---

## ⚙️ Customization

- **Add more pages:** Create new files in `src/pages` and add routes in `App.jsx`.
- **Change theme colors:** Edit `tailwind.config.js` or Tailwind classes in components.
- **API endpoints:** Update the fetch URL in `PostList.jsx` for different data.

---

## 📝 Deployment

You can deploy this app to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

1. Push your code to GitHub.
2. Connect your repository to your preferred deployment platform.
3. Follow the platform’s instructions for React/Vite apps.

---

## 📸 Screenshots

_Add screenshots of your Home and Tasks pages here._

---

## 📚 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 🪪 License

This project is for educational purposes.

---


**Happy coding!**

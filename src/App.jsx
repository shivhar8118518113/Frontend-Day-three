import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

// [NEW IMPORT]
import { useState } from "react";

function App() {
  // [NEW STATE]
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(prev => !prev);

  return (
    // [MODIFY ROOT DIV CLASS]
    <div className={`d-flex flex-column min-vh-100 ${dark ? "theme-dark" : "theme-light"}`}>
      <Navbar />

      {/* Theme toggle button */}
      <div className="container py-2 d-flex justify-content-end">
        <button className="btn btn-sm btn-outline-secondary" onClick={toggleTheme}>
          {dark ? "Light Theme" : "Dark Theme"}
        </button>
      </div>

      {/* Full-width content area */}
      <main className="container-fluid px-0 flex-grow-1 custom-header">
        <Home />   {/* ✅ अब Home में cards भी render होंगे */}
      </main>

      <Footer />
    </div>
  );
}

export default App;


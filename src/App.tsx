import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <section ref={heroRef} className="hero-section">
        <div className="neo-input-container">
          <input
            type="text"
            className="neo-input"
            placeholder="Que necesitas?"
          />
        </div>
      </section>

      <section className="about-section"></section>

      <section className="loveyou-section">
        <h1 className="te-amo">Te amo</h1>
      </section>

      <section className="social-section">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

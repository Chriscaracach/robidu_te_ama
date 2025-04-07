import { useEffect, useRef } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

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
          <form
            action="https://formsubmit.co/robiduvalentin@gmail.com"
            method="POST"
            className="neo-input-form"
          >
            <input
              type="text"
              name="necesidad"
              className="neo-input"
              placeholder="Que necesitas?"
            />
            <input
              type="text"
              name="quien"
              className="neo-input"
              placeholder="Quien sos?"
            />
            <button type="submit" className="neo-button">
              <span className="neo-button-text">Enviar</span>
              <span className="neo-button-icon">
                <i className="fas fa-paper-plane"></i>
              </span>
            </button>
          </form>
        </div>
      </section>

      <section className="about-section"></section>

      <section className="loveyou-section">
        <h1 className="te-amo">Te amo</h1>
      </section>

      <section className="social-section">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/valentinrobidu/"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="/Robidu_Presskit_2025.pdf"
            className="social-icon"
            download="Robidu_Presskit_2025.pdf"
            target="_blank"
          >
            <i className="fab fa-download"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=Oc7lzbMNW8Q"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://soundcloud.com/robiduteama/robidu-full-set-live/s-cc67szWIiRp?si=4a6921feb016461ab085253d8ea9a9a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-soundcloud"></i>
          </a>
        </div>
      </section>
      <Analytics />
    </div>
  );
}

export default App;

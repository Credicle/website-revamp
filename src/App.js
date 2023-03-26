import React from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Banks from "./components/Banks";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingSection />
        <Section id="FinTechs">
          <Banks />
        </Section>
        <Section id="Demo">
          <Demo />
        </Section>
        <Section id="AboutUs">
        <Footer />
        </Section>
      </main>
    </div>
  );
}

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2 className="section-title">{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

export default App;

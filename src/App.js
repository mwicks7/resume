import Work from "./Work.js";
import Skills from "./Skills.js";
import Lab from "./Lab.js";
import About from "./About.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <main className="App">
      <header className="App-section">
        <div className="App-container">
          <About />
        </div>
      </header>

      <section className="App-section">
        <div className="App-container">
          <Lab />
        </div>
      </section>

      <section className="App-section">
        <div className="App-container">
          <Work />
        </div>
      </section>

      <section className="App-section">
        <div className="App-container">
          <Skills />
        </div>
      </section>

      <footer className="App-section">
        <div className="App-container">
          <Footer />
        </div>
      </footer>
    </main>
  );
};

export default App;

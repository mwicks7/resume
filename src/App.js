import logo from './logo.svg'
import Work from './Work.js'
import Lab from './Lab.js'
import About from './About.js'

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <div className="App-container is--large">
          <About />
        </div>
      </header>

      <section className="App-section is--dark ">
        <div className="App-container">
          <Work />
        </div>
      </section>

      <section className="App-section">
        <div className="App-container">
          <Lab />
        </div>
      </section>

      <section className="App-section is--dark is--centered">
        <div className="App-container">
          <h2>Thanks for stopping by</h2>
          <h3>Learn more at <a href="https://www.linkedin.com/in/mwicks/">LinkedIn</a> &amp; <a href="https://github.com/mwicks7/">github</a></h3>
        </div>
      </section>
    </main>
  );
}

export default App;

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
    </main>
  );
}

export default App;

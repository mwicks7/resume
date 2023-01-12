function Article () {
  return (
    <article className="Lab-project">
      <div className="Lab-image">
        <img height="300" width="300" alt="The Table of Fifths" src="images/lab_table_of_fifths7.webp" />
      </div>
      <div className="Lab-description">
        <h3 className="Lab-name">The Table of Fifths React App</h3>
        <p>
          You might be familiar with the "Circle of Fifths". Well, "The Table of Fifths" literally re-invents the wheel. Utilizing instrument diagrams and music notation you can learn fundamental key signatures and the relationships between them.
        </p>
        <p>
          Made with: <b>React</b> and <b>tonal.js</b>
        </p>
        <p className="Lab-links">
          <a href="https://mwicks7.github.io/the-table-of-fifths" target="_blank">Launch app</a>
          <span> · </span>
          <a href="https://github.com/mwicks7/the-table-of-fifths" target="_blank">View source</a>
        </p>
      </div>
    </article>
  )
}

function Lab () {
  return (
    <div className="Lab">
      <h2>Lab Projects</h2>
      <Article />
      {/* <article className="Lab-project">
        <div className="Lab-image">
          <img src="images/sedso_content_manager.jpg" />
        </div>
        <div className="Lab-description">
          <h3 className="Lab-name">SEDSO Content Manager</h3>
          <p>
            I worked with SEDSO Design to create a minimalist content management solution for their small business clients.
          </p>
          <p>
            Made with: <b>CodeIgniter</b> and <b>jQuery</b>
          </p>
          <p className="Lab-links">
            <a href="https://github.com/mwicks7/the-table-of-fifths" target="_blank">View screenshots</a>
          </p>
        </div>
      </article> */}
    </div>
  )
}

export default Lab
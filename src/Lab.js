import fifthsImage from './images/lab_table_of_fifths7.webp'
import sedsoImage from './images/sedso_content_manager.jpg'

const labData = [
  {
    img: fifthsImage,
    title: 'The Table of Fifths React App',
    description: 'You might be familiar with the "Circle of Fifths". Well, "The Table of Fifths" literally re-invents the wheel. Utilizing instrument diagrams and music notation you can learn fundamental key signatures and the relationships between them.',
    madeWith: 'React and tonal.js',
    links: [
      {
        text: 'Launch App',
        href: 'https://mwicks7.github.io/the-table-of-fifths'
      },
      {
        text: 'View source',
        href: 'https://github.com/mwicks7/the-table-of-fifths'
      }
    ]
  },
  {
    img: sedsoImage,
    title: 'SEDSO Content Management System',
    description: 'I worked with SEDSO Design to create a minimalist content management solution for their small business clients.',
    madeWith: 'CodeIgniter and jQuery',
    links: [
      {
        text: 'View Screenshots',
        href: 'https://mwicks7.github.io/the-table-of-fifths'
      }
    ]
  },
]

const Link = ({ href, text }) => {
  return <a href={href}>{text}</a>
}

const Article = ({ lab }) => {
  return (
    <article className="Lab-project">
      <div className="Lab-image">
        <img height="300" width="300" alt="The Table of Fifths preview" src={lab.img} />
      </div>
      <div className="Lab-description">
        <h3 className="Lab-name">{lab.title}</h3>
        <p>
          {lab.description}
        </p>
        <p>
          <b>Made with:</b> {lab.madeWith }
        </p>
        <p className="Lab-links">
          {lab.links.map((link, i) => 
            <Link href={link.href} text={link.text} key={i+'LabLink'}/>
          ).reduce((prev, curr) => 
            [prev, ' · ', curr]
          )}
        </p>
      </div>
    </article>
  )
}

const Lab = () => {
  return (
    <div className="Lab">
      <h2>Lab Projects</h2>
      <div className="Lab-projects">
        {labData.map( (lab, i) => 
          <Article 
            lab={lab} 
            key={i + 'lab'} 
          />
        )}
      </div>
    </div>
  )
}

export default Lab
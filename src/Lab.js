import fifthsImage from './images/lab_table_of_fifths7.webp'
import sedsoImage from './images/sedso_content_manager.jpg'
import jeopardyImage from './images/lab_jeopardy.jpg'
import rockImage from './images/lab_rock_paper_scissors.jpg'
import parksImage from './images/lab_national_parks.jpg'

const labData = [
  {
    img: parksImage,
    title: 'National Parks Maps Directory',
    description: 'Explore what to do and where to go when visiting the The United States\' national parks. (in progress)',
    madeWith: 'Next.js, MongoDB, nps.gov API, and Google Maps API',
    links: [
      {
        text: 'Launch App',
        href: 'https://national-parks-directory.vercel.app/'
      },
      {
        text: 'View source',
        href: 'https://github.com/mwicks7/national-parks-directory'
      }
    ]
  },
  {
    img: jeopardyImage,
    title: 'JEOPARDY.js',
    description: 'I\'m not Alex Trebek but, "THIS IS JEOPARDY!" Test your trivia skills with actual clues from 38 seasons of the show.',
    madeWith: 'React and JService.io',
    links: [
      {
        text: 'Launch App',
        href: 'https://mwicks7.github.io/jeopardy.js'
      },
      {
        text: 'View source',
        href: 'https://github.com/mwicks7/jeopardy.js'
      }
    ]
  },
  {
    img: fifthsImage,
    title: 'The Table of Fifths',
    description: 'You might be familiar with "The Circle of Fifths," well "The Table of Fifths" literally deconstructs the wheel. Utilizing instrument diagrams and music notation you can learn fundamental key signatures and the relationships between them.',
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
  // {
  //   img: sedsoImage,
  //   title: 'SEDSO Content Management System',
  //   description: 'I worked with SEDSO Design to create a minimalist content management solution for their small business clients.',
  //   madeWith: 'CodeIgniter and jQuery',
  //   links: [
  //     {
  //       text: 'View Screenshots',
  //       href: 'https://mwicks7.github.io/the-table-of-fifths'
  //     }
  //   ]
  // },
  {
    img: rockImage,
    title: 'Rock, Paper, Scissors: Humans vs Robots',
    description: 'Do you have what it takes to beat the robots in the classic game, "Rock, Paper, Scissors?"',
    madeWith: 'React',
    links: [
      {
        text: 'Launch App',
        href: 'https://mwicks7.github.io/rock-paper-scissors'
      },
      {
        text: 'View source',
        href: 'https://github.com/mwicks7/rock-paper-scissors'
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
        <img height="300" width="300" loading="lazy" alt="The Table of Fifths preview" src={lab.img} />
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
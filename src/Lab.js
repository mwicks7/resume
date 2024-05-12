import fifthsImage from "./images/lab_table_of_fifths7.webp"
import sedsoImage from "./images/sedso_content_manager.jpg"
import jeopardyImage from "./images/lab_jeopardy.jpg"
import rockImage from "./images/lab_rock_paper_scissors.jpg"
import parksImage from "./images/lab_national_parks.jpg"
import astroImage from "./images/lab_astro.jpg"

const projectData = [
  {
    img: parksImage,
    title: "USA National Parks Map Directory",
    description:
      "Explore where to go and what to do when visiting the country's national parks.",
    madeWith: [
      "Next.js",
      "MongoDB",
      "National Park Service API",
      "Google Maps API",
    ],
    href: "https://national-parks-directory.vercel.app/",
    links: [
      {
        text: "Explore",
        href: "https://national-parks-directory.vercel.app/",
      },
      {
        text: "GitHub",
        href: "https://github.com/mwicks7/national-parks-directory",
      },
    ],
  },
  {
    img: astroImage,
    title: "Astro Ecommerce",
    description: "Want to own a piece of the cosmos?",
    madeWith: ["Next.js", "MongoDB"],
    href: "https://e-commerce-lab.vercel.app/",
    links: [
      {
        text: "Shop",
        href: "https://e-commerce-lab.vercel.app/",
      },
      {
        text: "GitHub",
        href: "https://github.com/mwicks7/e-commerce-lab",
      },
    ],
  },
  {
    img: fifthsImage,
    title: "The Table of Fifths",
    description:
      "Learn fundamental musical key signatures through notation and instrument diagrams.",
    madeWith: ["React", "tonal.js"],
    href: "https://mwicks7.github.io/the-table-of-fifths",
    links: [
      {
        text: "Learn",
        href: "https://mwicks7.github.io/the-table-of-fifths",
      },
      {
        text: "GitHub",
        href: "https://github.com/mwicks7/the-table-of-fifths",
      },
    ],
  },
  {
    img: jeopardyImage,
    title: "JEOPARDY!js",
    description: "Test your trivia with clues from the legendary game show.",
    madeWith: ["React", "JService.io"],
    href: "https://mwicks7.github.io/jeopardy.js",
    links: [
      {
        text: "Play",
        href: "https://mwicks7.github.io/jeopardy.js",
      },
      {
        text: "GitHub",
        href: "https://github.com/mwicks7/jeopardy.js",
      },
    ],
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
    title: "Rock, Paper, Scissors: Humans vs Robots",
    description:
      "Do you have what it takes to beat the robots in the classic game <i>Rock, Paper, Scissors</i>?",
    madeWith: ["React"],
    href: "https://mwicks7.github.io/rock-paper-scissors",
    links: [
      {
        text: "Play",
        href: "https://mwicks7.github.io/rock-paper-scissors",
      },
      {
        text: "GitHub",
        href: "https://github.com/mwicks7/rock-paper-scissors",
      },
    ],
  },
]

const Article = ({ project }) => {
  return (
    <article className="Lab-project">
      <div className="Lab-image">
        <a href={project.href} target="_blank" rel="noreferrer">
          <img width="300" loading="lazy" alt="" src={project.img} />
        </a>
      </div>
      <div className="Lab-description">
        <h3 className="Lab-name">
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />

        <p>
          <i>
            {project.madeWith
              .map((skill) => <span className="Lab-skill">{skill}</span>)
              .reduce((prev, curr) => [prev, " · ", curr])}
          </i>
        </p>

        <p className="Lab-links">
          {project.links
            .map((link, i) => (
              <a
                href={link.href}
                key={i + "LabLink"}
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
            ))
            .reduce((prev, curr) => [prev, " · ", curr])}
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
        {projectData.map((project, i) => (
          <Article project={project} key={i + "lab"} />
        ))}
      </div>
    </div>
  )
}

export default Lab

import React from 'react'

const frontEndSkills = ['HTML/Haml', 'CSS/SASS/Responsive Design', 'Javascript/React/jQuery', 'a11y', 'SEO', 'Analytics']
const backEndSkills = ['Rails/MongoDB', 'Apache/MySQL/PHP', 'Node/Express']
const frameworkSkills = ['Ruby on Rails', 'Workarea Ecommerce', 'Shopify', 'CodeIgniter', 'Wordpress', 'Tumblr', 'Facebook Apps']
const cliSkills = ['Git', 'SSH', 'Homebrew']
const designSkills = ['Adobe Photoshop & Illustrator']

const Skills = () => {
  return (
    <div className="Skills">
        <h2>Skills Experience</h2>
        <p><b>Front-End:</b> {frontEndSkills.join(" · ")}</p>
        <p><b>Back-End:</b> {backEndSkills.join(" · ")}</p>
        <p><b>Frameworks:</b> {frameworkSkills.join(" · ")}</p>
        <p><b>Command Line:</b> {cliSkills.join(" · ")}</p>
        <p><b>Design:</b> {designSkills.join(" · ")}</p>
    </div>
  )
}

export default Skills;
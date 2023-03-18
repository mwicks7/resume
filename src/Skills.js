import React from 'react'

const frontEndSkills = ['HTML', 'SCSS', 'Javascript', 'a11y', 'SEO', 'Analytics', 'Node', 'React', 'jQuery']
const backEndSkills = ['Ruby on Rails', 'Php', 'MySQL', 'MongoDB', 'CodeIgniter', 'Wordpress']
const ecommerceSkills = ['Workarea', 'Shopify']

const Skills = () => {
  return (
    <div className="Skills">
        <h2>Skills</h2>
        <div><b>Front-End:</b> {frontEndSkills.join(", ")}</div>
        <div><b>Back-End:</b> {backEndSkills.join(", ")}</div>
        <div><b>Ecommerce:</b> {ecommerceSkills.join(", ")}</div>
    </div>
  )
}

export default Skills;
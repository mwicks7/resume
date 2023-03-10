import React from 'react'
import logoRef from './images/logo_ref.jpg'
import logoWeblinc from './images/logo_weblinc.jpg'
import logoFH from './images/logo_fh.jpg'
import logoSedso from './images/logo_sedso.jpg'
import logoSides from './images/logo_sides.jpg'
import logoUarts from './images/logo_uarts.jpg'

const companiesData = [
  {img: logoRef, color: 'black', name: 'Reformation', position: 'Software Engineer', time: '2 yrs 6 mos'},
  {img: logoWeblinc, color: 'red', name: 'Weblinc Ecommerce', position: 'Lead Front-End Dev', time: '4 yrs 5 mos'},
  {img: logoFH, color: 'gold', name: 'Fame House', position: 'Full Stack Dev', time: '2 yrs 1 mos'},
  {img: logoSedso, color: 'black', name: 'Sedso Design', position: 'Back-End Dev', time: '4 yrs 5 mos (Freelance)'},
  {img: logoSides, color: 'black', name: 'Sides Media', position: 'Full Stack Dev', time: '2 yrs 11 mos'},
  {img: logoUarts, color: 'red', name: 'The University of the Arts', position: 'Peer Tutor, Teacher\'s Assistant', time: 'BS in Multimedia'}
]

const frontEndSkills = ['HTML', 'Scss', 'Node', 'Javascript', 'a11y', 'SEO', 'Analytics']
const backEndSkills = ['Ruby on Rails', 'Php', 'Node', 'MySQL', 'Mongo DB']
const ecommerceSkills = ['Workarea', 'Shopify']

function Company ({ companyObj }) {
  return (
    <li className="Work-company">
      <div className={"Work-company-image Work-company-image--" + companyObj.color}>
        <img height="75" width="75" alt={companyObj.name + ' logo'} src={companyObj.img} className="Work-logo" />
      </div>
      <div className="Work-company-details">
        <div className="Work-company-name">{companyObj.name}</div>
        <div className="Work-position">{companyObj.position}</div>
        <div className="Work-time">{companyObj.time}</div>
      </div>
    </li>
  )
}

function Companies() {
  return (
    <ul className="Work-companies">
      {companiesData.map((company, i) => <Company companyObj={company} key={'company' + i} />)}
    </ul>
  )
}

function Work () {

  return (
    <div className="Work">
      <h2>Work Experience</h2>
        <Companies/>
        <div className="Work-details">
          <div className="Work-skills">
            <h3>Top Skills</h3>
              <div><b>Front-End:</b> {frontEndSkills.join(", ")}</div>
              <div><b>Back-End:</b> {backEndSkills.join(", ")}</div>
              <div><b>Ecommerce:</b> {ecommerceSkills.join(", ")}</div>
          </div>
        </div>
    </div>
  )
}

export default Work;
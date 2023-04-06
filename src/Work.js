import React from 'react'
import logoRef from './images/logo_ref.jpg'
import logoWeblinc from './images/logo_weblinc.jpg'
import logoFH from './images/logo_fh.jpg'
import logoSedso from './images/logo_sedso.jpg'
import logoSides from './images/logo_sides.jpg'
import logoBbd from './images/logo_bbd.jpg'
import logoUarts from './images/logo_uarts.jpg'

const companiesData = [
  {img: logoRef, name: 'Reformation', position: 'Software Engineer', time: '2 yrs 6 mos'},
  {img: logoWeblinc, name: 'Weblinc Ecommerce', position: 'Lead Front-End Dev', time: '4 yrs 5 mos'},
  {img: logoFH, name: 'Fame House', position: 'Full Stack Dev', time: '2 yrs 1 mos'},
  {img: logoSedso, name: 'Sedso Design', position: 'Full Stack Dev', time: '4 yrs 5 mos (Freelance)'},
  {img: logoSides, name: 'Sides Media', position: 'Front-End Dev', time: '2 yrs 11 mos'},
  {img: logoBbd, name: 'Backyard Booking & Design', position: 'Partner, Web Dev, Designer', time: '3 yrs'},
  {img: logoUarts, name: 'The University of the Arts', position: 'Peer Tutor, Teacher\'s Assistant', time: 'BS in Multimedia'}
]

const Company = ({ company }) => {
  return (
    <li className="Work-company">
      <img className="Work-company-logo" height="75" width="75" alt={company.name + ' logo'} src={company.img} />
      <div className="Work-company-details">
        <div><strong>{company.name}</strong></div>
        <div>{company.position}</div>
        <div>{company.time}</div>
      </div>
    </li>
  )
}

const Work = () => {
  return (
    <div className="Work">
      <h2>Work Experience</h2>

      <ul className="Work-companies">
        {companiesData.map((company, i) => 
          <Company 
            company={company} 
            key={'company' + i} 
          />
        )}
      </ul>
    </div>
  )
}

export default Work;
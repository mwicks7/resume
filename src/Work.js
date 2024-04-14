import React from "react";
import logoSyatt from "./images/logo_syatt.jpg";
import logoRef from "./images/logo_ref.jpg";
import logoWorkarea from "./images/logo_workarea.jpg";
import logoFH from "./images/logo_fh.jpg";
import logoSedso from "./images/logo_sedso.jpg";
import logoSides from "./images/logo_sides.jpg";
import logoBbd from "./images/logo_bbd.jpg";
import logoUarts from "./images/logo_uarts.jpg";

const companiesData = [
  {
    img: logoSyatt,
    name: "Syatt",
    position: "Software Engineer",
    time: "Current",
    href: "https://syatt.io/",
  },
  {
    img: logoRef,
    name: "Reformation",
    position: "Software Engineer",
    time: "2 yrs 6 mos",
    href: "https://www.thereformation.com/",
  },
  {
    img: logoWorkarea,
    name: "Workarea Commerce",
    position: "Lead Front-End Dev",
    time: "4 yrs 5 mos",
    href: "https://www.workarea.com/",
  },
  {
    img: logoFH,
    name: "Fame House",
    position: "Full Stack Dev",
    time: "2 yrs 1 mos",
    href: "https://www.universalmusic.com/label/fame-house/",
  },
  {
    img: logoSedso,
    name: "Sedso Design",
    position: "Full Stack Dev",
    time: "4 yrs 5 mos (Freelance)",
    href: "https://www.sedso.com/",
  },
  {
    img: logoSides,
    name: "Sides Media",
    position: "Front-End Dev",
    time: "2 yrs 11 mos",
    href: "https://web.archive.org/web/20120319123405/http://sidesmedia.com/",
  },
  {
    img: logoBbd,
    name: "Backyard Booking & Design",
    position: "Partner, Web Dev, Designer",
    time: "3 yrs",
    href: "https://web.archive.org/web/20110226073512/http://backyardbooking.com/",
  },
  {
    img: logoUarts,
    name: "The University of the Arts",
    position: "Peer Tutor, Teacher's Assistant",
    time: "BS in Multimedia",
    href: "https://www.uarts.edu/",
  },
];

const Company = ({ company }) => {
  return (
    <li className="Work-company">
      <a href={company.href} target="_blank" rel="noreferrer">
        <img
          className="Work-company-logo"
          height="75"
          width="75"
          loading="lazy"
          alt={company.name + " logo"}
          src={company.img}
        />
      </a>
      <div className="Work-company-details">
        <div className="Work-company-name">
          <a href={company.href} target="_blank" rel="noreferrer">
            <strong>{company.name}</strong>
          </a>
        </div>
        <div>{company.position}</div>
        <div>{company.time}</div>
      </div>
    </li>
  );
};

const Work = () => {
  return (
    <div className="Work">
      <h2>Work Experience</h2>

      <ul className="Work-companies">
        {companiesData.map((company, i) => (
          <Company company={company} key={"company" + i} />
        ))}
      </ul>
    </div>
  );
};

export default Work;

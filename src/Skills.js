import React from "react";

const frontEndSkills = [
  "TypeScript/React/jQuery",
  "HTML/Haml",
  "CSS/SASS/Responsive Design",
  "a11y",
  "SEO",
  "Analytics",
];
const backEndSkills = ["GraphQL", "Rails/MongoDB", "Apache/MySQL/PHP"];
const frameworkSkills = [
  "Next.js",
  "VTEX Faststore",
  "Workarea Ecommerce",
  "Shopify",
  "Ruby on Rails",
  "CodeIgniter",
  "Wordpress",
  "Tumblr",
  "Facebook Apps",
];
const cliSkills = ["Git", "SSH", "Homebrew", "npm"];
const designSkills = ["Figma", "Adobe Photoshop & Illustrator"];

const Skills = () => {
  return (
    <div className="Skills">
      <h2>Skills Experience</h2>
      <p>
        <b>Front-End:</b> {frontEndSkills.join(" · ")}
      </p>
      <p>
        <b>Back-End:</b> {backEndSkills.join(" · ")}
      </p>
      <p>
        <b>Frameworks:</b> {frameworkSkills.join(" · ")}
      </p>
      <p>
        <b>Command Line:</b> {cliSkills.join(" · ")}
      </p>
      <p>
        <b>Design:</b> {designSkills.join(" · ")}
      </p>
    </div>
  );
};

export default Skills;

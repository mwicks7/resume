import imageProfile from './images/profile_photo.webp'

const About = () => {
  return (
    <div className="About">
      <img className="About-image" height="155" width="155" alt="Matthew Wicks" src={imageProfile} />

      <div className="About-details">
        <h1>&#9996; Hey-yo World, I'm Matthew Wicks</h1>
        <p>
          A Philly-based software engineer with 15 years of development experience, a passion for learning new technologies, and a keen interest in web standards and building fast pixel-perfect interfaces. 8 years in the Ecommerce industry has provided me with vast knowledge to develop the integral components that make up the online shopping experience.
        </p>
      </div>
    </div>
  )
}

export default About
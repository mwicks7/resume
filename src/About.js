import imageProfile from './images/profile_photo.webp'

const About = () => {
  return (
    <div className="About">
      <img className="About-image" height="155" width="155" alt="Matthew Wicks" src={imageProfile} />

      <div className="About-details">
        <h1>&#9996; Heyyo World, I'm Matthew Wicks</h1>
        <p>
          I am a Philly-based software engineer with 13 years experience and a keen interest in web standards, accessibility, and building fast, pixel-perfect interfaces. 8 years in the ecommerce industry has provided me with vast knowledge to develop the integral components that make up the online shopping experience.
        </p>
      </div>
    </div>
  )
}

export default About
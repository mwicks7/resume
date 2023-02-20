import imageProfile from './images/profile_photo.webp'

function About () {
  return (
    <div className="About">
      <div className="About-image">
        <img height="155" width="155" alt="Matthew Wicks" src={imageProfile} />
      </div>
      <div className="About-description">
        <h1>&#9996; Heyyo World, I'm Matthew Wicks</h1>
        <p>
          A Philly-based software engineer with a keen interest in web standards, accessibility, and building fast, pixel-perfect interfaces. 
          8 yrs in the ecommerce industry has provided me with vast experience developing integral components that make up the online shopping experience.
        </p>
      </div>
    </div>
  )
}

export default About
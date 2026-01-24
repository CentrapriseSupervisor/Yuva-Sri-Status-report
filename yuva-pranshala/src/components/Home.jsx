import React from 'react'
import HeroCarousel from './HeroCarousel'

export default function Home(){
  return (
    <section id="home" className="container hero-inner">
      <div className="hero">
        <div>
          <h1>Yuva Pranshala</h1>
          <p>Breathe. Align. Grow.</p>
          <p style={{color:'#55606a'}}>Gentle yoga classes for young bodies — playful, safe, and confidence-building.</p>
          <div style={{marginTop:12}}>
            <a className="cta-btn" href="#classes">View Classes</a>
            <a href="#about" style={{marginLeft:8}} className="muted-btn">Our Approach</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <HeroCarousel />
        </div>
      </div>

      <section id="classes" className="classes" style={{marginTop:24}}>
        <h2 style={{marginTop:0}}>Classes</h2>
        <div className="card-grid" style={{marginTop:12}}>
          <article className="card">
            <h3>Foundations</h3>
            <p>Intro to pose, breath, and calm movement (ages 6–12).</p>
          </article>
          <article className="card">
            <h3>Mindful Movement</h3>
            <p>Balance, focus, and partner work to build confidence.</p>
          </article>
          <article className="card">
            <h3>Leadership</h3>
            <p>Older students learn sequencing and teaching basics.</p>
          </article>
        </div>
      </section>

      <section id="about" style={{marginTop:32}}>
        <h2>About</h2>
        <p style={{color:'#55606a'}}>Yuva Pranshala supports mindful growth through playful, age-appropriate yoga and breathing exercises. Our tutors focus on safety, alignment, and emotional awareness.</p>
      </section>

      <section id="testimonials" style={{marginTop:32}}>
        <h2>Testimonials</h2>
        <div className="card-grid" style={{marginTop:12}}>
          <article className="card">
            <p>"My daughter has gained so much confidence through the yoga classes. The instructors are amazing!"</p>
            <cite>- Parent of a 10-year-old student</cite>
          </article>
          <article className="card">
            <p>"The mindful movement class helped me focus better in school. I feel calmer and more balanced."</p>
            <cite>- 12-year-old student</cite>
          </article>
          <article className="card">
            <p>"As a teacher, I appreciate how the leadership program builds responsibility and empathy."</p>
            <cite>- Yoga instructor</cite>
          </article>
        </div>
      </section>

      <section id="contact" style={{marginTop:32}}>
        <h2>Contact</h2>
        <p style={{color:'#55606a'}}>Email us at <a href="mailto:info@yuva-pranshala.example">info@yuva-pranshala.example</a> or use the contact form (coming soon).</p>
      </section>
    </section>
  )
}

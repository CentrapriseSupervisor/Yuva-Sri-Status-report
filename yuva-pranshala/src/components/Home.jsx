import React from 'react'

export default function Home(){
  return (
    <section className="container hero-inner">
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
          <img src="https://via.placeholder.com/700x420?text=Yuva+Pranshala" alt="Yuva Pranshala" style={{width:'100%',height:'100%',objectFit:'cover'}} />
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
    </section>
  )
}

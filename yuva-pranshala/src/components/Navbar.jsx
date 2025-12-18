import React from 'react'

export default function Navbar(){
  return (
    <nav className="nav container" aria-label="Primary">
      <div className="brand">
        <div className="logo" aria-hidden>YP</div>
        <div>
          <div style={{fontSize:'.95rem'}}>Yuva Pranshala</div>
          <div style={{fontSize:'.75rem',color:'#6b7a6f'}}>Breathe. Align. Grow.</div>
        </div>
      </div>

      <div className="links" role="navigation" aria-label="Main links">
        <a href="#classes">Classes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="cta-btn" style={{marginLeft:12}}>Join</button>
      </div>
    </nav>
  )
}

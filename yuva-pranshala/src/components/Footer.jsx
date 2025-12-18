import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <strong>Yuva Pranshala</strong>
          <div style={{color:'#64748b',fontSize:'.9rem'}}>Breathe. Align. Grow.</div>
        </div>
        <div style={{textAlign:'right',color:'#64748b'}}>
          <p style={{margin:0}}>© {new Date().getFullYear()} Yuva Pranshala</p>
        </div>
      </div>
    </footer>
  )
}

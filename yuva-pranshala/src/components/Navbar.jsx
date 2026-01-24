import React, {useState, useEffect} from 'react'

const LINKS = [
  {label:'Home', href:'#home'},
  {label:'Classes', href:'#classes'},
  {label:'About', href:'#about'},
  {label:'Testimonials', href:'#testimonials'},
  {label:'Contact', href:'#contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(()=>{
    function onScroll(){
      const positions = LINKS.map(l => {
        const el = document.querySelector(l.href)
        const rect = el && el.getBoundingClientRect()
        return {href:l.href, top: rect ? rect.top : Infinity}
      })
      const nearest = positions.reduce((best, cur)=>{
        const curAbs = Math.abs(cur.top)
        const bestAbs = Math.abs(best.top)
        return curAbs < bestAbs ? cur : best
      }, positions[0])
      if(nearest && nearest.href !== active){
        setActive(nearest.href)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, {passive:true})

    function onKey(e){
      if(e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return ()=>{ window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  },[active])

  function go(e, href){
    e.preventDefault()
    const target = document.querySelector(href)
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'})
    }
    setOpen(false)
  }

  return (
    <nav className="nav container" aria-label="Primary">
      <div className="brand">
        <div className="logo" aria-hidden>YP</div>
        <div>
          <div style={{fontSize:'.95rem'}}>Yuva Pranshala</div>
          <div style={{fontSize:'.75rem',color:'#6b7a6f'}}>Breathe. Align. Grow.</div>
        </div>
      </div>

      <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
        {open ? '✕' : '☰'}
      </button>

      <div className={`links ${open? 'open':''}`} role="navigation" aria-label="Main links">
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={(e)=>go(e,l.href)} className={active===l.href? 'active-link':''}>{l.label}</a>
        ))}
        <button className="cta-btn" style={{marginLeft:12}}>Join</button>
      </div>
    </nav>
  )
}

import React, {useState, useRef, useEffect} from 'react'
import h1 from '../assets/hero-1.svg'
import h2 from '../assets/hero-2.svg'
import h3 from '../assets/hero-3.svg'

const slides = [
  {src:h1, alt:'Gentle movement for young bodies'},
  {src:h2, alt:'Breath and play'},
  {src:h3, alt:'Confidence through mindful practice'}
]

export default function HeroCarousel(){
  const [index,setIndex] = useState(0)
  const [isPaused,setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const startX = useRef(null)
  const deltaX = useRef(0)
  const intervalRef = useRef(null)

  useEffect(()=>{
    if(!isPaused){
      intervalRef.current = setInterval(()=>setIndex(i => (i+1)%slides.length),4000)
    }
    return ()=> clearInterval(intervalRef.current)
  },[isPaused])

  function prev(){ setIndex(i => (i-1+slides.length)%slides.length) }
  function next(){ setIndex(i => (i+1)%slides.length) }

  function onPointerDown(e){
    startX.current = e.clientX || (e.touches && e.touches[0].clientX)
    deltaX.current = 0
    setIsPaused(true)
    containerRef.current.setPointerCapture?.(e.pointerId)
  }
  function onPointerMove(e){
    if(startX.current == null) return
    const x = e.clientX || (e.touches && e.touches[0].clientX)
    deltaX.current = x - startX.current
    const width = containerRef.current.offsetWidth
    containerRef.current.querySelector('.slides').style.transform = `translateX(calc(-${index * 100}% + ${deltaX.current}px))`
  }
  function onPointerUp(e){
    const threshold = 50
    if(deltaX.current > threshold) prev()
    else if(deltaX.current < -threshold) next()
    // reset
    containerRef.current.querySelector('.slides').style.transform = ''
    startX.current = null
    deltaX.current = 0
    // resume after short delay so user sees the change
    setTimeout(()=>setIsPaused(false),600)
  }

  function onKeyDown(e){
    if(e.key === 'ArrowLeft') prev()
    if(e.key === 'ArrowRight') next()
    if(e.key === ' ') { e.preventDefault(); setIsPaused(p => !p) }
  }

  return (
    <div className="carousel" ref={containerRef} tabIndex={0} onKeyDown={onKeyDown}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
      onMouseEnter={()=>setIsPaused(true)} onMouseLeave={()=>setIsPaused(false)} role="region" aria-roledescription="carousel" aria-label="Hero slideshow">

      <div className="slides" style={{width:`${slides.length*100}%`,display:'flex',transition:'transform .45s ease',transform:`translateX(-${index * (100 / slides.length)}%)`}}>
        {slides.map((s,i)=> (
          <div key={i} style={{width:`${100/slides.length}%`,flex:`0 0 ${100/slides.length}%`}}>
            <img src={s.src} alt={s.alt} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
          </div>
        ))}
      </div>

      <div className="controls" aria-hidden>
        <button className="control-btn" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="control-btn" onClick={next} aria-label="Next slide">›</button>
      </div>

      <div className="dots" role="tablist">
        {slides.map((_,i)=> (
          <button key={i} className={`dot ${i===index? 'active':''}`} onClick={()=>setIndex(i)} aria-label={`Go to slide ${i+1}`} aria-selected={i===index}></button>
        ))}
      </div>
    </div>
  )
}

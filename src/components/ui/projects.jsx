import { useState } from 'react'
import CardSwap, { Card } from './CardSwap'
import p1 from '../projects/p1.gif';
import uc from '../projects/image.gif';
import Shuffle from './Shuffle';
function Projects() {
  const [count, setCount] = useState(0)

  return (
   
    <section style={{fontFamily: ' "Press Start 2P", system-ui', fontWeight: 400, backgroundColor: '#000000', padding: '20px'  }}>

    <div className='flex' style={{ padding: '20px', display: 'flex', height: '650px'}}>
        
          <div className='flex-1' style={{ height: '650px',flex: 1, position: 'relative', overflow: 'hidden', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#ffffff' }}>
              <h1 style={{margin: 0, padding: 0}}>
              <Shuffle className='Eightbit-font '
                style={{ lineHeight: '0.95', fontSize: '3rem', color: 'white' }}
                text="PROJECTS!"
                shuffleDirection="right"
                duration={0.75}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                loop={true}
                loopDelay={0.2}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
              />
            </h1>
            <p style={{ margin: 0, padding: 0}}>Whether it's pentensting, debugging or FOSS, i enjoy it all, because poking around code is <span style={{color:'green'}}>fun</span>!</p>

        </div>
   



            <div className='flex-1' style={{ height: '650px',flex: 1, position: 'relative', overflow: 'hidden' }}>
        
        
        
        
        
        <div style={{ height: '450px', position: 'relative', color: '#ffffff' }}>
          <CardSwap
            cardDistance={60}
            width={700}
            verticalDistance={70}
            delay={2000}
            pauseOnHover={true}>
            <Card>
            <h3>Under Construction</h3>
            <img src={uc} alt="under construction gif" style={{ width: '100px', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', autoplay: true, loop: true }} />
              <p style={{textAlign:'center'}}>Under Development..Coming soon!</p>
            </Card>
            <Card>
            <h3>NariRakshak/Narishakti</h3>
            <img src={p1} alt="projet1" style={{padding:'2px',width:'690px', height: "320px"}} />
            </Card>
          </CardSwap>
        </div>


        </div>
 </div>
      
    </section>
  )
}

export default Projects
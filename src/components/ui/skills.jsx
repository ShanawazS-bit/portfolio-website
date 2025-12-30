import { useState } from 'react'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"

/* make a sandwich with 2 loops in top and bottom, and skills with bento box displaying frontend backend and skills */




import Shuffle from './Shuffle';
import company1 from '../logo/company1.png';
import company2 from '../logo/company2.png';
import company3 from '../logo/company3.png';
import company4 from '../logo/company4.png';
import company5 from '../logo/company5.png';
import company6 from '../logo/company6.png';
import company7 from '../logo/company7.png';
import company8 from '../logo/company8.png';
import { FileX } from 'lucide-react';

const techLogos = [
  { src: company1, alt: "Company 1", href: "https://company1.com" },
  { src: company2, alt: "Company 2", href: "https://company2.com" },
  { src: company3, alt: "Company 3", href: "https://company3.com" },
  { src: company4, alt: "Company 4", href: "https://company3.com" },
  { src: company5, alt: "Company 5", href: "https://company3.com" },
  { src: company6, alt: "Company 6", href: "https://company3.com" },
  { src: company7, alt: "Company 7", href: "https://company3.com"},
  { src: company8, alt: "Company 8", href: "https://company3.com"},
];


function Skills() {
  const [count, setCount] = useState(0)
  return (
    <section style={{fontFamily: ' "Press Start 2P", system-ui', fontWeight: 400, backgroundColor: '#000000', padding: '20px'  }}>

      <div className='flex' style={{ padding: '20px', display: 'flex', height: '650px'}}>
        <div className='flex-1' style={{ height: '650px',flex: 1, position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
        logos={techLogos}
        speed={80}
        direction="down"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        
      />
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="down"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
        </div>
          <div className='flex-1' style={{height: '650px',textAlign: 'center',flex: 1, position: 'relative', overflow: 'hidden' , color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{margin: 0, padding: 0}}>
              <Shuffle className='Eightbit-font '
                style={{ lineHeight: '0.95', fontSize: '3rem', color: 'white' }}
                text="SKILLS!"
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
            <p style={{ margin: 0, padding: 0}}>Frameworks & Technologies are like fun coupons-that make any concept come alive. Thus, always on the <span style={{color:'green'}}>hunt</span> to learn new ones!</p>
        </div>
      </div>

    </section>
  )
}

export default Skills
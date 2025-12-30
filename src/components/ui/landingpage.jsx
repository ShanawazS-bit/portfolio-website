import { useState } from 'react'

import './landingPage.css'

import FaultyTerminal from './FaultyTerminal';
import Shuffle from './Shuffle';
import Dock from './Dock';
import { Home, Archive, User, Settings } from 'lucide-react';

import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import company1 from '../logo/company1.png';
import company2 from '../logo/company2.png';
import company3 from '../logo/company3.png';
import company4 from '../logo/company4.png';
import company5 from '../logo/company5.png';
import company6 from '../logo/company6.png';
import company7 from '../logo/company7.png';
import company8 from '../logo/company8.png';


import Skills from './skills';
import Projects from './projects';  
import Socials from './socials';



const items = [
  { icon: <Home size={18} />, label: 'Top', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
 ];

/*page 2 loop component*/

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





export default function LandingPage() {
  const [count, setCount] = useState(0)

  return (
  
    <main>

      <section style={{ width: '100%', height: '100vh', position: 'relative',  overflow: 'hidden'  }}>  
        <FaultyTerminal
          scale={2.0}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.3}
          tint="#109412"
          mouseReact={true}
          mouseStrength={0.1}
          pageLoadAnimation={true}
          brightness={0.7}/>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
          zIndex: 1
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 9999,
          width: '100%',
          pointerEvents: 'none'
        }}>
          <h1 className='text-white' style={{ 
            fontSize: '4rem', 
            margin: 0, 
            lineHeight: '0.95',
            fontFamily: "'Press Start 2P', sans-serif",
            color: 'white'
            }}>Hi, I am <Shuffle className='Eightbit-font '
            style={{ lineHeight: '0.95', fontSize: '4rem', color: 'white' }}
            text="Shanawaz!"
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
          <h2 className='text-white' style={{ 
            fontSize: '2rem', 
           margin: 0,
            lineHeight: '0.1',
            fontFamily: '"Monsieur La Doulaise", cursive',
            fontWeight: 400,  
            color: 'white'
            }}> Welcome to my haberdashery!
          </h2>
        </div>

        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'auto', zIndex: 100 }}>
          <Dock
            items={items}
            panelHeight={90}
            baseItemSize={55}
            magnification={80}
            distance={100}
          />
        </div>
      </section>{/* The id attributes are correctly placed on the components themselves, not on the section wrapper. */}
      <Skills id='skills-section' />
      <Projects id='projects-section' />
      <Socials id='socials-section' />

      

    </main>
      

  )
}

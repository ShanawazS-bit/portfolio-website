import { useState } from 'react'
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"
import TiltedCard from './TiltedCard';
import AnimatedList from './AnimatedList';
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

import portrait from '../projects/portrait.jpg'
import insta from '../projects/insta.png'
import linkedin from '../projects/linkedin.png'
import Github from '../projects/Github.png'
import AnimatedContent from './AnimatedContent'



  function Socials() {  
    const [count, setCount] = useState(0)
  
    return (


      
  








  <section style={{fontFamily: ' "Press Start 2P", system-ui', fontWeight: 400, backgroundColor: '#000000', padding: '20px', color: '#FFFFFF'   }}>

      <div className='flex' style={{ padding: '20px', display: 'flex', height: '650px'}}>
        <div className='flex-1' style={{ paddingLeft:'2px',height: '550px',flex: 1, position: 'relative', overflow: 'hidden', marginTop:'150px'}}>
          
      

  <TiltedCard style={{ display:'flex', alignItems:'center',marginTop: '10px' }}
  altText=' PFP'
  imageSrc={portrait}
  captionText="Reach Out?"
  containerHeight="200px"
  containerWidth="300px"
  imageHeight="450px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className=" ">
    </p>
  }
/>

        </div>
      
        <div >






</div>

<div className='flex-1' style={{  marginTop: '50px',height: '550px',flex: 1, position: 'relative', overflow: 'hidden', color: '#FFFFFF', paddingLeft: '50px', paddingTop: '100px'  }}>
          
          <h3 style={{fontSize: '1.5rem'}}>Lets Work  <AnimatedText
      text="Together !"
      textClassName="text-2xl font-bold mb-2"
      underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
      underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
      underlineDuration={1.5}
    /></h3>
          
          
<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
    <div style={{display:'flex', alignItems:'center', cursor: 'pointer'}} 
    onClick={() => window.open('https://www.instagram.com/shanawazsha/', '_blank')}>
    <img src={insta} alt="instagram logo" style={{ width: '50px', height: 'auto', position: 'relative', paddingBottom: '25px', marginRight: '10px'}}/>
    <h1 style={{ paddingBottom: '20px', fontSize:'0.8rem', margin: 0, color: '#FFFFFF' }}>Instagram.com/ShanawazSha</h1>
    </div>

</AnimatedContent>
<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <div style={{display:'flex', alignItems:'center', cursor: 'pointer'}} 
    onClick={() => window.open('https://in.linkedin.com/in/shanawaz-sharif-527495320', '_blank')}>

    <img src={linkedin} alt="linkedin logo" style={{ width: '50px', height: 'auto', position: 'relative', paddingBottom: '25px', marginRight: '10px'}}/>
  <h1 style={{paddingBottom: '20px',fontSize: '0.8rem', margin: 0}} >linkedin.com/in/shanawaz-sharif</h1></div>
</AnimatedContent>


<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
> 
  <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} 
    onClick={() => window.open('https://github.com/ShanawazS-bit', '_blank')}>

    <img src={Github} alt="Github logo" style={{ borderRadius: '10px', width: '50px', height: 'auto', position: 'relative', marginRight: '10px' }} />
    <h1 style={{ fontSize: '0.8rem', margin: 0 }}>Github.com/Shanawaz-Sbit</h1>
  </div>
</AnimatedContent>
          
          
          
          
          
          
          
          </div>   
      </div>

    </section>

    )
  }
  
export default Socials;
import React from 'react'
import img from "../../Assets/Group 41oscil.png"


const AboutHero = () => {
  return (
    <section className='landing-page-about h-[47vh] sm:h-[60vh] w-full pt-16 sm:pt-7 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto'>
<h2 className='font-semibold text-5xl sm:text-[32px] text-[#1E772C] '>We are an economic</h2>
<h2 className='font-semibold text-5xl sm:text-[32px] mt-3 text-[#1E772C]'>empowerment <span className='sm:hidden'>platform</span></h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl hidden sm:block'><span className='text-[#1E772C]'>platform</span> providing</h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl'><span className='sm:hidden'>providing</span> Agribusiness MSMEs</h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl'>with Innovative Financial Services.</h2>
<p className='font-medium text-xl sm:text-base sm:w-[90%] w-[60%] mt-7'>We offer Financial Intermediary Solutions, Commodity Warehousing, Collateral Management, Cluster Marketing Support, Brokerage Services, and Infrastructure-As-A-Service offerings tailored to enhance growth and sustainability in agribusinesses.</p>

</section>
    </section>
  )
}

export default AboutHero
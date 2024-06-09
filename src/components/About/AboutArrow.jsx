
import React from 'react'
import AboutDot from './AboutDot'


const AboutArrow = ({next, prev, active, switchSlide, setActive}) => {
    return (
        <div className=" flex  w-fit mx-auto mt-10">
            <button className="prev  slide-buttons about md:w-[50px] md:h-[20px]" onClick={prev}>
            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.309256 14.0003C0.307159 13.8283 0.341082 13.6577 0.408841 13.4996C0.476601 13.3415 0.5767 13.1993 0.7027 13.0822L12.506 1.27894C13.0306 0.754351 13.8437 0.754351 14.3683 1.27894C14.8929 1.80353 14.8929 2.61665 14.3683 3.14124L3.48303 14.0265L14.342 24.8855C14.8666 25.4101 14.8666 26.2232 14.342 26.7478C13.8175 27.2724 13.0043 27.2724 12.4798 26.7478L0.676469 14.9445C0.414174 14.6822 0.283026 14.3412 0.283026 14.0265L0.309256 14.0003Z" fill="white"/>
</svg>

            </button>
            <AboutDot active={active}  switchSlide={(active) => setActive(active)} />
            <button className="next slide-buttons about" onClick={next}>
            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6907 13.9997C14.6928 14.1717 14.6589 14.3423 14.5912 14.5004C14.5234 14.6585 14.4233 14.8007 14.2973 14.9178L2.49402 26.7211C1.96943 27.2456 1.15631 27.2456 0.631724 26.7211C0.107134 26.1965 0.107134 25.3834 0.631724 24.8588L11.517 13.9735L0.657953 3.1145C0.133363 2.58991 0.133363 1.7768 0.657953 1.2522C1.18254 0.727615 1.99566 0.727615 2.52025 1.2522L14.3235 13.0555C14.5858 13.3178 14.717 13.6588 14.717 13.9735L14.6907 13.9997Z" fill="white"/>
</svg>

            </button>
        </div>
    )
}

export default AboutArrow
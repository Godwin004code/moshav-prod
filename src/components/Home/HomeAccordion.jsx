import React, {useState, useRef} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import exportedData from '../Global/AccordionData';

const AccordionItem = ({ question, answer, isOpen, onClick, li1,li2,li3,li4,li5,li6,li7, des1,des2,des3,des4,des5,des6, des7,des8 }) => {
    const contentHeight = useRef();
    return (
      <div className="wrapper">
        <button
          className={`question-container sm:!p-3 sm:!py-5 sm:flex sm:gap-3 ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="question-content lg:text-base sm:text-sm font-bold">{question}</p>
          <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""} sm:scale-[1.3] sm:w-[50px] `} />
        </button>
  
        <div
          ref={contentHeight}
          className="answer-container"
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className="answer-content ml-[30px] sm:ml-0 lg:!text-base lg:text-left sm:!text-sm">{answer}</p>

          {li1 != "" && <ol className="ml-[50px] sm:ml-[15px] sm:text-left" style={{listStyle: 'upper-roman'}}>
          {li1 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li1}</li>}
          {des1 != "" && <ol className="ml-[80px] sm:ml-[20px] " style={{listStyle: 'lower-alpha'}}>
          <li>{des1}</li>
          <li className="mb-2">{des2}</li>
        </ol>}
          {li2 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li2}</li>}
          {des3 != "" && <ol className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'lower-alpha'}}>
          <li>{des3}</li>
          <li>{des4}</li>
          <li className="mb-2">{des5}</li>
        </ol>}
          {li3 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li3}</li>}
          {des6 != "" && <ol className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'lower-alpha'}}>
          <li>{des6}</li>
          <li className="mb-2">{des7}</li>
        </ol>}
          {li4 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li4}</li>}

          {des8 != "" && <ol className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'lower-alpha'}}>
         <li className="mb-2">{des8}</li>
       </ol>}
          {li5 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li5}</li>}
          {li6 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li6}</li>}
          {li7 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li7}</li>}
          </ol>}
          
        </div>
      </div>
    );
  };
const HomeAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
}
return (
    <div className="container w-[60%] lg:w-[100%] lg:mx-auto lg:mt-[80px]">
      {exportedData.HomeData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          li1={item.li1}
          li2={item.li2}
          li3={item.li3}
          li4={item.li4}
          li5={item.li5}
          li6={item.li6}
          li7={item.li7}
          onClick={() => handleItemClick(index)}
          des1={item.des1}
          des2={item.des2}
          des3={item.des3}
          des4={item.des4}
          des5={item.des5}
          des6={item.des6}
          des7={item.des7}
          des8={item.des8}
        />
      ))}
    </div>
  );
}
export default HomeAccordion
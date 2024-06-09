import React, { useRef, useState } from "react";
import exportedData from "./AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";

//  accordionitem component

const AccordionItem = ({ question, answer, isOpen, onClick,  li1,li2,li3,li4,li5,li6,li7 , li8, li9, li10, }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper sm:mt-16">
      <button
        className={`question-container ${isOpen ? "active " : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active w-[40px] ml-auto" : "w-[40px] ml-auto"}`} />
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
        <p className="answer-content ml-[30px] sm:ml-[0] sm:text-base">{answer}</p>
        {li1 != "" && <ol className="ml-[50px] sm:ml-[15px]" style={{listStyle: 'upper-roman'}}>
        {li1 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li1}</li>}
          {li2 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li2}</li>}
          {li3 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li3}</li>}
          {li4 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li4}</li>}
          {li5 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li5}</li>}
          {li6 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li6}</li>}
          {li7 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li7}</li>}
          {li8 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li8}</li>}
          {li9 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li9}</li>}
          {li10 != "" && <li className='ml-[50px] font-semibold sm:ml-0'>{li10}</li>}
        </ol>}
    
      </div>
    </div>
  );
};

const IAc = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className="sm:w-[100%] w-[60%]">
      {exportedData.IaasData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
          li1={item.li1}
          li2={item.li2}
          li3={item.li3}
          li4={item.li4}
          li5={item.li5}
          li6={item.li6}
          li7={item.li7}
          li8={item.li8}
          li9={item.li9}
          li10={item.li10}
        />
      ))}
    </div>
  );
};

export default IAc;

import React, { useRef, useState } from "react";
import exportedData from "./AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";

//  accordionitem component

const AccordionItem = ({ question, answer, isOpen, onClick,  li1,li2,li3,li4,li5,li6,  des1,des2,des3,des4,des5,des6, des7,des8,des9,des10,des11,des12}) => {
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


        {li1 != "" && <ol className="ml-[50px] sm:ml-[15px] " style={{listStyle: 'upper-roman'}}>
        {li1 != "" && <li className='ml-[50px] text-base font-bold sm:ml-0'>{li1}</li>}
        <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des1}</li>
          <li className="mb-2">{des2}</li>
        </ul>
          {li2 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li2}</li>}
          <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des3}</li>
          <li className="mb-2">{des4}</li>
        </ul>
          {li3 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li3}</li>}
          <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des5}</li>
          <li className="mb-2">{des6}</li>
        </ul>
          {li4 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li4}</li>}
          <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des7}</li>
          <li className="mb-2">{des8}</li>
        </ul>
          {li5 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li5}</li>}
          <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des9}</li>
          <li className="mb-2">{des10}</li>
        </ul>
          {li6 != "" && <li className='ml-[50px] font-bold sm:ml-0'>{li6}</li>}
          <ul className="ml-[80px] sm:ml-[20px]" style={{listStyle: 'square'}}>
          <li>{des11}</li>
          <li className="mb-2">{des12}</li>
        </ul>
          </ol>}
       
      </div>
    </div>
  );
};

const ClusterAc = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className="sm:w-[100%] w-[60%]">
      {exportedData.ClusterData.map((item, index) => (
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
          des1={item.des1}
          des2={item.des2}
          des3={item.des3}
          des4={item.des4}
          des5={item.des5}
          des6={item.des6}
          des7={item.des7}
          des8={item.des8}
          des9={item.des9}
          des10={item.des10}
          des11={item.des11}
          des12={item.des12}
          
        />
      ))}
    </div>
  );
};

export default ClusterAc;

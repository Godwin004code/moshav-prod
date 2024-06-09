import React from "react";
import { Link } from "react-router-dom";
import whyOne from "../../Assets/whyone.jpeg";
import whyTwo from "../../Assets/whytwo.jpeg";
import whyThree from "../../Assets/whythree.jpeg";
import whyFour from "../../Assets/whyfour.jpeg";

const Why = () => {
  return (
    <section className="py-12 why-moshav">
      <h1 className="text-[#000000] text-4xl sm:hidden sm:text-3xl font-bold  w-[80%] mx-auto sm:text-left ">
        Why Choose Moshav Capital
      </h1>
      <h1 className="text-[#000000] sm:block hidden text-4xl sm:text-3xl font-bold text-center sm:text-left w-[90%] mx-auto">
        Why Choose Us
      </h1>
      <p className="text-[#000000] text-2xl sm:text-lg text-center sm:text-left w-[90%] mx-auto mt-4">
        We offer exceptional services ranging from
      </p>

      <div className="flex justify-between w-[80%] sm:w-[90%]  mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col-reverse">
        <div className="ml-0 lg:ml-8 mr-7 mt-10 md-2:m-0">
          <h2 className="font-extrabold text-[32px] sm:text-[20px]">01</h2>
          <h2 className="text-[#1E772C] font-semibold text-3xl sm:text-2xl">
            Financial Intermediary Services
          </h2>
          <img
            className="w-full md-2:max-w-[500px] hidden md-2:block"
            src={whyOne}
            alt="why one"
          />
          <p className="font-medium text-lg mt-6 sm:text-sm leading-[35px]">
            Moshav Capital facilitates access to Innovative Financial Products
            and Services designed specifically for Micro, Small, and Medium
            Enterprises (MSMEs) in the Agribusiness Sector. This includes Loans,
            Credit Facilities, and Investment Opportunities tailored to the
            unique needs of Agribusiness Entrepreneurs.
          </p>
          <Link to="/financial-intermidation">
            <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
              Learn more
            </button>
          </Link>
        </div>

        <div className="my-auto md-2:hidden">
          <img
            className="w-full md-2:max-w-[500px]"
            
            src={whyOne}
            alt="why one"
          />
        </div>
      </div>

      <div className="flex justify-between w-[80%] sm:w-[90%]  mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col">
        <h2 className="font-extrabold text-[32px] mt-10 md-2:block hidden sm:text-[20px]">
          02
        </h2>
        <h2 className="text-[#1E772C] font-semibold text-3xl hidden md-2:block mb-4 sm:text-2xl">
          Commodity Warehousing & Collateral Management
        </h2>

        <div className="my-auto">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyTwo}
            alt="why one"
          />
        </div>
        <div className="ml-32 mr-7 lg:ml-16 md-2:ml-4 md-2:mt-8  mt-24 sm:m-0">
          <h2 className="text-[#1E772C] font-semibold text-3xl md-2:hidden">
            Commodity Warehousing & Collateral Management
          </h2>
          <p className="font-medium text-lg mt-6 leading-[35px] sm:text-sm">
            We offers secure Commodity Warehousing Facilities and Collateral
            Management Services, enabling MSMEs to leverage their produce and
            assets to access financing and mitigate risks.
          </p>
          <Link to="/collateral-warehousing-and-collateral-management">
            <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
              Learn more
            </button>
          </Link>
        </div>
        <h2 className="font-extrabold text-[32px] mt-10 md-2:hidden">02</h2>
      </div>

      <div className="flex justify-between w-[80%] sm:w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col-reverse">
        
        <div className=" ml-0 lg:ml-8 mr-7 mt-24 md-2:ml-4 md-2:mt-8 sm:m-0">
          <h2 className="font-extrabold text-[32px] mt-10 md-2:block sm:text-[20px]  ">
            03
          </h2>

          <h2 className="text-[#1E772C] font-semibold text-3xl mb-4 sm:text-2xl">
            Cluster Marketing Support & Brokerage Services
          </h2>
          <img
            className="w-full md-2:max-w-[500px] hidden md-2:block"
            src={whyThree}
            alt="why three"
          />
          <p className="font-medium text-lg mt-6 leading-[35px] sm:text-sm">
            By fostering collaboration among enterprises in specific geographic
            areas or sectors, we facilitate joint promotion, distribution, and
            market penetration strategies. This approach boosts visibility,
            expands customer reach, and drives sales growth for participating
            businesses, ultimately strengthening the agribusiness ecosystem.
          </p>
          <Link to="/cluster-marketing-and-brokerage-services">
            <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
              Learn more
            </button>
          </Link>
        </div>
        <div className="my-auto">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyThree}
            alt="why there"
          />
        </div>
      </div>

      <div className="flex justify-between w-[80%]  sm:w-[90%] mt-10 mb-32 md-2:mb-16 mx-auto md-2:flex-col">
        <h2 className="font-extrabold text-[32px] mt-10 hidden sm:text-[20px] md-2:block">
          04
        </h2>
        <h2 className="text-[#1E772C] font-semibold text-3xl md-2:block hidden mb-4 sm:text-2xl">
          Infrastructure As-A-Service
        </h2>

        <div className="my-auto">
          <img
            className="w-full md-2:max-w-[500px]"
            src={whyFour}
            alt="why one"
          />
        </div>
        <div className="ml-32 lg:ml-16 mr-7 md-2:ml-4 md-2:mt-8  mt-24 sm:m-0">
          <h2 className="text-[#1E772C] font-semibold text-3xl md-2:hidden">
            Infrastructure As-A-Service
          </h2>
          <p className="font-medium text-lg leading-[35px] mt-6 sm:text-sm">
            Infrastructure-As-A-Service (IaaS) by Moshav Capital offers
            agribusinesses scalable Computing Resources, Cloud-Based
            Applications, and Digital Tools to optimize operations and enhance
            efficiency without upfront infrastructure investments. Leverage
            modern technology to streamline processes and adapt to market
            demands effectively.
          </p>
          <Link to="/infrastructure-as-a-service">
            <button className="bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl sm:text-base sm:w-[130px] sm:h-[50px]">
              Learn more
            </button>
          </Link>
        </div>
        <h2 className="font-extrabold text-[32px] mt-10 md-2:hidden">04</h2>
      </div>
    </section>
  );
};

export default Why;

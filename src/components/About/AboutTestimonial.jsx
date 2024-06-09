import React, {useState} from 'react'
import michael from "../../Assets/WhatsApp Image 2024-05-31 at 17.25.14.jpeg"
import img1 from "../../Assets/7ee2e0e3-a351-41be-8a8d-da82df2f3674.JPG"
import img2 from "../../Assets/a78a5a4b-b622-4034-87c5-32f5d4a133a2 2.JPG"
import img3 from "../../Assets/93b67b4a-b146-42b5-ab62-fe042a82d7a8.JPG"
import img4 from "../../Assets/9c24e5af-97ea-4645-b687-667f48158c7d.JPG"
import img5 from "../../Assets/6d06658f-ba20-472c-a9d0-e6869a794cd5.JPG"
import img6 from "../../Assets/e85b1786-1135-4a77-9e3b-96812311fb3e.JPG"
import AboutArrow from './AboutArrow'
import AboutDot from './AboutDot'

const AboutTestimonial = () => {
    const Data = [
        {
            id: 1,
            name: "Michael David-Banjo",
            title: "Founder & Chief Executive Officer, MCL",
            description: "Michael is an experienced digital transformation leader with over 20 years of track record in business application development and successful cloud-based implementations across EMEA. Ex-NTT DATA Group, Telefonica O2, HM Home Office, HM Revenues & Customs, etc",
            img: michael
        },
        {
            id: 2,
            name: "Martin Manuthu Gitari",
            title: "Chief Operations Officer, MCL",
            description: "Martin has over 20 years of experience in commercial banking and commodity financing, with a strong background in designing & implementing solutions that foster the growth of intra-Africa trading, agro-processing, and the profitability of MSMEs and commercial banks. Ex-Exim Bank",
            img: img2
        },
        {
            id: 3,
            name: "Olumide Aju (SAN)",
            title: "Independent Non-Executive Chairman, MCL",
            description: "Olumide is a legal professional and international arbitrator with over 28 years of distinctive experience in Nigeria, England, and Wales. As a distinguished senior advocate of Nigeria, he brings a wealth of knowledge to MCL’s corporate governance frameworks and social enterprise landscape.",
            img: img1
        },
        {
            id: 4,
            name: "Funmi Ajayi",
            title: "Non-Executive Chairperson, Moshav Microfinance Bank",
            description: "A business champion with proven success in enhancing female entrepreneurship, commercialization, and industrialization. Elevating Ogun State's global business ranking from 32nd to 3rd with the World Bank group. Led the recovery, reclaiming N=300 M in bad loans and recovering N=5B in debt within three months. Ex-head of Business Banking, Ecobank, Ex-Senior Special Adviser to the Governor on Commerce and Industry.",
            img: img3
        },
        {
            id: 5,
            name: "Olalekan Ajisafe",
            title: "Non-Executive Vice Chairman, Moshav Microfinance Bank",
            description: "A distinguished member of the Chartered Insurance Institute of Nigeria and Chartered Insurance Institute, London, with over 30 years of experience in Oil & Gas, Aviation and General Risk. Lekan is among the few experts in the Oil & Gas and Aviation insurance brokering subsector. ",
            img:img4
        },
        {
            id: 6,
            name: "Lami Okoya",
            title: "Non-Executive Director, Moshav Microfinance Bank",
            description: "A successful serial entrepreneur within Nigeria's start-up space with over 15 years of distinctive senior management experience. Ex-Director, SocketWorks, Ex-MD, Saana Corporate Investments.",
            img: img6
        },
        {
            id: 7,
            name: "Tunde Okeniyi",
            title: "Non-Executive Director, Moshav Microfinance Bank",
            description: "A successful digital transformation leader in commercial banking with over 30 years of experience with distinguished implementations. MD/CEO, Payattitude, Ex-ED Marketing & Sales, Unified Payment Services, Ex. Group Chief Information Officer, UBA, Ex. Group Chief Information Officer, UBA, Ex.Group Chief Information, Ecobank.",
            img: img5
        },
    ]
    const [active, setActive] = useState(0)

    const { name, title, description, img,} = Data[active]

    const nextSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex > Data.length - 1) {
                return 0
            }  else if(newIndex < 0) {
                return Data.length - 1
            }

            return newIndex
        })
    }

    const prevSlide = () => {
        setActive(() => {
            let newIndex = active - 1

            if(newIndex < 0) {
                return Data.length - 1
            } else if(newIndex > Data.length - 1) {
                return 0
            }

            return newIndex
        })
    }



  return (
    <section className='bg-[#FAFFF5] py-10'>
     <h1 className='text-center font-bold text-3xl mb-10'>Meet The Team</h1>
     <div className="flex gap-5 w-[60%] md:hidden mx-auto px-10 py-10 rounded-xl bg-white">
           
            <img src={img} className='w-[390px] h-[354px] rounded-xl' alt={name} />
          
            <div className='my-auto'>
                <h1 className='font-bold text-[28px] text-black'>{name}</h1>
                <h1 className='font-medium text-[18px]'>{title}</h1>
                <p className='font-normal text-base mt-7 leading-[30px]'>{description}</p>
            </div>
                    
                   
    </div>
    <section className='hidden md:block w-[90%] mx-auto bg-white p-7'>
    <div className='flex gap-3'>
    <img src={img} className='w-[87px] h-[80px] rounded-xl' alt={name} />
          
          <div className='my-auto'>
              <h1 className='font-bold text-lg text-black'>{name}</h1>
              <h1 className='font-medium text-[11px]'>{title}</h1>
              
          </div>
    </div>
          <p className='font-normal text-sm mt-7 leading-[30px]'>{description}</p>
    </section>
    <AboutArrow next={nextSlide} prev={prevSlide} active={active} switchSlide={(active) => setActive(active)} setActive={setActive} />
    
    </section>
  )
}

export default AboutTestimonial
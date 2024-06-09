
import React from 'react'
import img1 from "../../Assets/7ee2e0e3-a351-41be-8a8d-da82df2f3674.JPG"
import img2 from "../../Assets/a78a5a4b-b622-4034-87c5-32f5d4a133a2 2.JPG"
import img3 from "../../Assets/93b67b4a-b146-42b5-ab62-fe042a82d7a8.JPG"
import img4 from "../../Assets/9c24e5af-97ea-4645-b687-667f48158c7d.JPG"
import img5 from "../../Assets/6d06658f-ba20-472c-a9d0-e6869a794cd5.JPG"
import img6 from "../../Assets/e85b1786-1135-4a77-9e3b-96812311fb3e.JPG"

const Team = () => {
  return (
    <section className='w-full py-20 bg-[#FAFFF5]'>
        <h2 className='text-center text-4xl font-semibold mb-20'>Meet The Team</h2>
        <section className='flex sm:flex-col gap-28 justify-between w-[80%] mx-auto'>
            <div className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px]' src={img1} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Olumide Aju(SAN)</h2>
                    <h2 className='text-[20px]'>MCL</h2>
                </div>
            </div>
            <div  className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px] object-fill'  src={img2} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Martin Gitari</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
            <div  className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px] object-fill' src={img3} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Funmi Ajayi</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
        </section>
        <section className='flex sm:flex-col gap-28 justify-between mt-10 w-[80%] mx-auto'>
            <div className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px]' src={img4} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Lekan Ajisafe</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
            <div  className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px] object-fill'  src={img5} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Tunde Okeniyi</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
            <div  className='w-[30%]'>
                <img className='rounded-[10px] w-full h-[380px] object-fill' src={img6} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>Lami Okoya</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Team
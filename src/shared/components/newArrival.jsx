import React from 'react'
import sony5 from "../../pages/home/images/ps5-slim-goedkope-playstation_large 1.png";
import women from "../../pages/home/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import spiker from "../../pages/home/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import duxi from "../../pages/home/images/652e82cd70aa6522dd785109a455904c.png";


const NewArrival = () => {
  return (
    <div>
<section className='max-w-[1200px] mx-auto pt-[60px]'>
<div className="flex items-center gap-[16px] ">
          <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
          <p className="text-[#DB4444]">Featured</p>
        </div>
        <div className="flex items-center gap-[87px] flex-col md:flex-row">
            <p className="text-[36px]">New Arrival</p>
          </div>
          <div className='pt-[32px] grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-[32px] md:w-[100%] '>
            <div className='bg-black md:row-start-1 md:row-end-3 md:col-end-2 flex flex-col-reverse items-start'>
            <div className='text-[white] w-[60%] mx-auto flex flex-col gap-[16px] '>
                    <h2 className='text-[24px]'>PlayStation 5</h2>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <p className='decoration-[1px]'>Shop Now</p>
                </div>
                <img src={sony5} className='' alt="" />
            </div>
            <div className='md:col-start-2 md:col-end-4 bg-black flex items-end'>
                <div className='text-[white] w-[40%] mx-auto flex flex-col gap-[16px] '>
                    <h2 className='text-[24px]'>Women’s Collections</h2>
                    <p>Featured woman collections that give you another vibe.</p>
                    <p className='decoration-[1px]'>Shop Now</p>
                </div>
                <img src={women} alt="" className='w-[60%]' />
            </div>
            <div className='bg-[#000000d6] flex flex-col-reverse items-center'>
            <div className='text-[white] w-[60%] mx-auto flex flex-col gap-[16px] '>
                    <h2 className='text-[24px]'>Speakers</h2>
                    <p>Amazon wireless speakers</p>
                    <p className='decoration-[1px]'>Shop Now</p>
                </div>
                <img src={spiker} alt="" className=''/>

            </div>

            <div className='bg-[#000000d6] flex flex-col-reverse items-center '>
            <div className='text-[white] w-[60%] mx-auto flex flex-col gap-[16px]  '>
                    <h2 className='text-[24px]'>Perfume</h2>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <p className='decoration-[1px]'>Shop Now</p>
                </div>
                <img src={duxi} alt="" className=''/>
            </div>
          </div>
</section>

    </div>
  )
}

export default NewArrival
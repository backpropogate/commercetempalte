import React from 'react'
import { Slide } from 'react-slideshow-image';

const Wordforit = () => {
  return (
    <div className='p-4 mt-8 '>
        <div className=' mb-8'>
            <div className='text-lg font-extrabold text-center mb-3'>DON’T TAKE OUR WORD FOR IT</div>
            <div className='flex gap-1 text-bold justify-center items-center'> <img className=' w-16 h-4' src="/stars 2.png" alt="" /> <p className='font-semibold'>Rated 4.8 out of 5</p></div>
        </div>
        <div className=' dontTake mb-5 rounded-xl p-6'> 
        <Slide className='myslide p-5'  slidesToScroll={1} slidesToShow={1} indicators={true}>
                <section className=' p-6'>
                    <div className='flex gap-1'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> <p>Jenna P.</p></div>
                    <div className='flex gap-2 items-center'> <img className=' w-16 h-4' src="/stars 2.png" alt="" /><p>4.5 out of 5</p></div>
                    <div><p className=' italic'>lorem ipsum gfjmgfdjmhg dmfgmfdkgmdfkgmdkgmd</p></div>
                </section>
                <section className=' p-6'>
                    <div className='flex gap-1'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> <p>Jenna P.</p></div>
                    <div className='flex gap-2 items-center'> <img className=' w-16 h-4' src="/stars 2.png" alt="" /><p>4.5 out of 5</p></div>
                    <div><p className=' italic'>lorem ipsum gfjmgfdjmhg dmfgmfdkgmdfkgmdkgmd</p></div>
                </section>
                <section className=' p-6'>
                    <div className='flex gap-1'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> <p>Jenna P.</p></div>
                    <div className='flex gap-2 items-center'> <img className=' w-16 h-4' src="/stars 2.png" alt="" /><p>4.5 out of 5</p></div>
                    <div><p className=' italic'>lorem ipsum gfjmgfdjmhg dmfgmfdkgmdfkgmdkgmd</p></div>
                </section>
              
                
                
                
                
            </Slide>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-2'>
    <div className='flex whitespace-nowrap w-40 text-center   box-shadow cursor-pointer hover:shadow-sm  rounded-md text-white convert-green-bg py-2.5 px-5 font-semibold gap-1 items-center'>
                       
                        <div>All Reviews 👉</div> 
                     
                    </div>
                    <img className=' w-36' src="/trust.jpg" alt="" />
                    </div>
    </div>
  )
}

export default Wordforit
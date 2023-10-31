import React from 'react'

const Reviews = () => {
  return (
    < div id='review'>
    {/* mobile version */}
    <div>
        <div className=' border-t-2 border-b-2 border-gray-100 px-6 py-10' >
            <div className=' font-bold'>Customer ratings</div>
            <div className='flex gap-2 items-center'><img src="/stars 1.png" alt="" className=' h-4' /><p>4.5 out of 5</p></div>
        </div>
        
        <div className='border-b-2 border-gray-100 px-6 py-10'>
          <div className='font-bold text-lg mb-3'>All reviews</div>
          <div className=' mb-10'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> Judy p.</div>
            <div className='flex gap-2 items-center'><img className=' stars-review' src="/stars 2.png" alt="" /><p className=' font-semibold italic convert-green'>Verified ✓</p></div>
            <div>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim 
            </div>
          </div>
          <div>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> Judy p.</div>
            <div className='flex gap-2 items-center'><img className=' stars-review' src="/stars 2.png" alt="" /><p className=' font-semibold italic convert-green'>Verified </p><p className='convert-green italic font-extrabold'>✓</p></div>
            <div>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim 
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Reviews
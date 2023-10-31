import React from 'react'
import Link from 'next/link'
import OurStory from './OurStory'

const Hero = () => {
    return (
       <>
        <div className="bg-cover bg-center md:h-screen h-auto flex flex-col justify-center items-center relative py-8 md:py-0" 
        style={{ backgroundImage: 'url(/banner.jpg)' }}>
       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay for better contrast */}
       <h1 className="text-3xl md:text-5xl text-white mb-4 md:mb-8 text-center px-4 z-10 max-w-xl">
           For That Special Someone, Perfectly Timed for Christmas
       </h1>
       <div className="space-x-2 md:space-x-4 z-10 flex flex-col md:flex-row">
           
           <button className="bg-white text-black border border-black px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
               Contact Us
           </button>
       </div>
   </div>
   <OurStory/>
   </>
      
    )
}

export default Hero

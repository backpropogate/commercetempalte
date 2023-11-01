import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination} from 'swiper'
import RecommendedList from './RecommendedList'
import ContactSection from './ContactSection'
import Faq from './Faq'
import OurStory from './OurStory'
import Chatbot from './Chatbot'
import Reviews from './Reviews'
import Wordforit from './Wordforit'
import VideoSection from './VideoSection'

const ProductPageContent = ( { product }) => {

    const images = []

    product.images.edges.map((image, i ) => {
        images.push(
            <SwiperSlide key={`slide-${i}`}>
                <Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover" />
            </SwiperSlide>
        )
    })
    SwiperCore.use([Navigation, Pagination])
    return (
        <div className=' overflow-x-hidden'>
            <div className='flex items-center gap-2 mb-3 float-right mr-6'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#E3FAC4" />
                            <circle className=' animate-pulse' cx="6" cy="6" r="3" fill="#5FB40E" />
                        </svg>
                        <h2 className='convert-green font-semibold'>In Stock Now</h2>

                    </div>
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start 
        md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto  ">
            <div className="w-full max-w-md border bg-white  overflow-hidden shadow-lg md:w-1/2">
                <div className="relative h-96 w-full">
                    <Swiper
                    style={{'--swiper-navigation-color': '#fcd34d', '--swiper-pagination-color': '#fcd34d'}}
                    navigation
                    pagination={{clickable: true}}
                    className="h-96 "
                    loop="true"
                    >
                        {images}
                    </Swiper>
                </div>
            </div>
            <ProductForm product={product} />
        </div>
        
        <div className='m-5' dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <VideoSection/>
        <OurStory/>
        
        <Reviews/>
        <Faq/>       
        <ContactSection/>
        
        </div>
    )
}

export default ProductPageContent

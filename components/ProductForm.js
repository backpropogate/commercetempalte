import PreviousMap from "postcss/lib/previous-map"
import { useState, useContext} from "react"
import { formatter} from '../utils/helpers'
import ProductOptions from "./ProductOptions"
import { AiOutlineEye, AiFillCheckCircle } from 'react-icons/ai';
import { FaStarHalf, FaStar } from 'react-icons/fa';
import styles from '../components/styles/styles.module.css'
import Image from 'next/image'




import { cartContext } from "../context/shopContext"

const ProductForm = ({product}) => {
    const {addToCart} = useContext(cartContext)
    
    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {}

        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value
        })

        return {
            id: variant.node.id,
            title: product.title,
            handle:product.handle,
            image: variant.node.image?.originalSrc,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.priceV2.amount,
            variantQuantity: 1

        }
    })

    const defaultValues = {}
    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })

    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)
    
    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return { ...prevState, [name]: value}
        })

        const selection = {
            ...selectedOptions,
            [name]: value
        }
        
        allVariantOptions.map(item => {
            if (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item)
            }
        })
    }
    return (
        <div className=" p-2 shadow-md flex flex-col w-full md:w-1/3">
            <div className='flex mb-3 cursor-pointer hover:opacity-60'>
                    <a className="flex items-center"href="#review">
                    < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      <FaStarHalf className={styles.amzStar}/>                    
                    <p>( Rated 4.5 )</p>
                    </a>
                </div>
                <div className="flex my-2">
                <span className=" text-sm new-arrival-badge bg-yellow-300 text-[#29bd47]gray-900 px-2.5 py-1 rounded-md text-[#29bd47]sm font-bold inline-block mb-2.5 max-w-max">New Arrival</span>
<span className="selling-fast-badge text-sm bg-gray-900 text-yellow-300 px-2.5 py-1 rounded-md text-[#29bd47]sm font-bold inline-block mb-2.5 ml-1.5 max-w-max">🔥 Selling Fast</span>
</div>

            <h2 className="text-[#29bd47]2xl font-bold">{product.title}</h2>
            <span className="pb-3">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
            {
                product.options.map(({name, values}) => (
                    <ProductOptions
                    key={`key-${name}`}
                    name={name}
                    values={values}
                    selectedOptions={selectedOptions}
                    setOptions={setOptions}
                    
                    />
                ))
            }
            <div className=' mt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4'>
    <div>
        <p className='flex items-center gap-2 text-[#29bd47]sm md:text-[#29bd47]base'><AiFillCheckCircle className='text-[#29bd47]' />Unique, one-of-a-kind gift</p>
        <p className='flex items-center gap-2 text-[#29bd47]sm md:text-[#29bd47]base'><AiFillCheckCircle className='text-[#29bd47]' />NOT SOLD in stores</p>
        <p className='flex items-center gap-2 text-[#29bd47]sm md:text-[#29bd47]base'><AiFillCheckCircle className='text-[#29bd47]' /> 2-7 Business Days</p>
    </div>
    
</div>
<div className='flex justify-center mt-3  cursor-pointer hover:opacity-60'>
                    <a className="flex items-center"href="#review">
                    < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      <FaStarHalf className={styles.amzStar}/>                    
                    <p>( Rated 4.5 )</p>
                    </a>
                </div>
            <button
            onClick={() => {
                addToCart(selectedVariant)

            }} 
            className=" inline-block mt-2 bg-[#29bd47] rounded-lg text-white px-2 py-3 hover:bg-gray-800 font-bold  border-b-8 border-[#229d3b] hover:border-black hover:border-b-4"> Get Mine Now  👉</button>
            <div className='mt-2 mb-3 flex justify-center'>
  <Image
    src="/trust.jpg"
    alt="Trust Badges" // Always add an alt attribute for accessibility
    width={144} // width in pixels; adjust based on the aspect ratio of your image
    height={16} // height in pixels; in this case, you had the class w-36
  />
</div>
            
            
        </div>
        
    )
}

export default ProductForm

import styles from '../components/styles/styles.module.css'
import React from 'react'
import { FaStarHalf, FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    < div id='review'>
    {/* mobile version */}
    <div>
        <div className=' border-t-2 border-b-2 border-gray-100 px-6 py-10' >
            <div className=' font-bold'>Customer ratings</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    <FaStarHalf className={styles.amzStar}/>                    
                    
            </a>        
              <p>4.5 out of 5</p></div>
        </div>
        
        <div className='border-b-2 border-gray-100 px-6 py-10'>
          <div className='font-bold text-lg mb-3'>All reviews</div>
          <div className=' mb-4'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> Javier G.</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    <FaStar className={styles.amzStar}/>                    
                    
            </a>
              <p className={`${styles.convertGreen} font-semibold italic`}>Verified ✓</p></div>
            <div>
             gave it to my wife on our anniversary she was so happy!!
            </div>
          </div>
          <div className=' mb-4'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="review" /> Antwon C.</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    <FaStarHalf className={styles.amzStar}/>                    
                    
            </a>              <p className={`${styles.convertGreen} font-semibold italic`}>Verified </p><p className={`${styles.convertGreen} font-extrabold italic`}>✓</p></div>
            <div>
            The lady loved it.. shipping was crazy fast. Thanks
            </div>
          </div>
          <div className=' mb-4'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> Joshua R.</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    <FaStar className={styles.amzStar}/>                    
                    
            </a>              <p className={`${styles.convertGreen} font-semibold italic`}>Verified </p><p className={`${styles.convertGreen} font-extrabold italic`}>✓</p></div>
            <div>
            she cried while reading the card            
            </div>
            </div>
            <div className=' mb-4'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> elumbe T.</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    <FaStarHalf className={styles.amzStar}/>                    
                    
            </a>              <p className={`${styles.convertGreen} font-semibold italic`}>Verified </p><p className={`${styles.convertGreen} font-extrabold italic`}>✓</p></div>
            <div>
            When I order this I had no idea how nice it would be. it put tears in her eyes and I was rewarded with lots of kisses!
            </div>
          </div>
          <div className=' mb-4'>
            <div className='flex gap-3 items-center'><img className=' w-6 rounded-lg' src="/customer.jpg" alt="" /> Shakur M.</div>
            <div className='flex gap-2 items-center'>
            <a className="flex ">
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    < FaStar className={styles.amzStar}/>
                    
            </a>              <p className={`${styles.convertGreen} font-semibold italic`}>Verified </p><p className={`${styles.convertGreen} font-extrabold italic`}>✓</p></div>
            <div>
            My wife loves it
            </div>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default Reviews
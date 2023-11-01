import Link from 'next/link'
import { useContext } from 'react'
import { cartContext } from '../context/shopContext'
import MiniCart from './miniCard'
import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { FaStarHalf, FaStar } from 'react-icons/fa';
import styles from '../components/styles/styles.module.css'





import Image from 'next/dist/client/image'

export default function Nav() {
    const {cart, cartOpen, setCartOpen} = useContext(cartContext)
    const [isOpen, setIsOpen] = useState(false);
    
    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })
    return (
        <header className= "border-b  top-0 z-20 bg-white  shadow-sm">
            <div className=" mb-2 flex items-center justify-between max-w-6xl pt-2 pb-2 px-6 mx-auto lg:max-w-screen-xl">
                <Link href="/" passHref>
                    <a className="cursor-pointer">
                        <span className="text-lg pt-1 font-bold flex justify-center">
                        <Image
        src="/sentimbox.png"
        alt="SentimBox Logo"
        width={64} // width in pixels
        height={64} // height in pixels; adjust based on your image's aspect ratio
        className="sm:w-32" // This will ensure it enlarges on larger screens
      />
                        </span>
                    </a>
                </Link>
                <a className=" flex gap-2 text-md font-bold cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
                >
                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25001 19.5556C9.09378 19.5556 9.77779 18.8715 9.77779 18.0278C9.77779 17.184 9.09378 16.5 8.25001 16.5C7.40624 16.5 6.72223 17.184 6.72223 18.0278C6.72223 18.8715 7.40624 19.5556 8.25001 19.5556Z" fill="black"/>
<path d="M16.1945 19.5556C17.0382 19.5556 17.7222 18.8715 17.7222 18.0278C17.7222 17.184 17.0382 16.5 16.1945 16.5C15.3507 16.5 14.6667 17.184 14.6667 18.0278C14.6667 18.8715 15.3507 19.5556 16.1945 19.5556Z" fill="black"/>
<path d="M20.2278 3.905C20.1709 3.83104 20.0978 3.77111 20.0141 3.7298C19.9304 3.68849 19.8384 3.66689 19.745 3.66667H5.62836L5.35336 2.79278C5.32315 2.69895 5.27069 2.61381 5.20046 2.54465C5.13023 2.47548 5.04431 2.42433 4.95003 2.39555L2.44447 1.62555C2.36743 1.60188 2.28648 1.59361 2.20624 1.60122C2.126 1.60883 2.04805 1.63217 1.97683 1.66991C1.833 1.74612 1.72534 1.87635 1.67753 2.03194C1.62971 2.18754 1.64567 2.35575 1.72188 2.49958C1.79809 2.64341 1.92832 2.75107 2.08392 2.79889L4.2778 3.47111L7.07669 12.3139L6.08058 13.1328L6.00114 13.2122C5.7548 13.4975 5.61523 13.8594 5.60631 14.2362C5.5974 14.613 5.71968 14.9812 5.95225 15.2778C6.11881 15.4803 6.33047 15.6411 6.57029 15.7472C6.81011 15.8533 7.07143 15.9018 7.33336 15.8889H17.5328C17.6949 15.8889 17.8503 15.8245 17.9649 15.7099C18.0795 15.5953 18.1439 15.4399 18.1439 15.2778C18.1439 15.1157 18.0795 14.9603 17.9649 14.8457C17.8503 14.731 17.6949 14.6667 17.5328 14.6667H7.23558C7.16521 14.6643 7.09665 14.6437 7.03652 14.6071C6.97639 14.5705 6.92672 14.5189 6.89232 14.4575C6.85791 14.3961 6.83994 14.3268 6.84012 14.2564C6.8403 14.186 6.85864 14.1168 6.89336 14.0556L8.36614 12.8333H17.7956C17.9352 12.8374 18.072 12.7935 18.1832 12.709C18.2943 12.6245 18.3732 12.5045 18.4067 12.3689L20.3623 4.42444C20.3808 4.33334 20.3784 4.23919 20.3551 4.14918C20.3318 4.05916 20.2883 3.97565 20.2278 3.905Z" fill="black"/>
</svg> ({cartQuantity})
                </a>
                <MiniCart cart={cart} />
            </div>
            <div className='mx-0 bg-[#5b32f6] p-2 px-5 text-white text-center text-sm flex items-center justify-center'>
    <span>Payment plans available</span>
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="shop-pay-logo h-5 ml-2" viewBox="0 0 341 81" fill="none" >
        <path fillRule="evenodd" clipRule="evenodd" d="M227.297 0C220.448 0 214.896 5.47237 214.896 12.2229V67.8125C214.896 74.563 220.448 80.0354 227.297 80.0354H328.357C335.206 80.0354 340.758 74.563 340.758 67.8125V12.2229C340.758 5.47237 335.206 0 328.357 0H227.297ZM244.999 55.8917V41.8012H253.993C262.21 41.8012 266.579 37.2604 266.579 30.379C266.579 23.4976 262.21 19.3782 253.993 19.3782H239.205V55.8917H244.999ZM244.999 24.8084H252.663C257.982 24.8084 260.595 26.9617 260.595 30.5663C260.595 34.1708 258.077 36.3242 252.9 36.3242H244.999V24.8084ZM276.795 56.6407C281.212 56.6407 284.109 54.7214 285.439 51.4445C285.819 55.0959 288.052 56.9684 292.896 55.7044L292.944 51.819C290.996 52.0063 290.616 51.3041 290.616 49.2912V39.7415C290.616 34.124 286.864 30.8003 279.93 30.8003C273.09 30.8003 269.148 34.1708 269.148 39.8819H274.468C274.468 37.1668 276.415 35.5284 279.835 35.5284C283.444 35.5284 285.107 37.0732 285.059 39.7415V40.9586L278.932 41.614C272.045 42.3629 268.246 44.9376 268.246 49.4316C268.246 53.1298 270.905 56.6407 276.795 56.6407ZM277.982 52.4276C274.99 52.4276 273.803 50.836 273.803 49.2443C273.803 47.091 276.273 46.1079 281.117 45.5462L284.917 45.1249C284.679 49.2443 281.877 52.4276 277.982 52.4276ZM310.537 57.7174C308.115 63.5221 304.22 65.2541 298.141 65.2541H295.528V60.4793H298.331C301.655 60.4793 303.27 59.4494 305.028 56.5002L294.246 31.5493H300.23L307.925 49.7593L314.764 31.5493H320.606L310.537 57.7174Z" fill="rgb(255, 255, 255)"></path>
      <path d="M29.5136 35.1798C21.5797 33.4835 18.0451 32.8197 18.0451 29.8064C18.0451 26.9722 20.4371 25.5604 25.221 25.5604C29.4282 25.5604 32.5036 27.3726 34.7674 30.9232C34.9382 31.1972 35.2906 31.292 35.5789 31.1445L44.506 26.6983C44.8263 26.5402 44.9438 26.1399 44.7623 25.8343C41.0569 19.5022 34.2121 16.0358 25.1996 16.0358C13.3574 16.0358 6 21.7885 6 30.9338C6 40.648 14.9591 43.1029 22.9038 44.7992C30.8484 46.4955 34.3936 47.1592 34.3936 50.1725C34.3936 53.1858 31.8095 54.6082 26.6518 54.6082C21.8893 54.6082 18.3548 52.4589 16.2191 48.2866C16.059 47.981 15.6852 47.8546 15.3756 48.0127L6.46985 52.364C6.16017 52.5221 6.03203 52.8908 6.19221 53.2069C9.72673 60.2134 16.9773 64.1538 26.6625 64.1538C38.996 64.1538 46.4494 58.496 46.4494 49.0663C46.4494 39.6365 37.4476 36.8972 29.5136 35.2009V35.1798Z" fill="rgb(255, 255, 255)"></path>
      <path d="M77.3525 16.0358C72.291 16.0358 67.8168 17.8059 64.6026 20.9561C64.3997 21.1458 64.0687 21.0088 64.0687 20.7349V0.621625C64.0687 0.273937 63.791 0 63.4387 0H52.2692C51.9168 0 51.6391 0.273937 51.6391 0.621625V63.0476C51.6391 63.3952 51.9168 63.6692 52.2692 63.6692H63.4387C63.791 63.6692 64.0687 63.3952 64.0687 63.0476V35.6644C64.0687 30.3754 68.1798 26.319 73.7219 26.319C79.2639 26.319 83.279 30.2911 83.279 35.6644V63.0476C83.279 63.3952 83.5566 63.6692 83.909 63.6692H95.0785C95.4309 63.6692 95.7085 63.3952 95.7085 63.0476V35.6644C95.7085 24.1591 88.0628 16.0464 77.3525 16.0464V16.0358Z" fill="rgb(255, 255, 255)"></path>
      <path d="M118.389 14.2552C112.324 14.2552 106.622 16.0779 102.542 18.7224C102.265 18.9016 102.169 19.2703 102.34 19.5548L107.262 27.8466C107.444 28.1416 107.828 28.247 108.127 28.0679C111.224 26.2241 114.769 25.2653 118.389 25.2864C128.138 25.2864 135.303 32.0716 135.303 41.0377C135.303 48.6763 129.569 54.3342 122.297 54.3342C116.371 54.3342 112.26 50.9311 112.26 46.1266C112.26 43.3767 113.445 41.122 116.531 39.5311C116.851 39.3625 116.969 38.9727 116.777 38.6671L112.132 30.9126C111.982 30.6598 111.662 30.5439 111.373 30.6492C105.148 32.925 100.78 38.4037 100.78 45.7579C100.78 56.8839 109.761 65.1863 122.287 65.1863C136.916 65.1863 147.434 55.1876 147.434 40.8481C147.434 25.476 135.197 14.2446 118.368 14.2446L118.389 14.2552Z" fill="rgb(255, 255, 255)"></path>
      <path d="M180.098 15.9515C174.449 15.9515 169.409 18.006 165.725 21.6304C165.522 21.8306 165.191 21.6831 165.191 21.4092V17.0473C165.191 16.6996 164.914 16.4256 164.561 16.4256H153.68C153.328 16.4256 153.05 16.6996 153.05 17.0473V79.3784C153.05 79.7261 153.328 80 153.68 80H164.849C165.202 80 165.48 79.7261 165.48 79.3784V58.9385C165.48 58.6645 165.811 58.5276 166.013 58.7067C169.687 62.0782 174.545 64.0485 180.109 64.0485C193.211 64.0485 203.43 53.5862 203.43 39.9947C203.43 26.4032 193.2 15.941 180.109 15.941L180.098 15.9515ZM177.995 53.4914C170.541 53.4914 164.892 47.6439 164.892 39.9104C164.892 32.177 170.53 26.3295 177.995 26.3295C185.459 26.3295 191.086 32.0822 191.086 39.9104C191.086 47.7387 185.533 53.4914 177.984 53.4914H177.995Z" fill="rgb(255, 255, 255)"></path>
    </svg>
</div>
<Marquee gradient="false" gradientColor='[0,0,0]' className='overflow-hidden text-xs text-white p-3 bg-black' play= 'false'>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      < FaStar className={styles.amzStar}/>
      <FaStarHalf className={styles.amzStar}/>
   <p>Amazing customer service!</p>
</Marquee>
        </header>
    )
}


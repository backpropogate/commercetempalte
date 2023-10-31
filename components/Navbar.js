import React, { useState } from 'react';
import Link from 'next/link'
import { useContext } from 'react'
import { cartContext } from '../context/shopContext'
import MiniCart from './miniCard'



import Image from 'next/dist/client/image'

function Navbar() {
    const {cart, cartOpen, setCartOpen} = useContext(cartContext)
    const [isOpen, setIsOpen] = useState(false);

    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })

    return (
        <div className="flex justify-between items-center p-4 bg-white">
            {/* Mobile View */}
            <div className="py-2 px-4 flex justify-between items-center">
            <div>
                <img src="https://www.sentimbox.com/cdn/shop/files/sentimbox.png?v=1698211934&width=160" alt="Sentimbox Logo" className="h-12" />
            </div>
            <div >
                        <button className="mr-3">
                            <i className="fa fa-search"></i>
                        </button>
                        <button>
                            <a onClick={() => setCartOpen(!cartOpen)}>
                            <i className="fa fa-shopping-bag"></i>
                            </a>
                        </button>
                        <MiniCart cart={cart} />
                    </div>

            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            {/* Logo */}
            

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-black">Home</a>
                <a href="#" className="text-gray-700 hover:text-black">Contact</a>
                <a href="#" className="text-gray-700 hover:text-black">Refund Policy</a>
                <button>
                    <i className="fa fa-search text-gray-700 hover:text-black"></i>
                </button>
                <button>
                <a onClick={() => setCartOpen(!cartOpen)}>
                    <i className="fa fa-shopping-bag text-gray-700 hover:text-black"></i>
                    </a>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-12 left-0 w-full bg-white border-t-2">
                    <div className="py-2 px-4 border-b-2">
                        <a href="#" className="block py-2">Home</a>
                    </div>
                    <div className="py-2 px-4 border-b-2">
                        <a href="#" className="block py-2">Contact</a>
                    </div>
                    <div className="py-2 px-4 border-b-2">
                        <a href="#" className="block py-2">Refund Policy</a>
                    </div>
                    <div className="py-2 px-4 flex justify-between items-center">
                        <button className="mr-3">
                            <i className="fa fa-search"></i>
                        </button>
                        <button>
                            <a onClick={() => setCartOpen(!cartOpen)}>
                            <i className="fa fa-shopping-bag"></i>
                            </a>
                        </button>
                        <MiniCart cart={cart} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

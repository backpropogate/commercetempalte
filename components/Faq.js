import React from 'react'
import styles from '../components/styles/styles.module.css'

const Faq = () => {
  return (
    
    <div className="bg-[#1f1f21] p-5 text-white font-sans">

    <h2 className="text-center font-bold mb-5 text-2xl">Frequently Asked Questions</h2>

    <details className="mb-4">
        <summary className={`flex justify-between items-center bg-white p-2.5 cursor-pointer text-[#1f1f21] outline-none relative ${styles.summaryCaret}`} tabIndex="0">How long does shipping take?</summary>
        <p className="p-2.5">Shipping usually takes 2-7 business days, but can vary depending on your location and the availability of the product.</p>
    </details>

    <details className="mb-4">
        <summary className={`flex justify-between items-center bg-white p-2.5 cursor-pointer text-[#1f1f21] outline-none relative ${styles.summaryCaret}`} tabIndex="0">What is your return policy?</summary>
        <p className="p-2.5">We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
    </details>

    <details className="mb-4">
        <summary className={`flex justify-between items-center bg-white p-2.5 cursor-pointer text-[#1f1f21] outline-none relative ${styles.summaryCaret}`} tabIndex="0">How can I track my order?</summary>
        <p className="p-2.5">Once your order has shipped, you will receive a tracking number via email. You can use this number on our website to track the progress of your order.</p>
    </details>

    <details className="mb-4">
        <summary className={`flex justify-between items-center bg-white p-2.5 cursor-pointer text-[#1f1f21] outline-none relative ${styles.summaryCaret}`} tabIndex="0">Do you ship internationally?</summary>
        <p className="p-2.5">Yes, we ship to most countries worldwide. Shipping fees and times may vary based on your location.</p>
    </details>

    <details className="mb-4">
        <summary className={`flex justify-between items-center bg-white p-2.5 cursor-pointer text-[#1f1f21] outline-none relative ${styles.summaryCaret}`} tabIndex="0">Can I change or cancel my order?</summary>
        <p className="p-2.5">You can change or cancel your order within 24 hours of placing it. After this time, we cannot guarantee any changes or cancellations.</p>
    </details>

</div>


    
    
    
  )
}

export default Faq
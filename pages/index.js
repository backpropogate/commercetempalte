import Head from 'next/head'
import {getProductsInCollection} from '../lib/shopify'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'
import styles from '../components/styles/styles.module.css'

export default function Home({products}) {
  
  return (
    <div className="">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Hero/>
    <ProductList products={products}/>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {products}, // will be passed to the page component as props
  }
}

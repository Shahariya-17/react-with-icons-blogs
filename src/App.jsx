
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
// import PricingOptions from './components/PricingOptions/PricingOptions'
import PricingCard from './components/PricingCard/PricingCard'


const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {
  
 

  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <Navbar></Navbar>
      </header>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
      {/* <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          // <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense> */}
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
      </main>
      
     
    </>
  )
}

export default App

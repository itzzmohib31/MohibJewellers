import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroImg from '../assets/heroimg.png'
import Jewel1 from '../assets/jewel1.jpg'
import {useState} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [Hamburger,setHamburger]=useState('hidden');
  const [ExpandedNav,setExpandedNav]=useState('block');

  return (
    <div>
    <main className='bg-slate-800'>

<nav className='text-white  md:flex px-4 py-4 justify-between'>

  <div>
    <h4 className='text-2xl w-100'>Mohib Jewellers</h4>
  </div>


  <div className={'md:flex text-l justify-evenly '}>
    <div className='m-2'><a>Home</a></div>
    <div className='m-2'><a>Products</a></div>
    <div className='m-2'><a>Gold Rates</a></div>
    <div className='m-2'><a>Visit Us</a></div>

  </div>

  <div>

    <button className='text-white bg-yellow-400 px-3 text-l py-2 rounded'>View Cart</button>

  </div>
 


</nav>


<div className='md:flex justify-around items-center'>
  <div className='text-white' >
  <h2 className='font-poppins font-bold  text-white text-7xl  md:text-9xl'>MR <span className='text-yellow-400'>Jewellers</span></h2>
  <p className='font-poppins text-white sm:text-4xl text-2xl md:text-3xl'>A Symbol Of Showing Love To Your Loved Ones</p>
  </div>

  <div>
  <Image
      src={HeroImg}
      alt="Picture of the author"
      width={600}
      height={600}
    />
  </div>
</div>


</main>


<div className='w-100 p-4'>
  <h1 className='text-4xl text-center text-gray-700'>Featured Products</h1>
</div>

 <div className='product-cols md:flex justify-around'>

   <div className='m-2 max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
   <Image
      src={Jewel1}
      className='max-w-lg'
      alt="Picture of the author"
      height={300}
    />
    <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
   </div>

   <div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
   <Image
      src={Jewel1}
      className='max-w-lg'
      alt="Picture of the author"
      height={300}
    />
    <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
   </div>

    <div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
   <Image
      src={Jewel1}
      className='max-w-lg'
      alt="Picture of the author"
      height={300}
    />
    <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
   </div>



 </div>

 <div className='product-cols md:flex justify-around m-2'>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   className='max-w-sm'
   alt="Picture of the author"
   height={300}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   className='max-w-sm'
   alt="Picture of the author"
   height={300}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

 <div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   className='max-w-sm'
   alt="Picture of the author"
   height={300}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>



</div>



    </div>



  
  )
}

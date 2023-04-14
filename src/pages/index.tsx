import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroImg from '../assets/heroimg.png'
import Jewel1 from '../assets/jewel1.jpg';
import {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from "react-icons/fa";
import GoldBar from '../assets/goldbar.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })


  const [Nav,setNav]=useState('hidden');
  const [CardImageSize,setCardImageSize]=useState(300);
  const [ExpandedNav,setExpandedNav]=useState('block');
  const [Hamburger,setHamburger]=useState('hidden');
  // const CardImageSize=isTabletOrMobile?600:300;
  // const ExpandedNav=isTabletOrMobile?Nav:'block';
  // const Hamburger=isTabletOrMobile?'block':'hidden';

  useEffect(()=>{
    if(isTabletOrMobile)
    {
      setCardImageSize(600);
      setExpandedNav(Nav);
      setHamburger('block');
    }
    if(isDesktopOrLaptop)
    {
      setCardImageSize(300);
      setExpandedNav('block');
      setHamburger('hidden');
    }
  },[isDesktopOrLaptop,isTabletOrMobile,Nav])


  

  const ToggleNav=()=>{
    Nav=='block'?setNav('hidden'):setNav('block');
  }


  return (
    <div>
    <main className='bg-slate-800'>

<nav className='text-white  md:flex px-4 py-4 w-full items-center justify-center'>

  <div className='flex justify-between md:w-1/5'>
    <h4 className='text-2xl w-100'>Mohib Jewellers</h4>
    <FaBars onClick={ToggleNav} className={`text-2xl ${Hamburger} `}></FaBars>

  </div>

<div className={`md:w-4/5 md:flex justify-around ${ExpandedNav} md:bg-slate-800 md:shadow-none animate m-auto shadow-xl bg-yellow-400 p-2`}>
<div className={`md:flex text-l justify-evenly`}>
    <div className='m-2'><a>Home</a></div>
    <div className='m-2'><a>Products</a></div>
    <div className='m-2'><a>Gold Rates</a></div>
    <div className='m-2'><a>Visit Us</a></div>

  </div>

  <div>
    <button className={`text-white bg-yellow-400 px-3 text-l py-2 rounded`}>View Cart</button>
  </div>
</div>



 


</nav>


<div className='md:flex justify-around items-center p-4'>
  <div className='text-white md:text-left text-center' >
  <h2 className='font-poppins font-bold  text-white text-7xl  md:text-9xl'>MR <span className=' animate-pulse text-yellow-400'>Jewellers</span></h2>
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
<div className='md:flex justify-between text-white text-2xl p-4 bg-yellow-500'>
<div className='bg-slate-800  shadow-xl rounded flex items-center p-6 mt-2'>
    
    <div>
      <Image
     src={GoldBar}
     alt="Picture of the author"
     height={200}
     width={200}
   />
      </div>
      <div>
      <h2 className='text-yellow-500  md:text-4xl'>Rs. 217800.00</h2>
     <h4 className='text-xl'>24 Karat Gold Rate (1 Tola)</h4>
      </div>
  
  
   
    </div>


  <div className='bg-slate-800  shadow-xl rounded flex items-center p-6 mt-2'>
    
    <div>
      <Image
     src={GoldBar}
     alt="Picture of the author"
     height={200}
     width={200}
   />
      </div>
      <div>
      <h2 className='text-yellow-500 md:text-4xl'>Rs. 217800.00</h2>
     <h4 className='text-xl'>24 Karat Gold Rate (1 Tola)</h4>
      </div>
  
  
   
    </div>

    <div className='bg-slate-800  shadow-xl rounded flex items-center p-6 mt-2'>
    
    <div>
      <Image
     src={GoldBar}
     alt="Picture of the author"
     height={200}
     width={200}
   />
      </div>
      <div>
      <h2 className='text-yellow-500 md:text-4xl'>Rs. 217800.00</h2>
     <h4 className='text-xl'>24 Karat Gold Rate (1 Tola)</h4>
      </div>
  
  
   
    </div>

  
</div>

<div className='w-100 p-4'>
  <h1 className='text-4xl text-center text-gray-700'>Featured Products</h1>
  <h4 className='text-xl text-center text-gray-700'>Find The Gift Of Your Dreams</h4>
</div>


<div className='product-cols md:flex justify-around m-2 animate'>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}

 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

 <div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>



</div>

 <div className='product-cols md:flex justify-around m-2 animate'>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

<div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}

 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>

 <div className='max-w-sm mx-auto py-6 bg-slate-800 rounded-lg shadow-xl'>
<Image
   src={Jewel1}
   alt="Picture of the author"
   height={300}
   width={CardImageSize}
 />
 <h4 className='text-xl text-white text-center '>Exotic Gold Set </h4>
</div>



</div>



    </div>



  
  )
}

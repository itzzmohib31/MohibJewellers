import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroImg from '../assets/heroimg.png'
import Jewel1 from '../assets/jewel1.jpg';
import {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from "react-icons/fa";
import GoldBar from '../assets/goldbar.png'

interface PriceState{
    price:number;
}


async function getGoldPrice(): Promise<number> {
  const response = await fetch('https://www.goldapi.io/api/XAU/USD',{
  method:'GET',
  headers:{
      "x-access-token": "goldapi-94vvrlgl25mh1-io"
  }

  });
  const data = await response.json();
  const goldPrice = data.price_gram_24k;
  return goldPrice;
}



const Gold=():any=>{

    const [CurrentPrice,setCurrentPrice]=useState<any>();

    useEffect(()=>{
        const GoldRates=localStorage.getItem("GoldRates");
        setCurrentPrice(GoldRates);
        setInterval(()=>{
            getGoldPrice().then(price => {
                setCurrentPrice(price);
              }).catch(error => {
                console.error(`Error fetching gold price: ${error}`);
              });

           localStorage.setItem("GoldRates",CurrentPrice);


          },(24*60*60*1000))
    })

    let FormatPrice:()=>{
      OneTola:Number,
      OneGram:Number,
      TenGram:Number,
    };
    FormatPrice=()=>{
    return {OneTola:CurrentPrice*284.50*11.6638,OneGram:CurrentPrice*284.50,TenGram:CurrentPrice*284.50*10};
    }


    const FormattedPrice=FormatPrice();
    console.log(FormattedPrice.OneTola);


   









      return(
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
              <h2 className='text-yellow-500  md:text-4xl'>Rs: {FormattedPrice.OneTola.toFixed(2)}</h2>
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
              <h2 className='text-yellow-500 md:text-4xl'>Rs: {FormattedPrice.OneGram.toFixed(2)}</h2>
             <h4 className='text-xl'>24 Karat Gold Rate (1 Gram)</h4>
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
              <h2 className='text-yellow-500 md:text-4xl'>Rs: {FormattedPrice.TenGram.toFixed(2)}</h2>
             <h4 className='text-xl'>24 Karat Gold Rate (10 Gram)</h4>
              </div>
          
          
           
            </div>
        
          
        </div>
      )

     
      

}

export default Gold;
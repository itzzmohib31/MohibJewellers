import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroImg from '../assets/heroimg.png'
import Jewel1 from '../assets/jewel1.jpg';
import {ReactElement, useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from "react-icons/fa";
import GoldBar from '../assets/goldbar.png'
import Gold from '@/Components/Gold';
export const getStaticProps = async () => {
  try {
    const response = await fetch('https://www.goldapi.io/api/XAU/USD',{
      method:'GET',
      headers:{
        "x-access-token": "goldapi-94vvrlgl25mh1-io"
      },
    });
    const data = await response.json();
    const goldPrice:number = data.price_gram_24k;

    return {
      props:{GoldPrice:goldPrice}
    };
  } catch (error) {
    console.error(error);
    return {
      props: { GoldPrice: null },
    };
  }
};

export default function GoldPage({ goldPrice }:any) {
  console.log(goldPrice)
  return <Gold GoldPrice={goldPrice} />;
}

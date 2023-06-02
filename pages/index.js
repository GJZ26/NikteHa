import About from '@/components/About';
import Advice from '@/components/Advice';
import Navbar from '@/components/Navbar';
import Text from '@/components/Text';
import Head from 'next/head';
import React from 'react'

export default function Home() {
  return (
    <>
        <Head>
        <title>Nikte Ha! | Login</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className='bg-[#FFFFF6] w-full h-screen flex flex-col'>
        <Navbar/>
        <Text/>
        <About/>
        <Advice/>
      </div>
    </>
  );
}

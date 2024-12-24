import AboutContect from '@/components/AboutContect/AboutContect';
import React from 'react'

export const metadata = {
  title: "About",
  description: "About page",
};

const getTime = async () =>{
  const res = await fetch('http://localhost:3000/time',{next : {revalidate:5}});
  const data = await res.json();
  return data?.currentTime;
}

const AboutPage = async () => {

  const currentTime = await getTime();

  return (
    <div>
       <h1 className='text-7xl'>This IS About  page</h1>
       <h1>Time : {currentTime} </h1>
       <AboutContect />
    </div>
  )
}

export default AboutPage;
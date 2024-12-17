import AboutContect from '@/components/AboutContect/AboutContect';
import React from 'react'

export const metadata = {
  title: "About",
  description: "About page",
};

const AboutPage = () => {
  return (
    <div>
       This IS About  page
       <AboutContect />
    </div>
  )
}

export default AboutPage;
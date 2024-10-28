import Link from 'next/link'
import React from 'react'

const AboutContect = () => {
  return (
    <div>
        <Link href={"/about/history"} ><h1>History</h1></Link>
        <Link href={"/about/mission"} ><h1>Mission</h1></Link>
    </div>
  )
}

export default AboutContect
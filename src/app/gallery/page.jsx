import Image from 'next/image'
import React from 'react'

const galleryPage = () => {
  return (
    <div className='min-h-screen px-12 py-24'>
      <h6 className='text-2xl mb-12'>Gallery Page</h6>
      <div>
        {
          [1,2,3,4,5]?.map((img) =>(
            <Image src={`/images/${img}.jpg`} alt='' height="1080" width="1920" />
          ))
        }
      </div>
      {/* <Image src="/images/2.jpg" alt="" height="1080" width="1920" /> */}
    </div>
  )
}

export default galleryPage

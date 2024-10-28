import React from 'react'

const page = ({params}) => {
    console.log(params.slug)
    const {title , description} = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div className='h-screen'>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}
const blogs = [
    {
      "slug": "top-10-toys-for-kids-2024",
      "title": "Top 10 Must-Have Toys for Kids in 2024",
      "description": "Discover the most popular and innovative toys of 2024 that will keep your kids entertained and learning. This guide highlights the top picks, from educational toys to the latest tech-based playthings, perfect for every age group."
    },
    {
      "slug": "benefits-of-educational-toys",
      "title": "How Educational Toys Boost Learning and Development in Kids",
      "description": "Explore the benefits of educational toys and how they help in nurturing cognitive, motor, and social skills in young children. Find out why educational toys make a valuable addition to your child’s playroom."
    },
    {
      "slug": "choosing-safe-toys-for-kids",
      "title": "The Ultimate Guide to Choosing Safe Toys for Kids",
      "description": "Learn essential tips for selecting toys that are safe for children of all ages. This guide covers everything from age-appropriate choices to materials and certifications, helping parents make informed decisions."
    }
  
  ]

export default page

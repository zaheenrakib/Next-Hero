import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='flex flex-wrap gap-10 container mx-auto'>
      {
        blogs.map((blog) => (
          <div key={blog.slug} className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${blog.slug}`} ><button className="btn">View More</button></Link>
              </div>
            </div>
          </div>
        ))
      }
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

export default BlogPage
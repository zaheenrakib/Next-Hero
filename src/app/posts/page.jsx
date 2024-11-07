import { getPosts } from '@/services/postApi';
import React from 'react'


const PostPage = async () => {
    const postsData = await getPosts();
    console.log(postsData)
  return  <>
    <div>
        <div>
            <h1>All Post</h1>
        </div>
        <div className='grid grid-cols-4 gap-5'>
            {
                postsData?.slice(0,20)?.map(({title , body , id}) => (
                    <div key={id} className='boder-2 p-6 border-red-500'>
                        <h1> Title: {title}</h1>
                        <h1> Description: {body}</h1>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  
}

export default PostPage
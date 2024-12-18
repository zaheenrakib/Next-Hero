import React from 'react'

const getDetailsPost = async (id) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return data;
}

export const generateMetadata = async ({params}) =>{

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const postData = await res.json()

  return {
      title: {
        absolute: `${postData.title}`,
      },
      description: postData.body,
      keywords : postData.body.split(' ')
  }
}


const postDetailspage = async ({params}) => {
  const {title , body} = await getDetailsPost(params.id)
  return (
    <>
    <div>
      <div>
        <h1>Title : {title} </h1>
        <h1>Description: {body} </h1>
      </div>
    </div>
    </>
  )
}

export default postDetailspage
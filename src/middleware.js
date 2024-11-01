import { NextResponse } from 'next/server'

const user = true;

export const middleware = (request) => {

  const cookies = request.cookies.get('token');
  const cook = "next-superhero"

  if(!cookies || cookies.value !== cook){
    return NextResponse.redirect(new URL('/login' , request.url))
  }

  if(!user) {
    return NextResponse.redirect(new URL('/login' , request.url))
  }
  return NextResponse.next();

}


export const config = {
    matcher : ["/dashboard" , "/blog"]
}


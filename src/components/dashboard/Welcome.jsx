import React from 'react'

const Welcome = () => {
    const time = new Date().getHours()
    let greet
    if(time<12){
        greet="Good Morning, Welcome Back!"
    }else if(time<17){
        greet="Good AfterNoon, Welcome Back!"
    }else{
        greet="Good Evening, Welcome Back!"
    }
  return (
    <div>
      <h1 className='text-white text-xl'>{greet}</h1>
    </div>
  )
}

export default Welcome

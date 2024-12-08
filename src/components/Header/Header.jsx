import React from 'react'
import Js_Quiz from '../Js_Quiz/Js_Quiz'
import Html_quiz from '../Html_Quiz/Html-Quiz'
import Quiz from '../React-Quiz/Quiz'



const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-10'
    >
        <Html_quiz/>
      <Js_Quiz/>
      <Quiz/>
    </div>
  )
}

export default Header

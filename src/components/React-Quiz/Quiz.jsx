import React from 'react'
import { Link } from 'react-router-dom';
import bg3 from "../../assets/react.png"

function Quiz() {
  return (
    <div className="flex flex-col justify-end items-center min-h-[300px] min-w-[300px] text-black border border-gray-200 rounded-2xl p-4 shadow-lg
    bg-gradient-to-r from-red-300  via-blue-400 to-slate-700"
    style={{
      backgroundImage: `url(${bg3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}>
    <Link to={"/react-quiz"}>
    <button
        className="bg-blue-900 text-white py-2 px-8 mt-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
        Start
    </button>
      </Link>
</div>
  )
}

export default Quiz

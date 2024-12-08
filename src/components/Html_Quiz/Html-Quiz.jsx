import React from 'react';
import bg1 from "../../assets/Html.webp";
import { Link } from 'react-router-dom';

const Html_quiz = () => {
    const handleStart = () => {
        alert('Quiz started');
    };

    return (
        <div
            className="flex flex-col justify-end items-center min-h-[300px] min-w-[300px] text-black border border-gray-200 rounded-2xl p-4 shadow-lg"
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
           <Link to={"/Html-quiz"}>
    <button
        className="bg-blue-900 text-white py-2 px-8 mt-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
        Start
    </button>
      </Link>
</div>
       
    );
};

export default Html_quiz;

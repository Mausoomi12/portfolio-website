import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
            </p>
            </div>

        <p className="text-xl mt-20">
        Hello! I'm Mausoomi Roy and I'm a final year student currently pursuing my Bachelor degree in Computer Science and Engineering.

        </p>
        
        <br />

        <p className="text-xl">
        I've gained expertise in a number of programming languages, including JavaScript, C++, etc., and skills in advance and modern technologies like MERN stack. As a constant learner, I look forward to securing opportunities that will provide me with new perspectives, allowing me to become better at what I do. I appreciate you taking the time to check out my portfolio. Don't hesitate to contact me ! 
        </p>
        </div>
    </div>
  )
}

export default About
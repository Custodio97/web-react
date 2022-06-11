import React from "react"

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from "../assets/react.png"
import typescript from '../assets/typescript.png'
import GitHub from '../assets/github.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen  bg-sky-600">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-hull">
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Habilidades</p>
            <p className="py-4">Tecnologias eu trabalho</p>
          </div>
          <div className="w-full grid grid-cols-2       sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} />
                 <p className="my-4">HTML</p>
            </div> 
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Javascript} />
              <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} />
              <p className="my-4">React Js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={typescript} />
              <p className="my-4">typescript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} />
              <p className="my-4">Github</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills
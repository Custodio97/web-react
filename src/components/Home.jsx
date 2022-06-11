import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
      <div name="home" className='w-full h-screen bg-sky-600'>
          {/*Container*/}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className='text-neutral-900'>Oi, meu nome é</p>
              <h1 className='text-4xl sm:text-7x1 font-bold text-neutral-800'>
                  Gabriel Custodio
              </h1>
              <h2 className='text-4xl sm:text-7x1 font-bold text-neutral-800'>
                 Sou desenvolvedor front end Jr
              </h2>
              <p className='text-neutral-900 py-4 max-w-[700px]'>
                 Sou desenvolvedor em foco web .
              </p>
              <div>
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                      Veja o meu Trabalho
                      <span className='group-hover:rotate-90 duration-300'>
                          <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                      </span>
                  </button>
              </div>
          </div>
          
    </div>
  )
}

export default Home
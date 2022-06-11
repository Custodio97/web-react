import React from 'react'

const About = () => {
  return (
      <div name="about" className='w-full h-screen  bg-sky-600'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                  <div className='sm:text-right pb-8' pl-4>
                      <p className='text-3xl  font-bold inline border-b-4 border-pink-600'>
                          Sobre mim
                      </p>
                  </div>
                  
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                      <p>Veja  meu Perfil</p>
                  </div>
                  <p className='text-sm text-black'> Minha especialidade é fazer aplicações web com foco em front end,projetos que irão trazer facilidades,bem como potencilizar o seu negócio </p>

              </div>
              
          </div>
    </div>
  )
}

export default About
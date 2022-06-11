import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full  h-screen  bg-sky-600 flex justify-center items-center p-4'>
          <form method='post' action='https://getform.io/f/a13407c0-74a9-401d-8ad0-341815bf1a3e' className='flex flex-col max-w-[500px] w-full'>
              <div className='pb-4'>
                  <p className='text-2xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                      Contato
                  </p>
             
              </div>
              <input type="text" className='bg-[#ccd6f6]  ' placeholder='Nome' name='name'/>
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email"  name='email' placeholder='Email' />
              <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" />
              <button className='text-white border-2 hover:bg-pink-600 hover:boder-pink-600 px-4 py-3 my-8 mx-auto flex'>Contato</button>
          </form>
    </div>
  )
}

export default Contact
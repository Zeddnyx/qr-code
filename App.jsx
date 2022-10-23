import QR from './images/image-qr-code.png'
import {  } from "module";
function App() {
  return (
    <div className='w-[18rem] h-[30rem] rounded-xl bg-white mx-auto my-10 grid grid-cols-1'>
      <img className='px-2 pt-2 rounded-2xl' src={QR} alt="qr-code" /> 

      <div className='text-center px-5'>
        <h1 className='font-bold text-xl py-2'>Improve your front-end skills by building projects</h1>
        <p className='text-sm text-grey-200'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      </div>
    </div>
  )
}

export default App

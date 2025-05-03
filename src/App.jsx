import './App.css'
import oval from '/assets/Oval.svg'
import qr from '/assets/QR.svg'
import ovalDown from '/assets/ovalRightBottom.png'

function App() {

  return (
   <div className="w-full h-screen flex justify-center items-center bg-slate-300 ">
     <div className="bg-white p-4 rounded-[20px] w-[320px]">
       <div className="relative bg-blue-600 rounded-[10px] max-w-[288px]">
         <img src={oval} alt="" className="absolute z-0 rounded-tl-[10px]"/>
         <img src={ovalDown} alt="" className="absolute z-0 right-0 bottom-0 rounded-br-[10px]"/>
         <img src={qr} alt="" className="relative p-16 z-10"/>
       </div>
       <div className="p-4">
         <p className="text-slate-900 text-center text-xl font-bold">Improve your front-end skills by building projects</p>
         <p className="text-slate-500 text-center text-sm pt-4 font-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>


     </div>
   </div>
  )
}

export default App

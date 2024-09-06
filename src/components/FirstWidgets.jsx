import React, { useState } from 'react'
const FirstWidgets = () => {
  const [para, setpara] = useState("p1");
  return (
    <>
      <div className='upperbox  bg-[hsl(240.66deg 69.89% 6.82%)] h-[45vh] w-[50vw] items-center flex  flex-col rounded-[15px]'>
    <div className=' w-[95%] flex justify-start'><h1 className='text-[#526f98] text-lg font-bold pl-[12px] pr-[12px] border-[2px] pt-[1px] sm:text-[13px] border-[#526f98] pb-[1px] mt-2 rounded-full'>?</h1></div>

        <nav className='sm:bg-black sm:text-[10px]  lg:text-[16px] sm:rounded-3xl sm:w-[80%]  sm:pl-3  sm:pr-3  sm:pt-2  sm:pb-2   sm:m-2 sm:gap-2  sm:flex  sm:items-center  sm:cursor-pointer  lg:bg-black  lg:rounded-3xl w-[80%]  lg: pl-3  lg:pr-3  lg:pt-2  lg:pb-2   lg:m-2 lg:gap-2  lg:flex  lg:items-center  lg:cursor-pointer'  >
            <button onClick={()=>{setpara("p1")}} className='flex-1 text-[#5c6e8a9d] font-semibold hover:scale-110 hover:text-[white] duration-300 hover:bg-slate-900 sm:hover:bg-slate-900 hover:rounded-2xl hover:shadow-cyan-800 font-sans hover:shadow-2xl pl-3 pt-2 pb-2 pr-3 '>About me </button>
            <button onClick={()=>{setpara("p2")}} className='flex-1 text-[#5c6e8a9d] font-semibold hover:scale-110 hover:text-[white] duration-300 hover:bg-slate-900 sm:hover:bg-slate-900 hover:rounded-2xl hover:shadow-cyan-800 font-sans hover:shadow-2xl pl-3 pt-2 pb-2 pr-3 '>Exprerience</button>
            <button onClick={()=>{setpara("p3")}} className='flex-1 text-[#5c6e8a9d] font-semibold hover:scale-110 hover:text-[white] duration-300 hover:bg-slate-900 sm:hover:bg-slate-900 hover:rounded-2xl hover:shadow-cyan-800 font-sans hover:shadow-2xl pl-3 pt-2 pb-2 pr-3 '>Recommended</button>
        </nav>
        <div className='para sm:pl-3 sm:pr-3 sm:pt-2 sm:pb-2 sm:w-[80%] sm:text-wrap lg:text-[16px] sm:text-[13px] sm:text-justify sm:mb-2 sm:text-[gray] sm:font-sans sm:h-[35vh] sm:overflow-y-scroll   lg:pl-3 lg:pr-3 lg:pt-2 lg:pb-2 lg:w-[80%] lg:text-wrap lg:text-justify lg:mb-2 lg:text-[gray] lg:font-sans lg:h-[35vh] lg:overflow-y-scroll'>
         {para==="p1" &&<p>Lorem ipsum dolor sit amet consectetur endis. Liendis ullam dicta nobis, vel assumenda temporibus. Quas cum eum optio obcaecati sint. Laborum earum minus, dolorum voluptatum, porro reprehenderit magnam dolores fugiat autem expedita iusto esse, quasi tenetur. Sequexplicabo quam magnam quo aut officiis est distinctio mollitia dignissimos omnis aperiam repellat quasi quibusdam tempora aspernatur, alias deserunt! Porro quas obcaecati quos soluta perspiciatis!</p>
         }
         {
          para==="p2"&&<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat assumenda suscipit veniam optio, expedita possimus adipisci doloribus non in facere rerum aperiam, sint fuga. Quisquam reiciendis neque inventore dolorum autem eos eius at laboriosam quam! Asperiores, suscipit inventore, pariatur maiores possimus doloremque perspiciatis, nobis iure labore dicta ratione vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos ratione cupiditate asperiores, at quasi dolorem porro debitis? Molestias modi hic culpa nam aliquid et beatae ipsum, numquam perferendis tenetur necessitatibus vitae, aliquam quod corrupti excepturi perspiciatis, quasi id eum.</p>
         }
         {
          para==="p3"&&<p>Lorem ipsum, do Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed ad reiciendis nulla id commodi est culpa quis. Nisi, quis. aliquid et beatae ipsum, numquam perferendis tenetur necessitatibus vitae, aliquam quod corrupti excepturi perspiciatis, quasi id eum.</p>
         }
        </div>

      </div>
      <hr className='border-[1.7px] border-[#1d40a8] shadow-lg shadow-black bg-white w-[50%]' />

 
    </>
  )
}

export default FirstWidgets

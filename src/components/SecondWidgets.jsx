import React, { useRef, useState } from 'react'

const SecondWidgets = () => {
  const fileRef = useRef()
  const [Img, setImg] = useState([]);
  const [Gallery, setGallery] = useState(false);
  const hadlechange = (e) => {
    if (e.target.files[0]) {
      setImg(Img.concat(URL.createObjectURL(e.target.files[0])))
    }
  }
  console.log(Img)


  return (
    <>
      <div className='lowerbox bg-[hsl(240.66deg 69.89% 6.82%)] h-[45vh] w-[50vw] items-center flex  flex-col rounded-[15px]'>
        <div className=' w-[95%] flex justify-start'><h1 className='text-[#526f98] text-lg font-bold pl-[12px] pr-[12px] border-[2px] pt-[1px] sm:text-[13px] border-[#526f98] pb-[1px] mt-2 rounded-full'>?</h1></div>

        <nav className='   rounded-3xl w-[80%] justify-between  pl-3  pr-3  pt-2     m-2  gap-2   flex  items-center  cursor-pointer  '  >
          <button onClick={()=>setGallery((pre)=>!pre)} className='sm:rounded-xl sm:text-white  lg:text-white   sm:bg-black sm:font-semibold  sm:hover:scale-110 sm:duration-300 sm:font-sans sm:p-3 lg:rounded-xl sm:text-[10px] lg:text-[16px]   lg:bg-black lg:font-semibold  lg:hover:scale-110 lg:duration-300 lg:font-sans lg:p-3 '>Show Gallery </button>
          <div className='flex gap-6'>
            <input type="file" hidden ref={fileRef} onChange={hadlechange} />
            <button onClick={() => fileRef.current.click()} id='btntwo' className='sm:text-[12px] lg:text-[16px] sm:p-1 sm:flex-1   sm:rounded-full bg-[#0b0b0ba5] font-semibold  hover:scale-110 duration-300 sm:shadow-md  sm:text-white  lg:text-white  sm:hover:shadow-cyan-800 sm:font-sans sm:hover:shadow-2xl  '>+ Add Image </button>
            <div className='flex items-center gap-3'>
              {/* <button className='btn sm:text-[10px]   sm:flex sm:items-center sm:font-bold sm:text-lg sm:text-[#5c6e8a] sm:pl-3 sm:pr-3 sm:pb-2  sm:bg-[#0b0b0ba5] sm:rounded-full lg:text-[16px]   lg:flex lg:items-center lg:font-bold lg:text-lg lg:text-[#5c6e8a] lg:pl-3 lg:pr-3 lg:pb-2 lg:pt-2 lg:bg-[#0b0b0ba5] lg:rounded-full'>{"<-"}</button> */}
              <button className='btn  sm:text-[10px]    sm:flex sm:items-center sm:font-bold sm:text-lg sm:text-[#5c6e8a] sm:pl-2 sm:pr-2 sm:pb-1  sm:bg-[#0b0b0ba5] sm:rounded-full lg:text-[16px]   lg:flex lg:items-center lg:font-bold lg:text-lg lg:text-[#5c6e8a] lg:pl-3 lg:pr-3 lg:pb-2 lg:pt-2 lg:bg-[#0b0b0ba5] lg:rounded-full'>{"<-"}</button>
              <button className='btn  sm:text-[10px]    sm:flex sm:items-center sm:font-bold sm:text-lg sm:text-[#5c6e8a] sm:pl-2 sm:pr-2 sm:pb-1  sm:bg-[#0b0b0ba5] sm:rounded-full lg:text-[16px]   lg:flex lg:items-center lg:font-bold lg:text-lg lg:text-[#5c6e8a] lg:pl-3 lg:pr-3 lg:pb-2 lg:pt-2 lg:bg-[#0b0b0ba5] lg:rounded-full'>{"->"}</button>

            </div>
          </div>
        </nav>


        {Gallery &&<div className="widgets sm:pb-2 flex gap-4 overflow-x-scroll w-[78%] overflow-y-hidden">

          {
            Img.map((e) => {
              return (<img loading='lazy' className='sm:w-[6rem] sm:h-[5rem] lg:h-auto sm:shadow-md sm:shadow-blue-400 sm:rounded-lg sm:cursor-pointer  lg:w-[10rem] lg:rounded-lg lg:cursor-pointer' src={e} alt="" />)
            })
          }


        </div>}
      </div>
      <hr className='border-[1.7px] border-[#1d40a8] shadow-lg shadow-black bg-white w-[50%]' />
    </>
  )
}

export default SecondWidgets

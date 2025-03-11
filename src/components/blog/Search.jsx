import React, { useEffect, useState } from 'react'

function Search({selectedTag}) {

    

     

    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='flex justify-center mt-12 flex-col 
    px-[70] md:px-[150px]'>
       <div className='bg-white shadow-lg p-3
       rounded-lg mt-[-20px] mx-[23%] flex items-center'>

            <input type='text'  placeholder='Search'
            className='outline-none ml-2 w-full'/>
       </div>
      
    </div>
  )
}

export default Search
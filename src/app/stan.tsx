import Image from 'next/image'
import React from 'react'

const Stan = () => {
  return (
    <div>

        <div className='mt-28 mb-7'>
          <span className='text-xl font-semibold px-10 lg:px-16'>{`Don't`} Miss</span>
        </div>

        <div className='flex justify-center px-10'>
    <Image
    className=''
    src={'/stan.png'}
    alt='shoes banner'
    width={1200}
    height={600}
    />
    </div>


    <div className='text-center text-black mt-16'>
        

        <span className=' text-3xl lg:text-5xl font-semibold uppercase '>flight essentials</span><br /><br />

        <span>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</span><br />

        <button className='btn '>Shop</button>
        
    </div>





    </div>
  )
}

export default Stan
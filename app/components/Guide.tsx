import Image from 'next/image'
import React from 'react'

function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          <strong>We are here for you</strong>
          
        </p>
        <div className="flex flex-wrap flex-col justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:bold-88 ">Guide You to Easy Path!</h2>
          <p className="regular-16 text-gray-30 lg:regular-20  xl:regular-24">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image src="/boat.png" width={1440} height={580} alt="boat" className='w-full object-cover object-center 2xl:rounded-5xl' />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image src="/meter.svg" alt ="meter" width={25} height={158} className='h-full w-auto' />
          <div className='flexBetween flex-col '>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination:</p>
                <p className='bold-16 text-green-50'>48 mins</p>
              </div>
              <p className='bold-20'>Roßkopf</p>
            </div>
            <div className='flex w-full flex-col mt-2 '>
                <p className='regular-16 text-gray-20'>Start Track</p>
              <p className='bold-20 whitespace-nowrap'>Freiburg im Breisgau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
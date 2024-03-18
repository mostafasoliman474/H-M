import Image from 'next/image'
import React from 'react'
interface customAdertise {
    headline: string,
    description: string,
    image: string
}
const Advertise = ({ headline, description, image }: customAdertise) => {
    return (
        <section className='relative flex flex-col w-[90%] mx-auto gap-5 justify-end text-white bg-center mt-10 h-[90vh] bg-no-repeat rounded'>
            <div className='absolute h-full w-full'>

                <Image
                    alt='category image'
                    src={image}
                    fill
                    className='w-full'
                />
            </div>
            <div className=" flex flex-col gap-4 bg-[#302f2f16] max-w-[100%] h-[100%] z-10 items-center justify-end  pb-10">
                <h1 className="text-4xl font-semibold">{headline}</h1>
                <p>{description}</p>
                <a href="/" className="px-2.5 py-2 bg-white text-[#222] text-sm rounded">
                    Shop now
                </a>
            </div>
        </section>
    )
}

export default Advertise
import Image from 'next/image'
import React from 'react'
interface customAdertise {
    headline: string,
    description: string,
    image: string
}
const Advertise = ({ headline, description, image }: customAdertise) => {
    return (
        <section className='advertise'>
            <div className='absolute h-full w-full'>

                <Image
                    alt='category image'
                    src={image}
                    fill
                    className='w-full'
                />
            </div>
            <div className=" advertise_description">
                <h1 className="text-5xl font-bold">{headline}</h1>
                <p>{description}</p>
                <a href="/" className="shop_button">
                    Shop now
                </a>
            </div>
        </section>
    )
}
export default Advertise
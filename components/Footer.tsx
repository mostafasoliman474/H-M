import React from 'react'
const footlinks = [
    {
        id: 1,
        title: "SHOP BY",
        links: [
            {
                id: 1,
                text: "Women",
                link: "/"
            },
            {
                id: 2,
                text: "Men",
                link: "/"
            },
            {
                id: 3,
                text: "Baby",
                link: "/"
            },
            {
                id: 4,
                text: "Kids",
                link: "/"
            },
            {
                id: 5,
                text: "H&M Home",
                link: "/"
            },
            {
                id: 6,
                text: "Sport",
                link: "/"
            },
            {
                id: 7,
                text: "Sale",
                link: "/"
            },
            {
                id: 8,
                text: "Sustainability",
                link: "/"
            },
        ]
    }
    , {
        id: 2,
        title: "CORPORATE INFO",
        links: [
            {
                id: 1,
                text: "About Us",
                link: "/"
            },
            {
                id: 2,
                text: "Delivery Information",
                link: "/"
            },
            {
                id: 3,
                text: "Terms and Conditions of Sale",
                link: "/"
            },
            {
                id: 4,
                text: "Website Terms & Conditions",
                link: "/"
            },
            {
                id: 5,
                text: "Privacy Policy",
                link: "/"
            },
            {
                id: 6,
                text: "Returns & Refunds",
                link: "/"
            },
        ]
    }
    , {
        id: 3,
        title: "CUSTOMER SERVICE",
        links: [
            {
                id: 1,
                text: "FAQs",
                link: "/"
            },
            {
                id: 2,
                text: "Contact Us",
                link: "/"
            },
            {
                id: 3,
                text: "Connect Via WhatsApp",
                link: "/"
            },
            {
                id: 4,
                text: "Sitemap",
                link: "/"
            },
            {
                id: 5,
                text: "Stores",
                link: "/"
            },
            {
                id: 6,
                text: "H&M Home Furniture & Lighting",
                link: "/"
            },
            {
                id: 7,
                text: "eGift Cards",
                link: "/"
            },
        ]
    }
]
const Footer = () => {
    return (
        <footer className='bg-[#e4e4e4]'>
            <div className='footer_top'>
                <section className='flex gap-40'>
                    {footlinks.map(item => (
                        <div key={item.id} className='flex flex-col gap-5'>
                            <h3 className='font-bold text-sm text-[#222]'>{item.title}</h3>
                            {item.links.map(link => (
                                <a href={link.link} key={link.id} className='hover:underline text-xs text-[#222]'>{link.text}</a>
                            ))}
                        </div>
                    ))}
                </section>
                <section className='flex justify-end'>
                    <div className='flex flex-col gap-4 max-w-[50%]'>
                        <h1 className='text-[#222] text-sm font-bold'>NEWSLETTER</h1>
                        <p className='text-[#222] text-xs  '>be the first to know about our newest arrivals, special offers and store events near you.</p>
                        <div className='flex border-black border-b-2'>
                            <input type='email' placeholder='Enter your Email Adresse' className='bg-transparent outline-none w-[80%] text-sm' />
                            <input type='button' value='SIGN UP' className='signin_button' />
                        </div>
                    </div>
                </section>
            </div>
            <div className='footer_bottom'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-xs text-[#222] font-bold'>Customer Service</p>
                    <p className='text-[10px] text-[#222] font-medium'>For EGYPT 02-24803822</p>
                    <p className='text-[10px] text-[#222] font-medium'>We are open 7 days a week from 9:00 AM to 2:30 PM and from 7:00 PM to 10:30 PM (Egypt local time, GMT +2)</p>
                    <img src='https://eg.hm.com/themes/custom/transac/alshaya_hnm/h-m-logo-bw.svg?159' />
                </div>
                <div>

                </div>
                <p className='text-xs text-[#222] font-semibold max-w-[40%] text-center'>© H&M's business concept is to offer fashion and quality at the best price in a sustainable way. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies. The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.</p>
                <a href='#' className='hover:underline text-sm'>Egypt</a>
            </div>
        </footer>
    )
}
export default Footer

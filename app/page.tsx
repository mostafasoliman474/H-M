import Advertise from "@/components/Advertise";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const saleLinks = [
  {
    id: 1,
    text: "Free delivery on all orders above EGP 1999",
    link: "/"
  },
  {
    id: 1,
    text: "Free returns available online and in store",
    link: "/"
  },
  {
    id: 3,
    text: "Shop online 24/7",
    link: "/"
  },
]
const categories = [
  {
    id: 1,
    cat_sex: "woman", link: "/",
    cat_product: "Cardigan & jumpers",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/28a4d6d10fb5e__10217.png"
  },
  {
    id: 2,
    cat_sex: "woman", link: "/",
    cat_product: "Dresses",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/36ce884fc59f4__10216.png"
  },
  {
    id: 4,
    cat_sex: "Men", link: "/",
    cat_product: "Hoodies & Sweatshirts",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/daf16b4ffdfe__10231.png"
  },
  {
    id: 5,
    cat_sex: "Men", link: "/",
    cat_product: "Trousers",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/3745c64a7f136__10222.png"
  },
  {
    id: 6,
    cat_sex: "Kids", link: "/",
    cat_product: "Girls 2-8 years",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/2aff2c36bb00d__10235.png"
  },
  {
    id: 7,
    cat_sex: "Kids", link: "/",
    cat_product: "Boys 2-8 years",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/eab26b894e55__10239.png"
  },
  {
    id: 8,
    cat_sex: "Home", link: "/",
    cat_product: "Living room",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/69d4c36718a7__10215.png"
  },
  {
    id: 10,
    cat_sex: "Home", link: "/",
    cat_product: "Bedroom",
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/137db18fb09a7__10262.png"
  },

]
const blogs=[
  {
    id:1,
    img:'https://z1photorankmedia-a.akamaihd.net/media/p/f/x/pfxjs85/normal.jpg',
    text:"@yes.im.home"
  },
  {
    id:2,
    img:'https://z2photorankmedia-a.akamaihd.net/media/5/s/x/5sxjs85/normal.jpg',
    text:"@kaji.pm"
  },
  {
    id:3,
    img:'https://z2photorankmedia-a.akamaihd.net/media/g/c/v/gcveo85/normal.jpg',
    text:"@blogfrenchie"
  },
  {
    id:4,
    img:'https://z3photorankmedia-a.akamaihd.net/media/k/y/w/kywqp85/normal.jpg',
    text:"@bikahveemolasiii"
  },
  {
    id:5,
    img:'https://z1photorankmedia-a.akamaihd.net/media/7/2/x/72xqp85/normal.jpg',
    text:"@tamarahome_"
  },
  {
    id:6,
    img:'https://z1photorankmedia-a.akamaihd.net/media/i/o/y/ioybs85/normal.jpg',
    text:"@ultrxstxr_ishyy"
  },
  {
    id:7,
    img:'https://z3photorankmedia-a.akamaihd.net/media/h/t/2/ht2vp85/normal.jpg',
    text:"@mai_miyagi"
  },
  {
    id:8,
    img:'https://photorankmedia-a.akamaihd.net/media/7/6/x/76xqp85/normal.jpg',
    text:"@neslihan59"
  },
  {
    id:9,
    img:'https://photorankmedia-a.akamaihd.net/media/v/u/2/vu2vp85/normal.jpg',
    text:"@kinga.haczek"
  },
]

export default function Home() {
  return (
    <main className="py-10 max-w-6xl mx-auto flex flex-col">
      <section className="flex justify-around">
        {saleLinks.map(link => (
          <a href={link.link} key={link.id} className="text-[#222] text-sm hover:underline">{link.text}</a>
        ))}
      </section>
      <Advertise
        key="Leisure luxe"
        description="A pre-summer edit in a freash palette"
        headline="Leisure luxe"
        image="https://cdn-eu.dynamicyield.com/api/9876644/images/baf0645d4a78__homepage-banner1-d.png" />
      <section className="flex flex-col gap-10 mt-10 items-center">
        <h1 className="font-semibold text-2xl text-[#222]">Categories you might like</h1>
        <div className="flex gap-5">
          {categories.map(item => (
            <a key={item.id} className="flex flex-1 flex-col items-center gap-1 cursor-pointer">
              <img src={item.img} />
              <p className="text-[12px]">{item.cat_sex}</p>
              <p className="text-sm text-center font-semibold">{item.cat_product}</p>
            </a>
          ))}
        </div>

      </section>
      <Advertise
        key="Refresh your wardrobe"
        description="Shorts in many dirrerent styles"
        headline="Refresh your wardrobe"
        image="https://cdn-eu.dynamicyield.com/api/9876644/images/37080aaad7c3__homepage-banner3-d.png"
      />

      <Advertise
        key="Springtime harmony"
        description="Elevated home decor for the new season"
        headline="Springtime harmony"
        image="https://cdn-eu.dynamicyield.com/api/9876644/images/1aa1f2e995a42__homepage-banner5-d.png"
      />
      <Advertise
        key="Springtime harmony"
        description="Elevated home decor for the new season"
        headline="Springtime harmony"
        image="https://cdn-eu.dynamicyield.com/api/9876644/images/15141a474d731__7029a-3x2-uk-elegant-home-decor.webp"
      />
      <section className="flex gap-32 mt-10 items-center ">
        <div className=" flex gap-4 flex-col max-w-[25%]">
          <h1 className="font-bold text-2xl">Styled by you</h1>
          <p className="text-xs">
            We love to see how you style your favourites from H&M: Keep sharing your personal style with @HM and #HMxME for a chance to be featured at hm.com, in our marketing materials and in our stores.
          </p>
          <a>Visit HMxME</a>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop:true
          }}
          className=""
        >
          <CarouselContent>
            {blogs.map(item => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div >
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center flex-col relative">
                      <img src={item.img} className="w-full h-full object-cover"/>
                      <div className="bg-[#00000000] flex items-center justify-center text-[#ffffff00] h-full w-full absolute hover:bg-[#00000066] hover:text-[#ffffff] transition-[ease_2s]">
                      <p className="text-sm">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>
      </section>
    </main>
  );
}

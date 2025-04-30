import { Swiper , SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/swiper-bundle.css'
import { Navigation } from "swiper/modules"
import testipic from "../images/testipic.jpg"

const testimonials = [
  {id : 1 , author : "John Doe" , text : "This is a great product! Highly recommend."} ,
  {id : 2 , author : "Jane Smith" , text : "Amazing service and fantastic quality."} ,
  {id : 3 , author : "Mike Johnson" , text : "I love using this every day. Best decision ever!"}
]

const TestimonialSwiper = () => {
  return (
    <div className="testi bg-[#495E57] text-center p-20">
    <h1 className="text-5xl mb-16 underline">Testimonials</h1>
    <Swiper modules={[Autoplay , Navigation]} navigation={true} slidesPerView={1} autoplay={{delay:3000 , disableOnInteraction:false}}>
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial">
            <img src={testipic} alt="pic" className="rounded-full h-60 mx-auto mb-10"/>
            <p className="text-3xl mb-8">{testimonial.text}</p>
            <h4 className="text-2xl">{testimonial.author}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default TestimonialSwiper
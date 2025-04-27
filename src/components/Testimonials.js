import { Swiper , SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/swiper-bundle.css'
import { Navigation } from "swiper/modules"

const testimonials = [
  {id : 1 , author : "John Doe" , text : "This is a great product! Highly recommend."} ,
  {id : 2 , author : "Jane Smith" , text : "Amazing service and fantastic quality."} ,
  {id : 3 , author : "Mike Johnson" , text : "I love using this every day. Best decision ever!"}
]

const TestimonialSwiper = () => {
  return (
    <div className="testi">
    <h1>Testimonials</h1>
    <Swiper modules={[Autoplay , Navigation]} navigation={true} slidesPerView={1} autoplay={{delay:3000 , disableOnInteraction:false}}>
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial">
            <p>{testimonial.text}</p>
            <h4>{testimonial.author}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default TestimonialSwiper
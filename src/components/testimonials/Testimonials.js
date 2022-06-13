import React from 'react'
import './testimonials.css'
import CERT1 from '../../assets/certificate1.png';
import CERT2 from '../../assets/certificate2.png';
import CERT3 from '../../assets/certificate3.png';
import CERT4 from '../../assets/certificate4.png';
import CERT5 from '../../assets/certificate5.png';
import CERT6 from '../../assets/certificate6.png';
import CERT7 from '../../assets/certificate7.png';
import CERT8 from '../../assets/certificate8.png';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My Achievements</h5>
      <h2>Certificates</h2>
      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT2} alt="" className='certificate__image'/>
        <h3>Intro to C++</h3>
        <h5>Coding Ninjas</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT3} alt="" className='certificate__image'/>
        <h3>Data Structures in C++</h3>
        <h5>Coding Ninjas</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT1} alt="" className='certificate__image'/>
        <h3>Basics of JS</h3>
        <h5>UC Davis- Coursera</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT4} alt="" className='certificate__image'/>
        <h3>NodeJS, ExpressJS & Mongo</h3>
        <h5>Hong Kong Uni of Science & Tech-Coursera</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT5} alt="" className='certificate__image'/>
        <h3>Full Stack Web Dev</h3>
        <h5>Advitya-IIT Ropar</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT6} alt="" className='certificate__image'/>
        <h3>Product Development</h3>
        <h5>Quollab</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT7} alt="" className='certificate__image'/>
        <h3>Intro to Google SEO</h3>
        <h5>UC Davis-Coursera</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT8} alt="" className='certificate__image'/>
        <h3>Intro to Kotlin</h3>
        <h5>Udemy</h5>
      </div>
      </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials
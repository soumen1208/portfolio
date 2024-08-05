import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'


const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia hic culpa odio iusto similique explicabo. Doloremque, consequuntur maxime. Vel natus quos, quia voluptatum explicabo numquam nobis architecto tempora autem!"
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia hic culpa odio iusto similique explicabo. Doloremque, consequuntur maxime. Vel natus quos, quia voluptatum explicabo numquam nobis architecto tempora autem!"
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia hic culpa odio iusto similique explicabo. Doloremque, consequuntur maxime. Vel natus quos, quia voluptatum explicabo numquam nobis architecto tempora autem!"
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia hic culpa odio iusto similique explicabo. Doloremque, consequuntur maxime. Vel natus quos, quia voluptatum explicabo numquam nobis architecto tempora autem!"
        },

    ]
    return (
        <div className="t-wrapper" id='Testomonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>form me....</span>
                <div className="blurdiv1 t-blur1" ></div>
                <div className="blurdiv2 t-blur2" ></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonialDiv">
                                    <img src={client.img} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>


    )
}

export default Testimonial
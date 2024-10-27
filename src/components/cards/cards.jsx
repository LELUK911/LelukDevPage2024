import { dataCards } from "./dataCards"
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Cards = () => {

    const RenderCard = ({ title, description, image }) => {
        return (
            <div className=" shadow-lg rounded-lg bg-slate-200 border-gray-800 p-6 mb-6 ml-4 mr-4 mb-4 hover:shadow-xl transition-all">
                <h2 className=' text-center  font-bold text-3xl mb-4'>Services</h2>
                <img src={image} alt="solidity image" className="w-3/6 h-auto mx-auto object-cover rounded-lg shadow-md" />
                <h3 className=' text-center mt-4 font-bold text-xl'>{title}</h3>
                <p className='mt-4 mb-4 text-gray-700 text-justify'>
                    {description}
                </p>

            </div>
        )
    }


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            navigation
            spaceBetween={2}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={() => {}}>

            {dataCards.map(card => {
                return (
                    <SwiperSlide key={card.id}>
                        <RenderCard key={card.title} title={card.title} description={card.description} image={card.image} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}


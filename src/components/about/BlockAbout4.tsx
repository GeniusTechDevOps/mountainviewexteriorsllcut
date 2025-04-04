import React from 'react';
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { RootObject, SectionsHomeAbout } from '../../interfaces/dbData';

interface Props {
  data: RootObject;
  slidesPerView?: number;
  aboutSection: SectionsHomeAbout[];
}

const BlockAbout4: React.FC<Props> = ({ data, slidesPerView = 3, aboutSection }) => {
  return (
    <section>
      <div className="flex items-center py-20 bg-gradient-to-br from-primary to-gray-800 font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 lg:mb-8 text-center">
              <div className="pl-4">
                <span className="text-white text-[22px] font-bold">About Us</span>
                <h2 className="text-5xl font-bold text-white">
                  <HighlightedText text={aboutSection[0].title} defaultColor="white" />
                </h2>
              </div>
              <p className="mb-4 text-base leading-7 text-white">
                {aboutSection[0].text}
              </p>
              <div className="flex justify-center items-center">
                <ButtonContent />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 h-[350px] rounded-l-full shadow-xl border-8 border-black flex justify-center items-center space-x-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={20}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: slidesPerView,
            },
          }}
        >
          {aboutSection[0].additionalImages.map((service, index) => (
            <SwiperSlide className="py-14 flex justify-center items-center" key={index}>
              <img src={service} className="w-full h-full object-cover" alt={`img-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlockAbout4;

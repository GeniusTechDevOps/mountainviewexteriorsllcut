import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import MenuToggle from "../header/MenuToggle";




interface HeroSection2Props {
  data: RootObject;
  slidesPerView?: number;
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data, slidesPerView = 3 }) => {

  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section: SectionsHomeAbout) => section.section === "blocks",
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      easing: 'ease-in-out', // Efecto de transición
    });
  }, []);


  return (
    <div className="flex flex-col md:flex-row w-full relative md:px-0 h-auto md:h-auto pt-[20px] md:pt-[200px] pb-[160px] overflow-hidden ">
      <div className="absolute w-full h-full md:top-0 left-0 bg-gradient-to-l from-btnColor to-btnHover"></div>
      <img src="\assets\img\construction2.png" alt="recursos-2" className="w-[160px] md:w-[320px] h-auto object-contain absolute top-56 md:top-20 -left-24 opacity-80 animate-floating-2 z-10 hidden md:block" />
      <div className="w-11/12 h-auto flex flex-col md:flex-row mx-auto relative z-20">
        <div className="w-full md:w-1/2 h-full p-4 flex justify-start items-center">
          <img src={data.logos.primary} alt="Logo" className="w-4/5 md:w-full h-[250px] md:h-auto object-contain drop-shadow-2xl" />
          <div className="block md:hidden">
            <MenuToggle data={data} />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-center items-center md:items-start text-center md:text-start">

          <h2 className="text-xl text-white font-bold"><span className="text-white text-2xl"><IconGlobal /> </span>{data.name}</h2>
          <h2 className="text-4xl md:text-7xl font-extrabold text-slate-200">{dataBlocks[0].title} </h2>
          <div className="flex justify-center text-center md:text-start"></div>

          <p className="px-5 text-slate-200">{dataBlocks[0].text}</p>
          <div className="flex justify-center md:justify-start px-5
           w-full ">
            <ButtonContent />
          </div>

        </div>
      </div>
      <img src="\assets\img\construction.png" alt="recursos-1" className="w-[160px] md:w-[400px] h-auto object-contain absolute top-56 md:top-16 -right-10 md:-right-20 animate-floating opacity-90 z-10" />
      <div className="w-full flex items-center justify-end absolute z-10 bottom-2 -right-5">

        <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-100 shadow-2xl pl-5 py-5 space-x-4" data-aos="fade-right">
          {
            data.dataGeneral.phones.slice(0, 1).map((phone, index) => (
              (
                <div key={index} className="w-1/4 text-start py-2 px-1 border-r-2 border-black hidden md:block">
                  <a href={`tel:+1${phone.number}`}>
                    <p className="text-2xl text-primary font-bold">Call Us Now!</p>
                    <p className="text-2xl font-bold">{phone.number}</p>
                  </a>
                </div>
              )
            ))
          }
          <div className="w-full md:w-3/4 text-start py-2 px-1">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              spaceBetween={10}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
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
              {dataBlocks[0].additionalImages.map((img, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center h-auto overflow-hidden" >
                  <img src={img} className="w-full h-[110px] object-cover" alt="img-about" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection2;

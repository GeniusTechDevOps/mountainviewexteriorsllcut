import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { DataGeneral, RootObject, SectionsHomeAbout, Service } from "../../interfaces/dbData";
import FormatText from "../../hooks/FormatText";
import IconGlobal from "../global/IconGlobal";


interface SliderServicesProps {
  dbServices: Service[];
  landingServices: boolean;
  slidesPerView?: number;
  onePage?: boolean;
  dataGeneral?: DataGeneral;
  dataglobal: RootObject;
  homeSection: SectionsHomeAbout[]
}

const ServicesHome2: React.FC<SliderServicesProps> = ({
  dbServices,
  landingServices,
  slidesPerView = 2,
  onePage,
  dataGeneral,
  dataglobal,
  homeSection,
}) => {
  return (
    <section className="w-full pb-10">
      <div className="w-full flex justify-center items-start">
        <div className="w-full md:w-1/2 h-[550px] relative">
          <div className="bg-gradient-to-r from-primary to-black absolute w-full h-full top-0 left-0 z-10 opacity-50" />
          <img className="w-full h-full object-cover relative" src={homeSection[1].additionalImages[2]} alt="img-servihome" />
        </div>
        <div className="w-1/2 hidden md:block h-full px-10 pt-24">
          <p className="text-xl font-bold">
            <IconGlobal /> Our Services
          </p>
          <h2 className="text-4xl font-extrabold text-primary">{dataglobal.slogan[5]}</h2>
          <p>{homeSection[1].text}</p>
        </div>
      </div>
      <div className="w-full h-auto -mt-52 relative z-20">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: slidesPerView,
            },
          }}
          className="border-none  "
        >
          {dbServices.map((service, index) => (
            <SwiperSlide className=" w-full border-none p-10" key={index}>
              <div className="h-[480px] w-11/12 mx-auto shadow-lg rounded-2xl border-none overflow-hidden">
                <img className="w-full h-1/2 object-cover" src={service.description[0].image} alt="img-services" />
                <div className="w-full p-16 h-1/2 relative flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-8 border-white mx-auto absolute left-[36%] -top-10 overflow-hidden bg-secondary p-2">
                    <img className=" w-full h-full object-cover" src={dataglobal.logos.primary} alt="logo" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-primary text-center">{service.title}</h3>
                  <a href={`${onePage
                    ? `tel:${dataGeneral?.phones[0].number}`
                    : landingServices
                      ? `/services/${FormatText(service.title)}`
                      : "/services"
                    }`}
                    className="text-primary text-base border border-primary px-4 py-2 rounded-2xl mt-4 inline-block hover:bg-primary hover:text-white transition-all" >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesHome2;

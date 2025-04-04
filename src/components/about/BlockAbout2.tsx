import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useState } from "react";

interface BlockAbout2Props {
  data: RootObject;
  aboutSection: SectionsHomeAbout[];
}

const BlockAbout2: React.FC<BlockAbout2Props> = ({ data, aboutSection }) => {
  const [sendInput, setSendInput] = useState("");
  const [active, setActive] = useState(false);
  const sendWhatsapp = () => {
    const relmsg = sendInput.replace(/ /g, "%20");
    const phone = data.dataGeneral.phones[0].number
      .replace("-", "")
      .replace("-", "");

    window.open(`https://wa.me/1${phone}?text=` + relmsg, "_blank");
    setSendInput("");
    setActive(false);
  };
  return (
    <section className="w-full pt-16 pb-0">
      <div className="py-5">
        <h2 className=" text-4xl md:text-6xl font-extrabold text-black text-center">
          <HighlightedText text={aboutSection[0].title} defaultColor="black" />
        </h2>
      </div>
      <div className="w-full flex justify-center items-center space-x-10">
        <div className="w-1/2 h-[350px] md:block">
          <img src={aboutSection[0].additionalImages[0]} alt="about-img" className="w-full h-full object-cover rounded-tr-2xl" />
        </div>
        <div className="w-1/2 h-[350px]">
          <img src={aboutSection[0].additionalImages[1]} alt="about-img" className="w-full h-full object-cover rounded-tl-2xl" />
        </div>
      </div>
      <div className="w-4/5 md:w-3/5 mx-auto bg-white p-3 md:p-10 -mt-16 relative z-10 flex flex-col items-center justify-center rounded-t-2xl">
        <h2 className="text-4xl font-extrabold text-primary pb-5 text-center"> A Little About Us!</h2>
        <p className="md:px-5 px-0 text-center">{aboutSection[0].text}</p>
        <ButtonContent />
      </div>

    </section>
  );
}

export default BlockAbout2;
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

interface BlockAboutProps {
    data: RootObject;
    aboutSection: SectionsHomeAbout[];

}

const BlockAbout: React.FC<BlockAboutProps> = ({ data, aboutSection }) => {
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
        <section className="w-full">
            <div className="w-4/5 h-auto relative flex flex-col md:flex-row justify-between items-center py-10 px-5 mx-auto -mb-10">
                <img src={data.gallery[2]} alt="img" className="absolute w-full h-full object-cover top-0 left-0" />
                <div className="w-full h-full absolute top-0 left-0 bg-slate-100/90"></div>
                <div className="w-full md:w-4/5 px-2 md:px-10 relative text-center md:text-start">
                    <p className="text-secondary">{data.name}</p>
                    <h3 className="text-3xl md:text-5xl font-extrabold md:font-bold capitalize">Call us now for the best quality services!</h3>
                    <img src="\assets\img\construction3.png" alt="recursos-1" className="w-[80px] md:w-[120px] h-auto object-contain absolute -top-5 -right-10 md:-right-20 animate-floating opacity-90 z-10" />

                </div>
                <div
                    className="w-24 md:w-32 h-24 md:h-32 border-white border-8 md:border-[20px] bg-secondary rounded-full z-10 flex justify-center items-center hover:rotate-[70deg] hover:shadow-xl transform transition duration-300 ease-in-out"
                >
                    {
                        data.dataGeneral.phones[0].number ? (
                            <a href={`tel:+1:${data.dataGeneral.phones[0].number}`}>
                                <i className="fa-solid fa-phone text-3xl md:text-5xl text-white" />
                            </a>
                        ) : null
                    }
                </div>
            </div>
            <div
                className="flex items-center py-20 bg-gradient-to-br from-primary to-gray-800 font-poppins"
            >
                <div
                    className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6"
                >
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 mb-10 lg:mb-8 text-center">
                            <div className="pl-4">
                                <span className="text-white text-[22px] font-bold">Send Message Us!</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-white capitalize pb-5">
                                    {aboutSection[0].title} 
                                </h2>
                                <p className="text-white">{aboutSection[0].text}</p>
                                <div className="w-[100%] md:w-[90%] mx-auto z-50 border-[1px] border-white rounded-3xl py-2 px-2 flex items-start space-x-2 mt-4">
                                    <div className="w-auto h-auto">
                                        <div className="w-10 h-10 bg-green-700 rounded-full flex justify-center items-center">
                                            <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                                        </div>
                                    </div>
                                    <div className="w-[90%] bg-white rounded-xl overflow-hidden px-1 h-full">
                                        <input
                                            className="w-full h-full py-3 rounded-lg px-2 text-black"
                                            type="text"
                                            placeholder="Send Message..."
                                            value={sendInput}
                                            onChange={(e) => setSendInput(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-auto">
                                        <button
                                            className="w-12 h-12 rounded-full shadow-xl bg-white hover:bg-green-600 text-black hover:text-white"
                                            id="send_btn"
                                            type="button"
                                            onClick={() => sendWhatsapp()}
                                        >
                                            <i className="fa-regular fa-paper-plane text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default BlockAbout;
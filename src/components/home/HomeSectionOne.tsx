import React from 'react';

import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";
import HighlightedText from "../global/TitleColor";
import type { RootObject, SectionsHomeAbout } from '../../interfaces/dbData';

interface Props {
  data: RootObject;
  homeSection: SectionsHomeAbout[]
}

const HomeSection: React.FC<Props> = ({ data, homeSection }) => {
  return (
    <section className="flex items-center font-poppins md:py-[120px] py-[50px] relative">
      <div className="flex flex-col-reverse md:flex-row h-auto w-4/5 mx-auto">
        <div className="w-full md:w-1/2 px-2 md:px-10 flex flex-col justify-center items-center md:items-start pt-10 md:pt-0 text-center md:text-start">
          <h2 className="mt-2 text-3xl font-black md:text-5xl text-secondary pb-5 md:pb-3">
            <HighlightedText text={homeSection[0].title} defaultColor="black" />
          </h2>
          <p className="mb-6 text-base leading-6 text-gray-600">
            {homeSection[0].text}
          </p>
          <div className="w-full flex justify-center md:justify-start items-center pb-3">
            <img
              className="w-36 h-36 rounded-xl object-cover hidden md:block"
              src={homeSection[0].additionalImages[0]}
              alt="img-home1"
            />
            <ul className="list-none text-black gap-2 font-normal flex flex-col items-start px-4">
              <li className="flex justify-center items-center space-x-1 md:space-x-1">
                <i className="fa-thin fa-circle-check"></i>
                <p>Professionalism</p>
              </li>
              <li className="flex justify-center items-center space-x-0 md:space-x-1">
                <i className="fa-thin fa-circle-check"></i>
                <p>Commitment</p>
              </li>
              <li className="flex justify-center items-center space-x-0 md:space-x-1">
                <i className="fa-thin fa-circle-check"></i>
                <p>Qualified Team</p>
              </li>
            </ul>
          </div>
          <ButtonContent />
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="w-11 h-[70vh] md:h-[115vh] bg-white absolute rounded-2xl z-10 -rotate-[40deg] md:-rotate-[48deg] -top-[16vh] md:-top-[21vh] left-[10vh] md:left-[39vh]" />
          <img
            src={homeSection[0].additionalImages[1]}
            alt="about-img"
            className="w-full h-[360px] md:h-[550px] object-cover rounded-2xl relative"
          />
          <div className="w-36 h-36 md:w-44 md:h-44 border-white border-[20px] bg-secondary rounded-full -right-10 md:-right-12 bottom-0 absolute z-10 flex justify-center items-center hover:rotate-[70deg] hover:shadow-xl transform transition duration-300 ease-in-out">
            {data.dataGeneral.emails[0].email ? (
              <a href={`mailto:${data.dataGeneral.emails[0].email}`}>
                <i className="fa-solid fa-envelope-dot text-4xl md:text-6xl text-white" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

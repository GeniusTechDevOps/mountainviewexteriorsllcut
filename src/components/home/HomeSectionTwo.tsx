import React from 'react';

import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";
import type { RootObject, SectionsHomeAbout } from '../../interfaces/dbData';

interface Props {
  data: RootObject;
  homeSection: SectionsHomeAbout[]
}

const HomeSectionTwo: React.FC<Props> = ({ data, homeSection }) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-slate-200 py-[100px] relative">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/5 relative border pb-12 md:pb-0">
          <div className="w-10 h-[50vh] md:h-[60vh] bg-slate-200 absolute -top-5 md:-top-12 left-[20vh] md:left-[30vh] -rotate-45 rounded-2xl"></div>
          <img
            src={homeSection[1].additionalImages[0]}
            alt="img-block2"
            className="w-[400px] h-[300px] md:h-[400px] rounded-full"
          />
        </div>
        <div className="w-full md:w-3/5 h-auto flex flex-col justify-center items-center text-center md:text-start md:items-start px-5 md:px-10">
          <p className="text-xl font-bold">
            <i className="fa-regular fa-handshake mr-2"></i>Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-5xl text-primary pb-5 md:pb-10">
            <HighlightedText text={homeSection[1].title} defaultColor="black" />
          </h2>
          <p className="px-0 md:px-4">{data.valuesContent.whychooseUs}</p>
          <div className="w-full flex flex-row mt-10">
            <div className="w-1/2 flex flex-col md:flex-row relative space-x-4">
              <div className="absolute w-12 h-12 rounded-full bg-secondary opacity-40 bottom-7 md:bottom-0 left-0 md:-left-2"></div>
              <p className="text-4xl font-semibold relative">{data.yearsExperience} +</p>
              <p className="text-base font-semibold leading-4">Years of <br /> Experience</p>
            </div>
            <div className="w-1/2 flex flex-col md:flex-row items-center relative space-x-4">
              <div className="absolute w-12 h-12 rounded-full bg-secondary opacity-40 bottom-7 md:bottom-0 left-0 md:-left-2"></div>
              <p className="text-4xl font-semibold relative">100 %</p>
              <p className="text-base font-semibold leading-4">On Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;

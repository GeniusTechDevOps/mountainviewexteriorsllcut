import { useState } from "react";
import type { RootObject } from "../../interfaces/dbData";

interface Props {
  data: RootObject;
}

const Map = ({ data }: Props) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(
    data.dataGeneral.location[0].urlCity
  );

  const handleCityClick = (urlCity: string) => {
    setSelectedCity(urlCity);
  };

  return (
    <div className="-mt-10">
      <h2
        className="
        md:text-[45px] text-[30px] font-bold text-center md:w-[80%] mx-auto md:rounded-t-full text-secondary md:py-0 py-4
        bg-white"
      >
        We Cover {data?.milesCover} Miles Around{" "}
        {data.dataGeneral.location[0].city}
      </h2>

      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center">

        {selectedCity && (
          <iframe
            src={selectedCity}
            width="600"
            title="Geo Location"
            height="500"
            className="w-full rounded-r-xl"
            loading="lazy"
          ></iframe>
        )}
        <div className="w-full md:w-1/5 flex flex-row flex-wrap justify-center md:flex-col bg-white gap-2 p-1 md:p-5 ml-0 md:-ml-10 rounded-xl z-10">
          {data.dataGeneral.location.map((item, index) => (
            <span
              key={index}
              onClick={() => handleCityClick(item.urlCity)}
              className={`cursor-pointer text-white px-5 py-2 rounded-xl border-white min-w-[100px] max-w-[300px] ${selectedCity === item.urlCity
                ? "bg-primary border-primary"
                : "bg-secondary border-secondary"
                }`}
            >
              <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
              {item.city}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Map;

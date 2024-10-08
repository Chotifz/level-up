import { useState } from "react";
import Nav from "./components/Nav";

import fbIcon from "./assets/fb-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import xIcon from "./assets/x-icon.svg";
import { ImageSide } from "./components/ImageSide";
import { Footer } from "./components/Footer";

function App() {
  const data = [
    {
      id: 1,
      title: "Coral Reef Lamp",
      description: "A beautiful lamp inspired by coral reefs.",
      price: 45,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1723127166/sea1_uuirxk.jpg",
    },
    {
      id: 2,
      title: "Ocean Breeze Scented Candle",
      description: "Candle with a refreshing ocean breeze scent.",
      price: 25,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1723131277/oce7_ag5fz2.jpg",
    },
    {
      id: 3,
      title: "Seashell Jewelry Box",
      description: "A jewelry box decorated with seashells.",
      price: 35,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1723131278/oce6_hxtjw1.jpg",
    },
    {
      id: 4,
      title: "Seashell Jewelry Box",
      description: "A jewelry box decorated with seashells.",
      price: 35,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1723131383/oce2_fa6goh.jpg",
    },
    {
      id: 5,
      title: "Seashell Jewelry Box",
      description: "A jewelry box decorated with seashells.",
      price: 35,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1723131279/oce4_xsoasx.jpg",
    },
  ];

  const [datas, setDatas] = useState(data[0]);
  const [zoom, setZoom] = useState(false);

  const handleImageZoom = () => {
    setZoom(!zoom);
  };

  const handleImageClick = (image) => {
    setDatas(image);
  };

  return (
    <div
      className="bg-no-repeat bg-center bg-cover "
      style={{ backgroundImage: `url(${datas.imageUrl})` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center filter blur-md"
        style={{ backgroundImage: `url(${datas.imageUrl})` }}
      ></div>

      <div className="relative max-w-7xl h-screen min-h-[860px] px-8 py-12 mx-auto  sm:px-12 md:px-16 lg:px-24 sm:py-14 md:py-20  ">
        {/* aktif zoom */}
        <div
          className={`bg-slate-200 h-full w-full rounded-[2rem] bg-no-repeat bg-center filter bg-cover flex flex-col items-center overflow-hidden ${
            zoom ? "flex" : "hidden"
          }`}
          style={{ backgroundImage: `url(${datas.imageUrl})` }}
        >
          <div className="relative  overflow-hidden rounded-[2rem] bg-center w-full h-full mx-auto">
            <button
              id="zoom-icon"
              className="absolute top-4 right-5 "
              onClick={handleImageZoom}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0735 2L21.4877 3.41421L15.6378 9.26416H18.1824V11.2642H12.1824V5.26416H14.1824V7.89111L20.0735 2Z"
                  fill="currentColor"
                />
                <path
                  d="M11.1824 12.2642V18.2642H9.1824V15.8422L3.41421 21.6104L2 20.1962L7.93203 14.2642H5.1824V12.2642H11.1824Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="flex ">
            <div className=" flex  rounded-lg  overflow-scroll no-scrollbar  gap-1 md:w-96 w-72">
              {" "}
              <div className="relative flex  justify-center items-center">
                {/* g */}
                <div className=" p-1 flex gap-5 relative md:w-[88px] w-[85px] object-cover ">
                  {data.map((item) => (
                    <img
                      className="rounded-3xl h-[75px] bg-slate-100 p-[2px]"
                      key={item.id}
                      src={item.imageUrl}
                      alt={item.title}
                      onClick={() => handleImageClick(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card cyan */}
        <div
          className={`flex-col justify-between rounded-[3rem] h-full px-6 py-2 bg-cyan-200 overflow-hidden ${
            zoom ? "hidden " : "flex "
          }`}
        >
          <Nav />

          <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-between max-md:justify-start py-1">
            {/*side image*/}

            <div className="relative flex items-center justify-center flex-col gap-1 w-full h-[112x]   md:h-[280px]  md:w-[128px] md:max-w-36 ">
              <div className=" absolute max-md:hidden bg-yellow-200 py-[126px] px-[2px] top-1 left-0"></div>

              <div className="relative flex justify-center items-center">
                <div className="absolute top-[6px] right-[43px] hidden   justify-center items-center md:flex">
                  <span className="p-2.5 rounded-full bg-yellow-200 "></span>
                  <span className="p-[1px] px-1 bg-yellow-200"></span>
                </div>
              </div>

              <h1 className=" bg-white text-center px-2 py-0.5 rounded-2xl font-serif text-[13px]">
                Ocean Eyes
              </h1>

              <ImageSide data={data} onImageClick={handleImageClick} />
            </div>

            {datas && (
              <CardImage
                imageUrl={datas.imageUrl}
                onZoomClick={handleImageZoom}
                isZoomed={zoom}
              />
            )}

            <div className="mx-auto px-2  flex max-md:flex-row-reverse items-center text-[11px] tracking-wider font-mono font-semibold max-md:gap-1">
              <div className="p-2 bg-yellow-200  rounded-2xl max-md:hidden  ">
                <p className=" bg-cyan-200 textl  py-2 rounded-2xl ">
                  SOSIAL MEDIA
                </p>
              </div>
              <div className="flex md:flex-col gap-1 max-md:bg-yellow-200 max-md:p-0.5 max-md:rounded-r-2xl max-md:pr-2">
                <div className="p-1  bg-yellow-200 rounded-md">
                  <div className="max-w-6 min-w-6 max-sm:max-w-5 ">
                    <a href="https://www.facebook.com">
                      <img
                        className="w-full"
                        src={fbIcon}
                        alt="facebook-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="p-1  bg-yellow-200 rounded-md">
                  <div className="max-w-6 min-w-6 max-sm:max-w-6 ">
                    <a href="https://www.instagram.com">
                      {" "}
                      <img
                        className="w-full"
                        src={instagramIcon}
                        alt="instagram-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="p-1  bg-yellow-200 rounded-md">
                  <div className="max-w-6 min-w-6 max-sm:max-w-5">
                    <img src={xIcon} alt="x-icon" />
                  </div>
                </div>
              </div>
              <div className="p-2 bg-yellow-200  md:rounded-2xl max-md:rounded-l-2xl">
                <p className=" bg-cyan-200 textr py-2.5 max-md:py-0.5 max-md:px-2 rounded-2xl tracking-wide ">
                  FIND US ON
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const CardImage = ({ imageUrl, onZoomClick, isZoomed }) => {
  return (
    <div className="relative w-full h-full flex flex-col gap-1 md:gap-1">
      <div className="relative w-full h-full ">
        <img
          className="object-cover w-full h-full  rounded-[2rem] "
          src={imageUrl}
          alt="main-image"
        />
        <div
          id="zoom-icon"
          className="absolute top-4 right-5 "
          onClick={onZoomClick}
        >
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
                fill="currentColor"
              />
              <path
                d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

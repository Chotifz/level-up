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
      className="bg-no-repeat bg-center filter bg-cover "
      style={{ backgroundImage: `url(${datas.imageUrl})` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center filter blur-md"
        style={{ backgroundImage: `url(${datas.imageUrl})` }}
      ></div>

      <div className=" relative bg-cover bg-no-repeat bg-center h-screen">
        <div className="max-w-7xl h-full px-8 py-12 mx-auto  sm:px-12 md:px-16 lg:px-24 sm:py-14 md:py-20  ">
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
              <div className=" flex  rounded-lg  overflow-scroll no-scrollbar  gap-1 w-96">
                {" "}
                <div className="relativeflex  justify-center items-center">
                  {/* g */}
                  <div className=" p-1 flex  rounded-xl relative w-24 object-cover ">
                    {data.map((item) => (
                      <img
                        className="rounded-xl p-1 h-[75px]"
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
            className={`flex-col justify-between rounded-[3rem] h-full px-6 py-2 bg-cyan-200  ${
              zoom ? "hidden " : "flex "
            }`}
          >
            <Nav />
            <div className="w-full h-full overflow-hidden">
              <div className="relative h-full w-full flex flex-col sm:flex-row items-center justify-between max-sm:justify-start gap-2">
                {/*side image*/}
                <div className="flex relative justify-center  h-24 w-full  sm:h-64 mx-auto sm:w-26 sm:max-w-36 ">
                  <div className="flex items-start justify-center flex-col gap-1  w-96 ">
                    <div className="relative flex justify-center items-center">
                      <span className="p-2.5 rounded-full bg-yellow-200 "></span>
                      <span className="p-[1px] px-1 bg-yellow-200 "></span>
                      <h1 className="bg-white text-center px-2 py-0.5 rounded-2xl font-serif text-[13px]">
                        Ocean Eyes
                      </h1>
                    </div>
                    <ImageSide data={data} onImageClick={handleImageClick} />
                  </div>
                </div>

                {datas && (
                  <CardImage
                    imageUrl={datas.imageUrl}
                    onZoomClick={handleImageZoom}
                    isZoomed={zoom}
                  />
                )}

                <div className="mx-auto px-2 flex max-sm:flex-row-reverse items-center text-[11px] tracking-wider font-mono font-semibold max-sm:gap-1">
                  <div className="p-2 bg-yellow-200  rounded-2xl max-sm:hidden  ">
                    <p className=" bg-cyan-200 textl  py-2 rounded-2xl ">
                      SOSIAL MEDIA
                    </p>
                  </div>
                  <div className="flex sm:flex-col gap-1 max-sm:bg-yellow-200 max-sm:p-0.5 max-sm:rounded-r-2xl max-sm:pr-2">
                    <div className="p-1  bg-yellow-200 rounded-md">
                      <div className="max-w-6 min-w-6 max-sm:max-w-5 max-sm:min-w-4 ">
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
                      <div className="max-w-6 min-w-6 max-sm:max-w-6 max-sm:min-w-5">
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
                      <div className="max-w-6 min-w-6 max-sm:max-w-5 max-sm:min-w-4">
                        <img src={xIcon} alt="x-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-200  sm:rounded-2xl max-sm:rounded-l-2xl">
                    <p className=" bg-cyan-200 textr py-2.5 max-sm:py-0 max-sm:px-2 rounded-2xl tracking-widest">
                      FIND US ON
                    </p>
                  </div>
                </div>
              </div>
              <Footer />
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
    <div className="relative overflow-hidden rounded-[2rem] bg-center max-w-[45rem] h-full max-h-[32rem] max-md:max-h-[26rem]">
      <img
        className="object-cover w-full h-full  "
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
  );
};

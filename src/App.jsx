import { useState } from "react";
import Nav from "./components/Nav";
import starImage from "./assets/star.png";
import { products } from "./products";
import downloadImage from "./assets/download.png";
import fbIcon from "./assets/fb-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import xIcon from "./assets/x-icon.svg";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    products.find((p) => p.category === "Ocean")
  );
  const [selectedProduct, setSelectedProduct] = useState(
    selectedCategory.data[0]
  );

  const imageUrl = selectedProduct.imageUrl;

  return (
    <div>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center filter blur-md"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className=" relative bg-cover bg-no-repeat bg-center h-screen">
        <div className="max-w-7xl h-full px-8 py-12 mx-auto  sm:px-12 md:px-16 lg:px-24 sm:py-14 md:py-20  ">
          <div className="flex flex-col justify-between rounded-[3rem] h-full px-6 py-2 bg-cyan-200">
            <Nav />

            <CardImage imageUrl={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const CardImage = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="w-full h-full">
      <div className="h-full w-full flex flex-col sm:flex-row items-center justify-between max-sm:justify-start gap-2">
        <div className="h-24 mx-auto px-12  bg-black"></div>

        <div className="relative bg-slate-100 overflow-hidden rounded-[2rem] bg-center max-w-[45rem] h-full max-h-[32rem] max-md:max-h-[26rem]">
          <img
            className="object-cover w-full h-full  "
            src={imageUrl}
            alt="main-image"
          />
        </div>

        <div className="mx-auto px-2 flex max-sm:flex-row-reverse items-center text-[11px] tracking-wider font-mono font-semibold max-sm:gap-1">
          <div className="p-2 bg-yellow-200  rounded-2xl max-sm:hidden  ">
            <p className=" bg-cyan-200 textl  py-2 rounded-2xl ">
              SOSIAL MEDIA
            </p>
          </div>
          <div className="flex sm:flex-col gap-1 max-sm:bg-yellow-200 max-sm:p-0.5 max-sm:rounded-r-2xl max-sm:pr-2">
            <div className="p-1  bg-yellow-200 rounded-md">
              <div className="max-w-6 min-w-6 max-sm:max-w-5 max-sm:min-w-4 ">
                <img className="w-full" src={fbIcon} alt="facebook-icon" />
              </div>
            </div>
            <div className="p-1  bg-yellow-200 rounded-md">
              <div className="max-w-6 min-w-6 max-sm:max-w-6 max-sm:min-w-5">
                <img src={instagramIcon} alt="instagram-icon" />
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
  );
};

const Footer = () => {
  return (
    <div className="relative md:h-20 h-24">
      <div className="flex absolute w-full bottom-24 max-sm:bottom-28 justify-between text-xs md:text-base">
        <div className="relative w-full h-full">
          <div className="flex absolute top-5 justify-between gap-2">
            <div className=" w-16 md:w-24 max-sm:w-10 mx-auto">
              <img src={starImage} alt="star" />
            </div>
            <div className=" flex-row  font-serif max-sm:text-[11px]  justify-between gap-2 ">
              <div className="p-2 max-sm:p-1 inline-block bg-cyan-200 rounded-r-3xl">
                <h1 className="bg-white rounded-3xl  p-1  font-semibold">
                  Satisfy Your Eyes
                </h1>
              </div>
              <div className="p-2 max-sm:p-1 bg-cyan-200 rounded-r-3xl">
                <h1 className="bg-white rounded-3xl  p-1  font-semibold">
                  With Ocean Eyes App
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Download />
      </div>
    </div>
  );
};

const Download = () => {
  return (
    <div className="bg-cyan-200 p-2 rounded-full relative ">
      <div className=" bg-cyan-200 rounded-full bottom-5 right-2 px-4 border-4 border-yellow-100">
        <div className="flex">
          <div className=" py-1 px-4 w-full font-extrabold max-sm:px-0 max-sm:py-2">
            <button className="font-serif text-blue-600 hover:text-red-500 text-[11px] max-sm:text-[9px]">
              Download Now!
            </button>
            <span>
              <p className="text-lg max-sm:text-[12px] tracking-widest">
                100M+
              </p>
              <p className="text-xs max-sm:text-[10px]">USERS</p>
            </span>
          </div>

          <button className=" h-20 w-20 bg-center pr-2 ">
            <img
              className="object-cover w-full  "
              src={downloadImage}
              alt="donwload"
            />
          </button>
        </div>
        <footer className="text-[10px] text-center font-semibold max-sm:hidden">
          Available On Platform :
        </footer>
      </div>
    </div>
  );
};

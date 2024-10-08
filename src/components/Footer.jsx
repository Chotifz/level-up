import starImage from "../assets/star.png";
import downloadImage from "../assets/download.png";
import avail from "../assets/avail.png";

export const Footer = () => {
  return (
    <div className="relative md:h-20 h-60">
      <div className="flex absolute w-full md:bottom-12 bottom-2 md:right-[100px]  text-[10px] md:text-[13px] lg:text-[16px]">
        <div className="flex">
          <div className=" w-16 md:w-24 max-sm:w-10 mx-auto">
            <img src={starImage} alt="star" />
          </div>
          <div className=" flex-row w-full font-serif   justify-between gap-2 ">
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
        <div className=""></div>
      </div>
      <div className="flex  justify-end absolute w-full md:bottom-5 md:left-[100px] left-4  text-[10px] md:text-[13px] lg:text-[16px]">
        {" "}
        <Download />
      </div>
    </div>
  );
};

const Download = () => {
  return (
    <div className="bg-cyan-200 p-2 rounded-full relative ">
      <div className="relative bg-cyan-200 rounded-full px-2 border-4 border-yellow-100 md:pb-3">
        <div className="flex">
          <div className=" py-1 px-4 w-full font-extrabold max-sm:px-0 max-sm:py-2">
            <button className="font-serif text-blue-600 hover:text-red-500 text-[11px] max-sm:text-[9px]">
              Download Now!
            </button>
            <span>
              <p className="text-lg max-sm:text-[12px] tracking-wides">100M+</p>
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
        <div className="absolute top-[63px] md:top-[66px] left-5  md:left-7 w-full h-full">
          <img src={avail} alt="" className="object-cover w-32 md:w-40" />
        </div>
      </div>
    </div>
  );
};

import starImage from "../assets/star.png";
import downloadImage from "../assets/download.png";

export const Footer = () => {
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

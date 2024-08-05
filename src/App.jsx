import Nav from "./components/Nav";
import starImage from "./assets/star.png";

import downloadImage from "./assets/download.png";

function App() {
  const products = [
    {
      id: 1,
      name: "Mushroom Orange Lamp",
      description: "Mushroom Orange Lamp desc",
      price: 40,
      imageUrl:
        "https://res.cloudinary.com/dxiiecbza/image/upload/v1721356706/paa6_hfhwcw.jpg",
    },
  ];
  return (
    <div>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center filter blur-md"
        style={{ backgroundImage: `url(${products[0].imageUrl})` }}
      ></div>
      <div className=" relative bg-cover bg-no-repeat bg-center h-screen">
        <div className="max-w-7xl h-full px-8 py-12 mx-auto  sm:px-12 md:px-16 lg:px-24 sm:py-14 md:py-20  ">
          <div className="flex flex-col justify-between rounded-[3rem] h-full px-6 py-2 bg-cyan-200">
            <Nav />
            {products.map((product) => (
              <CardImage key={product.id} {...product} />
            ))}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const CardImage = ({ name, description, price, imageUrl }) => {
  return (
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-between max-sm:justify-start gap-2">
      <div className="h-24 mx-auto px-12  bg-black"></div>

      <div className="relative bg-slate-100 overflow-hidden rounded-[2rem] bg-center max-w-[45rem] h-full max-h-[32rem] max-md:max-h-[26rem]">
        <img
          className="object-cover w-full h-full  "
          src={imageUrl}
          alt="main-image"
        />
      </div>

      <div className="hidden sm:block h-11 mx-auto px-12  bg-black"></div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="relative md:h-20 h-24">
      <div className="flex absolute w-full bottom-4 max-sm:bottom-0 justify-between text-xs md:text-base">
        <div className="flex justify-between gap-2">
          <div className=" w-16 md:w-24 max-sm:w-14 mx-auto">
            <img src={starImage} alt="star" />
          </div>
          <div className=" flex-row  justify-between gap-2 ">
            <div className="p-2 inline-block bg-cyan-200 rounded-r-3xl">
              <h1 className="bg-white rounded-3xl  font-serif p-1  font-semibold">
                Satisfy Your Eyes
              </h1>
            </div>
            <div className="p-2 bg-cyan-200 rounded-r-3xl">
              <h1 className="bg-white rounded-3xl font-serif p-1  font-semibold">
                With Ocean Eyes App
              </h1>
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
      <div className=" bg-cyan-200 rounded-full bottom-5 right-2  px-2 border-4 border-yellow-100">
        <div className=" flex">
          <div className=" py-1 px-4">
            <button className="text-xs text-blue-600 hover:text-red-500 font-semibold">
              Download Now!
            </button>
            <span className="font-extrabold">
              <p className="text-lg tracking-widest">100M+</p>
              <p className="text-xs">USERS</p>
            </span>
          </div>

          <button className=" h-20 w-20 relative bg-center pr-2 ">
            <img
              className="object-cover w-full  "
              src={downloadImage}
              alt="donwload"
            />
          </button>
        </div>
        <footer className="text-[10px] text-center font-semibold max-sm:hidden ">
          Available On Platform :
        </footer>
      </div>
    </div>
  );
};

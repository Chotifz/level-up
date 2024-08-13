export const ImageSide = ({ data, onImageClick }) => {
  return (
    <div className="relative flex md:flex-col overflow-scroll no-scrollbar gap-1 max-md:max-w-[280px]">
      <div className="relative flex  justify-center items-center">
        <span className="p-2.5 rounded-full bg-transparent  max-md:hidden"></span>
        <span className="p-[1px] px-1  bg-transparent max-md:hidden"></span>
        {/* g */}
        <div className="  flex md:flex-col">
          {data.map((item) => (
            <div className="flex relative ">
              <div className="absolute top-7 right-[112px] hidden   justify-center items-center md:flex">
                <span className="p-2.5 rounded-full bg-yellow-200 "></span>
                <span className="p-[1px] px-1 bg-yellow-200"></span>
              </div>
              <div className=" p-1 gap-1 flex flex-col max-sm:flex-row rounded-xl relative md:w-28 w-24 object-cover">
                {" "}
                <img
                  className="rounded-[20px] h-[75px] bg-slate-100 p-[2.5px] md:w-[88px] w-[80px]"
                  key={item.id}
                  src={item.imageUrl}
                  alt={item.title}
                  onClick={() => onImageClick(item)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

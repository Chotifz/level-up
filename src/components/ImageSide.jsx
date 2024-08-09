export const ImageSide = ({ data, onImageClick }) => {
  return (
    <div className="relative flex sm:flex-col overflow-scroll no-scrollbar gap-1 max-sm:w-80">
      <div className="relative flex  justify-center items-center">
        <span className="p-2.5 rounded-full bg-yellow-200 bg-transparent  max-sm:hidden"></span>
        <span className="p-[1px] px-1 bg-yellow-200 bg-transparent max-sm:hidden"></span>
        {/* g */}
        <div className="  flex flex-col max-sm:flex-row    ">
          {data.map((item) => (
            <div className="flex relative">
              <div className="absolute top-7 right-[108px] flex  justify-center items-center  max-sm:hidden">
                <span className="p-2.5 rounded-full bg-yellow-200 "></span>
                <span className="p-[1px] px-1 bg-yellow-200"></span>
              </div>
              <div className=" p-1 gap-1 flex flex-col max-sm:flex-row rounded-xl relative sm:w-28 w-24 object-cover ">
                {" "}
                <img
                  className="rounded-xl h-[75px] bg-slate-100 p-[2px]"
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

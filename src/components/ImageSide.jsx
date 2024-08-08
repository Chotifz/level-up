export const ImageSide = ({ data, onImageClick }) => {
  return (
    <div className=" flex sm:flex-col overflow-scroll no-scrollbar gap-1 max-sm:w-80">
      {" "}
      <div className="relative flex  justify-center items-center">
        <span className="p-2.5 rounded-full bg-yellow-200 "></span>
        <span className="p-[1px] px-1 bg-yellow-200 "></span>
        {/* g */}
        <div className="bg-slate-100 p-1 flex flex-col max-sm:flex-row rounded-xl relative sm:w-28 w-24 object-cover ">
          {data.map((item) => (
            <img
              className="rounded-xl p-1 h-[75px]"
              key={item.id}
              src={item.imageUrl}
              alt={item.title}
              onClick={() => onImageClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

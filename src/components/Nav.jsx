const Nav = () => {
  return (
    <div className="flex items-center py-1 justify-between gap-4">
      <div className="w-[170px]">
        <div className="flex w-40 bg-blue-300 hover:bg-purple-400 hover:border-2 text-center justify-center items-center h-10 rounded-md">
          <div className="cee"></div>
          <div className="bg-yellow-200 px-1">
            <button className="text-xs block font-mono rounded ">
              <a href="/">inta Indonesia!</a>
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex-row flex flex-row-reverse items-center w-full">
        <div className="flex items-center justify-center bg-slate-50 gap-1 p-1.5 rounded-lg">
          <button className="bg-yellow-200 hover:bg-purple-400 hover:border-2 rounded font-semibold text-xs py-1.5 px-1 md:px-3">
            Sign up
          </button>
          <button className="bg-blue-100 hover:bg-purple-400 hover:border-2 rounded py-1.5 px-1 md:px-3 max-[480px]:hidden text-xs font-extrabold font-serif">
            FREE TRIAL
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex hover:bg-purple-400  rounded-md px-[0.05rem] flex-col text-center w-40 mx-auto ">
          <h1 className="word-sp-w font-extrabold text-md">YOUR FAVORITE</h1>
          <h1 className="text-xs font-serif font-bold text-yellow-200 p-1 bg-blue-300 rounded-md">
            DESKTOP WALLPAPER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;

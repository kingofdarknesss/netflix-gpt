const VideoTitle = ({ title, overview }) => {
  return (
    <div className="-mt-10 absolute text-white bg-gradient-to-r h-[845px] from-black w-screen aspect-video pl-10">
      <h1 className="text-6xl font-bold pt-40">{title}</h1>
      <p className="py-6 w-1/2">{overview}</p>
      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Play More
      </button>
      <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;

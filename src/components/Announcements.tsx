export default function Announcements() {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-md p-4 ">
      <div className="flex justify-between items-center dark:text-slate-400">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          View All
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight dark:bg-slate-400 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium  text-gray-600 dark:text-slate-100">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-400 dark:text-gray-500 ">
              2022-02-01
            </span>
          </div>
          <p className="mt-1 text-gray-400 dark:text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>          
        </div>
        <div className="bg-lamaPurpleLight dark:bg-Indigo-300 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium  text-gray-600 dark:text-slate-500">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-400 dark:text-gray-500 ">
              2022-02-01
            </span>
          </div>
          <p className="mt-1 text-gray-400 dark:text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> 
        </div>
        <div className="bg-lamaYellowLight dark:bg-Lime-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium  text-gray-600 dark:text-slate-500">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-400 dark:text-gray-500 ">
              2022-02-01
            </span>
          </div>
          <p className="mt-1 text-gray-400 dark:text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> 
        </div>
      </div>
    </div>
  );
}

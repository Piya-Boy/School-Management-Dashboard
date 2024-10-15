import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center text-xs rounded-full gap-2 ring-[1.5px] ring-gray-300 dark:ring-slate-600 px-2">
      <SearchOutlinedIcon className="text-gray-400 dark:text-gray-500" />
      <input
        type="text"
        placeholder="Search...."
        className="w-[200px] bg-transparent p-2 outline-none dark:text-slate-100"
      />
    </div>
  );
}

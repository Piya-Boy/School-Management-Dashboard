"use client";

import { useRouter } from "next/navigation";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useEffect, useState } from "react";

export default function TableSearch() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  // UseEffect for automatically searching when the user types
  useEffect(() => {
    // Check if searchValue is not empty or just spaces
    if (searchValue.trim()) {
      const params = new URLSearchParams(window.location.search);
      params.set("search", searchValue);
      router.push(`${window.location.pathname}?${params}`);
    } else {
      // If search is empty, remove the 'search' parameter from URL
      const params = new URLSearchParams(window.location.search);
      params.delete("search");
      router.push(`${window.location.pathname}?${params}`);
    }
  }, [searchValue, router]);

  return (
    <div
      className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 dark:ring-slate-600 px-2"
    >
      {/* Material UI Icon */}
      <SearchOutlinedIcon className="text-gray-400 dark:text-gray-500" />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} // Update the search value on every keystroke
        className="w-[200px] p-2 bg-transparent outline-none dark:text-slate-100"
      />

      {/* Close Icon */}
      {searchValue && (
        <CloseOutlinedIcon
          className="text-gray-400 dark:text-gray-500 cursor-pointer"
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}

"use client"; // Mark this component as a Client Component
import { role } from "@/lib/data"; // Import the role from your data source

import { usePathname } from "next/navigation"; // Use next/navigation for App Router
import Link from "next/link";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
export default function Breadcrumbs() {
  const pathname = usePathname(); // Get the current path

  // Split the path into segments
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Generate the breadcrumb links
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize first letter
      href,
    };
  });

  return (
    <div className="bg-white text-slate-400 dark:bg-slate-700 p-4 rounded-xl flex items-center">
      <div className="text-sm font-bold dark:text-slate-300 flex items-center capitalize">
        <span>
          {role}
          <KeyboardArrowRightOutlinedIcon fontSize="small" />
        </span>
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <KeyboardArrowRightOutlinedIcon
                fontSize="small"
                className="mx-2"
              />
            )}
            <Link href={crumb.href} className="hover:text-blue-500">
              {crumb.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

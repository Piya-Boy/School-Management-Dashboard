import TableSearch from "@/components/TableSearch";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
  };
  
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
export default function StudentListPage() {

  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200  dark:border-slate-600 even:bg-slate-50  dark:even:bg-slate-600 text-sm hover:bg-lamaPurpleLight dark:hover:bg-slate-600"
    >
      <td className="flex items-center gap-4 p-4">
        <Avatar
          src={item.photo}
          alt={item.name}
          sx={{ width: 40, height: 40 }}
          className="md:hidden xl:block "
        />
        <div className="flex flex-col">
          <h3 className="font-semibold dark:text-gray-100">{item.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.studentId}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.grade}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.phone}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky cursor-pointer">
            <RemoveRedEyeOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            // <DeleteOutlineOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            // </button>
            <FormModal table="student" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );
   
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 dark:bg-slate-700">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold dark:text-slate-400">
          All Students
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <FilterAltOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <SortOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            </button>
            {role === "admin" && (
            // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
            //   <AddOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            // </button>
            <FormModal table="student" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
        <Pagination />
    </div>
  );
}

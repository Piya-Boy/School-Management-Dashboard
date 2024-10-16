import TableSearch from "@/components/TableSearch";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { parentsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Parent = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
  };

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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
export default function ParentListPage() {

  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200  dark:border-slate-600 even:bg-slate-50  dark:even:bg-slate-600 text-sm hover:bg-lamaPurpleLight dark:hover:bg-slate-600"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold dark:text-gray-100">{item.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.students.join(",")}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.phone}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
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
          All Parents
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
            <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
        <Pagination />
    </div>
  );
}

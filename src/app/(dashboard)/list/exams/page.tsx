import TableSearch from "@/components/TableSearch";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { examsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Exam = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;
  };
  
  const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
export default function ExamListPage() {

  const renderRow = (item: Exam) => (
    <tr
      key={item.id}
      className="border-b border-gray-200  dark:border-slate-600 even:bg-slate-50  dark:even:bg-slate-600 text-sm hover:bg-lamaPurpleLight dark:hover:bg-slate-600"
    >
      <td className="flex items-center gap-4 p-4 dark:text-gray-100">{item.subject}</td>
      <td className="dark:text-gray-100">{item.class}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.teacher}</td>
      <td className="hidden md:table-cell dark:text-gray-100">{item.date}</td>
     <td>
        <div className="flex items-center gap-2">
          {role === "admin" || role === "teacher" && (
            <>
              <FormModal table="exam" type="update" data={item} />
              <FormModal table="exam" type="delete" id={item.id} />
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
          All Classes
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
            {role === "admin" || role === "teacher" && (
            <FormModal table="exam" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* PAGINATION */}
        <Pagination />
    </div>
  );
}

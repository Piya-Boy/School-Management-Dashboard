"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useState } from "react";
import dynamic from "next/dynamic";
import Spinner from "./Spinner";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <Spinner />,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <Spinner />,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};
export default function FormModal({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);
  const Icon =
    type === "create"
      ? AddOutlinedIcon
      : type === "update"
      ? EditOutlinedIcon
      : DeleteOutlineOutlinedIcon;

  const handleClose = () => setOpen(false);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const Form = () => {
    return type === "delete" && id ? (
        <form action="" className="p-4 flex flex-col gap-4">
             <div className="p-4 md:p-5 text-center">
            <ErrorOutlineOutlinedIcon className="mx-auto mb-4 text-gray-400 w-16 h-16  dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-medium text-gray-500 dark:text-gray-100">
          All data will be lost. Are you sure you want to delete this {table}?
            </h3>
            <button
              onClick={() => {
                // Handle delete logic
              }}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
       </div>
        </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };
  

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className="text-gray-400 dark:text-gray-500" />
      </button>
      {open && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div
            className={`bg-white dark:bg-slate-700 p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] transform transition-transform duration-800 ease-out translate-y-[-50px] opacity-0 ${
              open ? "translate-y-0 opacity-100" : ""
            }`}
            onClick={(e) => e.stopPropagation()} // Prevents modal click from closing
          >
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleClose}
            >
              <CloseOutlinedIcon className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

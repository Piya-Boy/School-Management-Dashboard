"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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
  student: (type, data) => <StudentForm type={type} data={data} />
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
        <span className="text-center font-medium dark:text-gray-100">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
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
              <CloseOutlinedIcon className="text-gray-400 dark:text-gray-500" />
            </div>            
          </div>
        </div>
      )}
    </>
  );
}

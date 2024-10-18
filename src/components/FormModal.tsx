"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
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

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className="text-gray-400 dark:text-gray-500" />
      </button>
    </>
  );
}

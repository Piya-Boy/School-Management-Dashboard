import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";


export default function ParentPage() {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
      <div className="bg-white dark:bg-slate-700 p-4 rounded-md">
        <h1 className="text-xl font-semibold dark:text-slate-400">Schedule (join )</h1>
        <BigCalendar/>
      </div> 

      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <Announcements/>
      </div>
    </div>
  );
}

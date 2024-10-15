import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs"; // Import the Breadcrumbs component

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 dark:bg-slate-900 ">
        <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block dark:text-gray-500 font-bold">Scloo</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] dark:bg-slate-800 overflow-auto flex flex-col">
        <Navbar />
        <div className="flex p-4 flex-col">
      <Breadcrumbs />
      </div>
        {children}
      </div>
    </div>
  );
}
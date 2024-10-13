import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function UserCard({type}: {type: string}) {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
        <div className="flex items-center justify-between">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">22222</span>
            <MoreHorizIcon className="text-gray-400 dark:text-gray-500"/>
        </div>
         <h1 className="text-2xl font-semibold my-4">1111</h1>
         <h2 className="text-sm capitalize font-medium text-gray-500">{type}</h2>
    </div>
  )
}

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Avatar, Badge } from "@mui/material";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white ">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center text-xs rounded-full gap-2 ring-[1.5px] ring-gray-300 px-2">
        <SearchOutlinedIcon />
        <input
          type="text"
          placeholder="Search...."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <TextsmsOutlinedIcon  />
        </div>
        <Badge badgeContent={1} color="primary">
            <CampaignOutlinedIcon  />
        </Badge>
        <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium ">John Doe</span>
            <span className="text-[10px] text-gray-400 text-right">Admin</span>
        </div>
        <Avatar src="/avatar.png" alt="avatar" sx={{ width: 36, height: 36 }}/>
      </div>
    </div>
  );
}

import { useState } from "react";

const menuItems = [
  { path: "/", icon: "home.svg", label: "Home" },
  { path: "/search", icon: "search.svg", label: "Search" },
  { path: "/mail", icon: "mail.svg", label: "Mail" },
  { path: "/send", icon: "telegram.svg", label: "Send" },
  { path: "/stack", icon: "list.svg", label: "Stack" },
  { path: "/inbox", icon: "dash.svg", label: "Inbox" },
  { path: "/stats", icon: "chart.svg", label: "Stats" },
];

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white h-screen w-14 flex flex-col items-center border-r-[1px] dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10 pr-[4px]">
      <div className="rounded-[2px] flex-shrink-0 pt-[8px] pr-[12px] pb-[12px] pl-[12px] mt-2">
        <img
          src="logo_sidebar.svg"
          className="h-[32px] rounded-[2px] object-left overflow-visible pt-[4px] pr-[3px] pb-[4px] pl-[3px] "
          alt="Logo"
        />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10 flex-1 flex flex-col justify-center">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className={`cursor-pointer p-1 ${
              selectedItem === item.path ? "bg-gray-600 rounded-lg text-gray-600" : ""
            }`}
            onClick={() => handleMenuItemClick(item.path)}
          >
            <img className='w-[15.7px] h-[18px] text-gray-600' src={item.icon} alt={item.label} />
          </div>
        ))}
      </div>
      <div className="text-white pt-[12px] pr-[8px] pb-[12px] pl-[8px] rounded-[2px] flex-shrink-0">
        <img src="user.svg" alt="User" />
        </div>
    </div>
  );
}

export default SideBar;
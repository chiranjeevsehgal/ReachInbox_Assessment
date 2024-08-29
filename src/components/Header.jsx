import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";

function Header() {
	const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setShowLogoutPopUp(false);

		window.location.href = "/";
	};

	const handleLogoutClick = () => {
		setShowLogoutPopUp(true);
	};

	const handleCancelLogout = () => {
		setShowLogoutPopUp(false);
	};

	return (
		<div className="h-16 w-screen bg-white dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-[1px] border-t-[1px] border-r-[1px] dark:border-[#343A40] border-[#E0E0E0] gap-[24px] p-[24px]">
			<div className="w-[127px]">
			<b>Onebox</b>
				
			</div>

			<div className="pr-10 flex items-center gap-[24px]">
				<ThemeToggle /> &nbsp;
				<span
					className="cursor-pointer flex items-center"
					onClick={handleLogoutClick}
				>
					Tim&apos;s Workspace
					<MdOutlineKeyboardArrowDown className="text-3xl m3" />
				</span>
			</div>

			{showLogoutPopUp && (
				<Logout onCancel={handleCancelLogout} onLogout={handleLogout} />
			)}
		</div>
	);
}

export default Header;

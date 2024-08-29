import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Emails from "../components/Emails";
import SideBar from "../components/Sidebar";
import TopBar from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

function OneBox() {
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const token = queryParams.get("token");

	useEffect(() => {
		if (!token) {
			navigate("/login");
		} else {
			localStorage.setItem("token", `Bearer ${token}`);
		}
	}, [token, navigate]);

	const [selectedComponent, setSelectedComponent] = useState(null);

	const handleMenuItemClick = (path) => {
		setSelectedComponent(path);
	};

	if (selectedComponent === null) {
		return (
			<div className="h-screen w-screen dark:bg-black bg-white pl-14">
				<SideBar onMenuItemClick={handleMenuItemClick} />
				<TopBar />
				<Dashboard />
			</div>
		);
	}

	return (
		<div className="h-screen w-screen dark:bg-black bg-white pl-14">
			<SideBar onMenuItemClick={handleMenuItemClick} />
			<TopBar />
			<div>
				{selectedComponent === "/" && <Dashboard />}
				{selectedComponent === "/search" && <Dashboard />}
				{selectedComponent === "/mail" && <Dashboard />}
				{selectedComponent === "/send" && <Dashboard />}
				{selectedComponent === "/stack" && <Dashboard />}
				{selectedComponent === "/inbox" && <Emails />}
				{selectedComponent === "/stats" && <Dashboard />}
			</div>
		</div>
	);
}

export default OneBox;

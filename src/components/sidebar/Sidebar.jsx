import c from "./Sidebar.module.css";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const sidebaropen = useRef();
	const [sidebarLimit, setSidebarLimit] = useState(9);
	const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
	const sidebarData = [
		{
			title: "Digital Content & Devices",
		},
		{
			sidebarmaintitle: "Amazon music",
			subitems: ["Amazon music unlimited", "Podcasts"],
		},
		{
			sidebarmaintitle: "Kindle E-readers & Books",
			subitems: ["Amazon music unlimited", "Podcasts"],
		},
		{
			sidebarmaintitle: "Amazon Appstore",
			subitems: ["Amazon music unlimited", "Podcasts"],
		},
		{
			title: "Shop By Department",
		},
		{
			sidebarmaintitle: "Electronics",
			subitems: ["Amazon music unlimited 3", "Podcasts 3"],
		},
		{
			sidebarmaintitle: "Computers",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Smart Home",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Arts & Crafts",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Automotive",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Baby",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Beauty and personal care",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Women's Fashion",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Men's Fashion",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Girl's Fashion",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Boy's Fashion",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Health and Household",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Home and Kitchen",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: " Industrial and Scientific",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Luggage",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Movie & Television",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Pet supplies",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Software",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Sports and Outdoors",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Tools & Home Improvement",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Toys and Games",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Video Games",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			title: "Programs & Features",
		},
		{
			sidebarmaintitle: "Gift Cards",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "#FoundltOnAmazon",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "Amazon Live",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			sidebarmaintitle: "International Shopping",
			subitems: ["Amazon music unlimited 4", "Podcasts 4"],
		},
		{
			title: "Help & Settings",
		},
		{
			sidebarmaintitle: "Your Account",
		},
		{
			sidebarmaintitle: "English",
		},
		{
			sidebarmaintitle: "Yunited States",
		},
		{
			sidebarmaintitle: "Customer Service",
		},
		{
			sidebarmaintitle: "Sign Out",
		},
	];

	useEffect(() => {
		if (selectedSidebarItem) {
			sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth;
		} else {
			sidebaropen.current.scrollLeft = 0;
		}
	}, [selectedSidebarItem]);

	return (
		<>
			<div
				ref={sidebaropen}
				className={
					isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`
				}
			>
				<FiX
					className={c.close}
					onClick={() => {
						setIsSidebarOpen(false);
					}}
				/>
				<div className={c.sidebarWrapper}>
					<div className={c.avatarBox}>
						<BsPersonCircle className={c.avatarImg} />
						<span className={c.avatarTitle}>Hello, User</span>
					</div>
					{sidebarData.slice(0, sidebarLimit).map(sidebarEl => (
						<div
							key={uuidv4()}
							className={c.sidebarItem}
							onClick={() => {
								setSelectedSidebarItem(sidebarEl);
							}}
						>
							<h3>{sidebarEl.title}</h3>
							<div className={c.sidebarBox}>
								<p>{sidebarEl.sidebarmaintitle}</p>
								<AiOutlineRight className={c.rightVector} />
							</div>
							{/* <p>{JSON.stringify(sidebarEl)}</p> */}
						</div>
					))}
					<div
						className={c.sidebarItem}
						onClick={() => {
							sidebarLimit <= 9 ? setSidebarLimit(27) : setSidebarLimit(9);
						}}
					>
						<p>{sidebarLimit === 9 ? "See more" : "See less"}</p>
					</div>
				</div>
				<div className={c.sidebarOpen}>
				<div className={c.avatarBox}>
						<BsPersonCircle className={c.avatarImg} />
						<span className={c.avatarTitle}>Hello, User</span>
					</div>
					<FiArrowLeft
						onClick={() => {
							setSelectedSidebarItem(null);
						}}
					/>
					<span>MAIN MENU</span>
					<div>
						<h2>{selectedSidebarItem?.sidebarmaintitle}</h2>
						{selectedSidebarItem?.subitems.map(i => (
							<p key={uuidv4()}>{i}</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;

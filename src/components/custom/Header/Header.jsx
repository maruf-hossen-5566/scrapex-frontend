import React from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const Header = () => {
	return (
		<>
			<div className="w-full shrink-0 h-24 px-6 md:px-10">
				<div className="w-full h-full max-w-2xl mx-auto flex items-center justify-between gap-6">
					<Logo />
					<div className="lg:hidden">
						<ThemeButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;

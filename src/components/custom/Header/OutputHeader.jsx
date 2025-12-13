import React from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const OutputHeader = () => {
	return (
		<>
			<div className="w-full shrink-0 h-24 max-lg:hidden px-6 md:px-10 border-">
				<div className="w-full h-full max-w-2xl mx-auto flex items-center justify-between lg:justify-end gap-6">
					<div className="lg:hidden">
						<Logo />
					</div>
					<ThemeButton />
				</div>
			</div>
		</>
	);
};

export default OutputHeader;

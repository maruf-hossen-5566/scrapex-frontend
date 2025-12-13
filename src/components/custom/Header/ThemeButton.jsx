import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeButton = () => {
	const [isDark, setIsDark] = useState(false);

	const handleThemeChange = () => {
		if (isDark) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	};
	useEffect(() => {
		handleThemeChange();
	}, [isDark]);

	return (
		<div className="flex items-center">
			<Button
				className="hover:bg-primary/5 dark:hover:bg-primary/5 rounded-full"
				size="icon-lg"
				variant="ghost"
				onClick={() => setIsDark(!isDark)}>
				{isDark ? <Moon /> : <Sun />}
			</Button>
		</div>
	);
};

export default ThemeButton;

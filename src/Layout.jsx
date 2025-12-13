import Header from "@/components/custom/Header/Header";
import OutputHeader from "@/components/custom/Header/OutputHeader";
import Hero from "@/components/custom/Hero/Hero";
import OutputTabs from "@/components/custom/Output/OutputTabs";
import Query from "@/components/custom/QueryBox/Query";
import useOutputStore from "@/stores/outputStore";
import { useEffect } from "react";

const Layout = () => {
    return (
        <>
            <div className="grid min-h-svh lg:max-h-svh lg:grid-cols-2">
                <div className="flex flex-col">
                    <Header />
                    <div className="h-full px-6 md:px-10 flex flex-col items-center justify-">
                        <Hero />
                        <Query />
                    </div>
                </div>
                <div className="lg:max-h-lvh relative flex flex-col bg-accent lg:overflow-auto">
                    <OutputHeader />
                    <div className="lg:max-h-[calc(100lvh-6rem)] px-6 md:px-10 flex flex-col items-center justify-center">
                        <OutputTabs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;

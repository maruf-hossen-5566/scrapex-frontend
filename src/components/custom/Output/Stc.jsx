import React from "react";
import useOutputStore from "@/stores/outputStore.js";

export const Stc = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            <div className="w-full h-full">
                <div className="bg-background/50 flex flex-col justify-start gap-6 border border-input rounded-md">
                    {data.slice(0, 10).map((val, j) => (
                        <div
                            key={j}
                            className="flex flex-col px-4 py-6 gap-4 border-b-2"
                        >
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Id:
                                </span>
                                <span className="capitalize">{val.id}</span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Title:
                                </span>
                                <span className="capitalize">{val.title}</span>
                            </p>
                            <p className="line-clamp-2 overflow-hidden">
                                <span className="text-blue-500 mr-1">
                                    Body:
                                </span>
                                <span>{val.body}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

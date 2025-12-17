import React from "react";
import useOutputStore from "@/stores/outputStore.js";

export const Stc = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            <div className="w-full h-full">
                <div className="bg-background/50 flex flex-col justify-start gap-6 border border-input rounded-md">
                    {data?.items?.slice(0, 20).map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col px-4 py-6 gap-4 border-b-2"
                        >
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Id:
                                </span>
                                <span className="capitalize">{item.id}</span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Name:
                                </span>
                                <span className="capitalize">{item.name}</span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Thumbnail:
                                </span>
                                <a
                                    href={item.imageInfo.thumbnailUrl}
                                    target="_blank"
                                    className="underline"
                                >
                                    {item.imageInfo.thumbnailUrl}
                                </a>
                            </p>
                            {item.shortDescription && (
                                <p className="line-clamp-3 overflow-hidden">
                                    <span className="text-blue-500 mr-1">
                                        Body:
                                    </span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: item.shortDescription,
                                        }}
                                    ></span>
                                </p>
                            )}
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Price:
                                </span>
                                <span className="capitalize">
                                    {item.priceInfo.linePrice}
                                </span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Availability:
                                </span>
                                <span className="capitalize">
                                    {item.availabilityStatus}
                                </span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Category:
                                </span>
                                <span className="capitalize">
                                    {item.catalogProductType}
                                </span>
                            </p>
                            <p className="truncate">
                                <span className="bold text-blue-500 mr-1">
                                    Link:
                                </span>
                                <a
                                    href={`https://walmart.com${item?.url}`}
                                    className="underline"
                                >
                                    https://walmart.com{item?.url}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

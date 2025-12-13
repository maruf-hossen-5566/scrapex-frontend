import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useOutputStore from "@/stores/outputStore";

export const Cards = () => {
    const data = useOutputStore((state) => state.data);
    // const data = [];

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full grid grid-cols-2 gap-6">
                    {data?.slice(0, 10)?.map((i) => (
                        <Card key={i.id} className="rounded-md">
                            <CardHeader>
                                <CardTitle className="line-clamp-2 leading-normal capitalize">
                                    {i.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-3">{i.body}</p>
                            </CardContent>
                            {/*No footer yet*/}
                            {/*<CardFooter>*/}
                            {/*    <p>Card Footer</p>*/}
                            {/*</CardFooter>*/}
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useOutputStore from "@/stores/outputStore.js";

export const Csv = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            <div className="w-full rounded-md border overflow-auto max-h-150 h-full">
                <Table className="w-full text-sm bg-background/50 overflow-hidden!">
                    <TableHeader className="bg-primary/20">
                        <TableRow className="divide-accent divide-x">
                            {Object.keys(data[0])
                                .slice(1)
                                .map((key) => (
                                    <TableHead key={key}>{key}</TableHead>
                                ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody className="select-none">
                        {data?.slice(0, 10)?.map((row, i) => (
                            <TableRow
                                key={i}
                                className="divide-accent divide-x hover:bg-primary/5"
                            >
                                {Object.values(row)
                                    .slice(1)
                                    .map((val, j) => (
                                        <TableCell
                                            key={j}
                                            className="max-w-xs truncate"
                                        >
                                            {typeof val === "boolean"
                                                ? val
                                                    ? "Yes"
                                                    : "No"
                                                : String(val)}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

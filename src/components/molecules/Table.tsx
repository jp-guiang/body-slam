import { useTable } from "react-table";
import { useRouter } from "next/router";

export type TableProps = {
  className?: string;
  columns: any[];
  data: any[];
  getRowProps?: (cell: any) => any;
  getCellProps?: (cell: any) => any;
  noDataMessage?: string;
};

export const Table = ({
  className = "",
  columns,
  data,
  getCellProps,
  getRowProps,
  noDataMessage,
}: TableProps) => {
  const router = useRouter();
  const { getTableProps, getTableBodyProps, flatHeaders, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={`w-full border p-4 ${className}`}>
      <thead>
        <tr>
          {flatHeaders
            .filter((header) => header.columns === undefined)
            .map((header) => (
              // eslint-disable-next-line react/jsx-key
              <th className="border-b p-4 uppercase" {...header.getHeaderProps()}>
                {header.render("Header")}
              </th>
            ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {!data.length ? (
          <tr>
            <td className="p-4" colSpan={flatHeaders.length}>
              {noDataMessage ?? "None"}
            </td>
          </tr>
        ) : (
          rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr 
                onClick={() => router.push(`/${row.original.identifier}`)}
                {...row.getRowProps(getRowProps && getRowProps(row))}
                key={row.original.identifier}
                className="cursor-pointer hover:bg-gray-100"
              >
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <td
                    className="p-4"
                    {...cell.getCellProps(getCellProps && getCellProps(cell))}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

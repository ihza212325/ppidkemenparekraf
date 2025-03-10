import React, { useState } from "react";
import PaginationTable from "./PaginationTable";
import { Image, Pen, Trash2 } from "lucide-react";

export type TableColumn<T> = {
  header: string; // Header text
  accessor: keyof T; // Key to access data in the row
  render?: (value: T[keyof T], row: T) => React.ReactNode; // Optional custom render function for cell
  isImage?: boolean; // Flag to indicate if the column contains an image
  isLabel?: boolean; // Flag to indicate if the column contains an image
  isEdit?: boolean; // Flag to indicate if the column contains an image
  isDelete?: boolean; // Flag to indicate if the column contains an image
  isOpenDetailImage?: boolean; // Flag to indicate if the column contains an image
  isButton?: boolean; // Flag to indicate if the column contains a button
  withLeftImage?: true; // Flag to indicate if the column contains a button
  buttonActionEdit?: (row: T) => void; // Action for the button if `isButton` is true
  buttonActionOpenDetailImage?: (row: T) => void; // Action for the button if `isButton` is true
  buttonActionDelete?: (row: T) => void; // Action for the button if `isButton` is true
};

type TableProps<T> = {
  columns: TableColumn<T>[]; // Columns definition
  data: T[]; // Array of row data
  className?: string; // Additional classes for the table
  onRowClick?: (row: T) => void; // Optional row click handler
  maxheight?: string;
};

function Table<T extends object>({
  columns,
  data,
  className = "",
  onRowClick,
  maxheight = "20rem",
}: TableProps<T>) {
  console.log(maxheight, "heiiii");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = 20; // Misalnya total halaman adalah 20

  const RenderButtonAction = ({
    column,
    row,
  }: {
    column: TableColumn<T>;
    row: T;
  }) => {
    return (
      <>
        <div className="flex flex-row gap-4">
          {column.isOpenDetailImage && (
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click when button is clicked
                column.buttonActionOpenDetailImage?.(row);
              }}
              className="p-3  bg-secondary500 rounded-full justify-center items-center"
            >
              <Image size={14} />
            </div>
          )}
          {column.isEdit && (
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click when button is clicked
                column.buttonActionEdit?.(row);
              }}
              className="p-3 bg-neutralPageBackground rounded-full justify-center items-center"
            >
              <Pen size={14} />
            </div>
          )}

          {column.isDelete && (
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click when button is clicked
                column.buttonActionDelete?.(row);
              }}
              className="p-3 bg-neutralPageBackground rounded-full justify-center items-center"
            >
              <Trash2 size={14} />
            </div>
          )}
        </div>
      </>
    );
  };

  const RenderText = ({ column, row }: { column: TableColumn<T>; row: T }) => {
    if (column.isLabel) {
      const obj: { [key: string]: string } = {
        success: "bg-successText",
        failed: "bg-dangerText",
        pending: "bg-warningText",
      };
      const value = String(row[column.accessor]);
      console.log(value);

      return (
        <div
          className={`${
            obj[value.toLocaleLowerCase()]
          } px-2 py-1 rounded-full justify-center items-center flex flex-col`}
        >
          {value}
        </div>
      );
    }
    if (column.withLeftImage) {
      const obj: { [key: string]: string } = {
        bluepay:
          "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/231695727_118814460483915_4830629276338151715_n.png?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yw_elqm5Bw0Q7kNvgG7wBpd&_nc_zt=23&_nc_ht=scontent-sin6-2.xx&_nc_gid=AxqY1rheYWmXjcVFC7uR4Z_&oh=00_AYAySDsD1zz_k919gV5VoQLk-aIKs_EC_wQ9d4oz4HhC9Q&oe=67967F64",
        astrapay:
          "https://play-lh.googleusercontent.com/Gv6Cx9Q-K9CBH9Y5oVeGqnUfz_CW4vJtqlV5MiGpqs-6mMys5pQcE1ajVuqAlMC3LXt8=w480-h960-rw",
      };
      const value = String(row[column.accessor]);
      const valuePayment = String(row[column.accessor]).split("-")[1];
      //   console.log(value);

      return (
        <div className={` items-center flex flex-row gap-4`}>
          <img
            src={obj[valuePayment]}
            alt="Table Content"
            className="h-8 w-8 rounded-md object-cover"
          />
          <p>{value}</p>
        </div>
      );
    }
    return String(row[column.accessor]);
  };
  return (
    <>
      <div
        style={{ maxHeight: `calc(100vh - ${maxheight})` }}
        className="w-full  flex-1 flex flex-col "
      >
        {/* Pembatas Tabel */}
        <div className="flex overflow-hidden flex-col gap-4">
          <div
            className={`w-full max-h-[calc(100vh-${maxheight})] overflow-auto rounded-md shadow-sm `}
          >
            <table
              className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${className}`}
            >
              {/* Table Head */}
              <thead className="text-xs uppercase sticky top-0 bg-neutralModalBackground dark:bg-gray-700 text-neutralWhite dark:text-gray-400">
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="px-6 py-3 font-jakartaBold">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="">
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`bg-neutralContentBackground dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 even:bg-tableEven dark:even:bg-gray-700 ${
                      onRowClick ? "cursor-pointer" : ""
                    }`}
                    onClick={() => onRowClick?.(row)}
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap text-neutralWhite"
                      >
                        {column.isImage ? (
                          <img
                            src={String(row[column.accessor])}
                            alt="Table Content"
                            className="h-10 w-16 rounded-md object-cover"
                          />
                        ) : column.isButton &&
                          (column.buttonActionEdit ||
                            column.buttonActionDelete) ? (
                          <RenderButtonAction column={column} row={row} />
                        ) : column.render ? (
                          column.render(row[column.accessor], row)
                        ) : (
                          <RenderText column={column} row={row} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationTable
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onItemsPerPageChange={(items) => {
              setItemsPerPage(items);
              setCurrentPage(1); // Reset ke halaman pertama saat item per halaman berubah
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Table;

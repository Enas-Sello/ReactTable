/////////// IMPORTS
///
import { useMemo, useState } from "react"
import {
  usePagination,
  useSortBy,
  useTable,
  useGlobalFilter,
  useRowSelect,
  Column,
  CellProps,
  HeaderProps,
  useAsyncDebounce,
  useFilters,
} from "react-table"
import CheckBox from "./CheckBox"
import { Filter } from "./Filter"
import Row from "./Row.json"
import { ShowRowData } from "./ShowRowData"

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///
interface ExampleObject {
  id: string
  first_name: string
  last_name: string
  email: string
  gender: string
}
///
export const Table = () => {
  /////////// VARIABLES
  ///
  const [allData, setAllData] = useState(Row)
  const [editData, setEditData] = useState([])
  console.log("editData", editData)

  const col: Column<ExampleObject>[] = [
    {
      id: "selection",
      Header: ({ getToggleAllPageRowsSelectedProps }: HeaderProps<any>) => (
        <CheckBox {...getToggleAllPageRowsSelectedProps()} />
      ),
      Cell: ({ row }: CellProps<any>) => (
        <CheckBox {...row.getToggleRowSelectedProps()} />
      ),
    },
    {
      Header: "id",
      accessor: "id",
      Filter: Filter,
    },
    {
      Header: "first_name",
      Filter: Filter,
      accessor: "first_name",
    },
    {
      Header: "last_name",
      Filter: Filter,
      accessor: "last_name",
    },
    {
      Header: "email",
      Filter: Filter,
      accessor: "email",
    },
    {
      Header: "gender",
      Filter: Filter,
      accessor: "gender",
    },
    {
      Header: "",
      id: "action",
      Cell: (props: CellProps<any>) => (
        <>
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
              marginRight: "12px",
            }}
            onClick={() => {
              // @ts-ignore
              setEditData(props.row.allCells)
            }}
          >
            edit
          </span>
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={() => {
              setAllData((prev) =>
                prev.filter((row) => {
                  return row.id !== props.row.original.id
                })
              )
            }}
          >
            Delete
          </span>
        </>
      ),
    },
  ]
  const columns = useMemo(() => col, [])
  const data = useMemo(() => allData, [JSON.stringify(allData)])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter,
    setPageSize,

    state: { pageIndex, pageSize, globalFilter, selectedRowIds },
  } = useTable<ExampleObject>(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    usePagination,
    useRowSelect
  )
  //   as TableInstanceWithHooks<Row_TP>
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      <div className=" flex w-1/4 items-center gap-2 rounded-md border border-zinc-400  p-2">
        <input
          className=" bg-transparent"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          type="text"
          placeholder="بحث"
        />
      </div>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mt-3 flex items-end justify-end gap-4 p-2">
        <button
          onClick={() => previousPage()}
          className=" rounded bg-mainGreen p-2 "
        >
          Right{" "}
        </button>
        <button
          onClick={() => nextPage()}
          className=" rounded bg-mainGreen p-2 "
        >
          Left{" "}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
      {editData.length && (
        <ShowRowData setEditData={setEditData} editData={editData} />
      )}
    </>
  )
}
// email: "mbensley0@vimeo.com"
// first_name: "Mercy"
// gender: "Female"
// id: "1"
// last_name: "Bensley"

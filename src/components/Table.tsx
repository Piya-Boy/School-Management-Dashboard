interface ColumnsProps {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: ColumnsProps[];
  data: any[]; // ประเภทของข้อมูลสามารถปรับให้ตรงกับรูปแบบข้อมูลของคุณ
  renderRow: (item: any) => React.ReactNode;
}

export default function Table({ columns, data, renderRow }: TableProps) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-sm text-left text-gray-500 dark:text-slate-400">
          {columns.map((column) => (
            <th key={column.accessor} className={column.className}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  )
}

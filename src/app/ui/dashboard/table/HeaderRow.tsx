import {
  TableHeaderRow,
  TableHeaderCell,
  Select,
  Option,
  Button,
} from "@ui5/webcomponents-react";

interface HeaderRowProps {
  handleStatus: (status: string) => void;
  handleOrder: () => {
    orderStart: boolean;
    handleOrderStart: () => void;
  };
}

export default function HeaderRow({ handleStatus, handleOrder }: HeaderRowProps) {
  return (
    <TableHeaderRow
      sticky
      className="bg-gray-200 shadow-md p-4 font-bold capitalize grid grid-cols-6"
    >
      <TableHeaderCell>
        <span className="mx-auto text-center">name</span>
      </TableHeaderCell>
      <TableHeaderCell>
        <span className="mx-auto text-center">Type of Leave</span>
      </TableHeaderCell>
      <TableHeaderCell className="grid grid-rows-2">
        <span className="mx-auto text-center">Start Date</span>
        <Button onClick={() => handleOrder().handleOrderStart()} className="bg-blue-500 text-white font-normal hover:bg-blue-700 shadow-md">{handleOrder().orderStart ? 'Ascending' : 'Descending'}</Button>
      </TableHeaderCell>
      <TableHeaderCell>
        <span className="mx-auto text-center">End Date</span>
      </TableHeaderCell>
      <TableHeaderCell>
        <span className="mx-auto text-center">Reason</span>
      </TableHeaderCell>
      <TableHeaderCell className="flex flex-col gap-2">
        <span className="mx-auto text-center">Status</span>
        <Select onChange={({ target }) => handleStatus(target.value)}>
          <Option value={"none"} selected>
            None
          </Option>
          <Option value="approved">Approved</Option>
          <Option value="pending">Pending</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
      </TableHeaderCell>
    </TableHeaderRow>
  );
}

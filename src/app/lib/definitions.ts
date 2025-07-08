export type Employee = {
  id: string;
  name: string;
  status: string;
  type_of_leave: string;
  date_from: string;
  date_to: string;
  reason: string;
  createdAt: string;
};

export interface TableDashboardProps {
  employees: Employee[];
  loading: boolean;
}

export interface RowsProps {
  handleUpdateStatusEmployee: ({ id }: { id: string }) => void;
  employees: Employee[];
}

export interface HeaderRowProps {
  handleStatus: (status: string) => void;
  handleOrder: () => void;
  orderStart: boolean;
}

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleClick: (pageNumber: number, page: number) => void;
}
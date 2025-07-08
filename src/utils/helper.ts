import { format } from "date-fns";

const dateFormat = (dateEmployee: string) => {
    return format(new Date(dateEmployee), "MM/dd/yyyy");
  };

export {
    dateFormat
}
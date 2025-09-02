import { format } from "date-fns";

const dateFormat = (dateEmployee: string) => {
  return format(new Date(dateEmployee), "MMM dd, yyyy");
};

const daysLeft = (date_from: string, date_to: string) => {
  const from = new Date(date_from);
  const to = new Date(date_to);

  const diffTime = to.getTime() - from.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays
}

export {
    dateFormat,
    daysLeft
}
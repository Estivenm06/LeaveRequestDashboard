import IconBtn from "./IconBtn";

import { StatusBtnProps } from "@/app/src/lib/definitions";

export default function StatusBtn({ status, handleClick, id }: StatusBtnProps) {
  const styleRejected = "bg-red-100 hover:bg-red-100 text-red-800";
  const stylePending = "bg-yellow-100 hover:bg-yellow-100 text-yellow-800";
  const styleApproved = "bg-green-100 hover:bg-green-100 text-green-800";

  const style = (status: string) => {
    let styleButton = "";
    switch (status.toUpperCase()) {
      case "PENDING":
        return (styleButton += stylePending);
      case "APPROVED":
        return (styleButton += styleApproved);
      case "REJECTED":
        return (styleButton += styleRejected);
      default:
        return styleButton;
    }
  };

  return (
    <button
      onClick={() => status.toLowerCase() !== "pending" && handleClick({ id })}
      className={`${style(status)} mx-auto select-none px-1.5 py-1 rounded-lg`}
    >
      <div className="flex justify-center items-center gap-1">
        <IconBtn status={status} />
        <span className="text-xs">
          {status.substring(0, 1).toUpperCase()}
          {status.substring(1).toLowerCase()}
        </span>
      </div>
    </button>
  );
}

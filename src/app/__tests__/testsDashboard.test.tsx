import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { fireEvent, screen } from "@testing-library/react";

import TableDashboard from "../ui/dashboard/table/TableDashboard";
import BodyRow from "../ui/dashboard/table/BodyRow";

const mockData = [
  {
    createdAt: "2025-04-08T15:38:02.899Z",
    name: "Dr. Cary Spinka",
    type_of_leave: "SICK",
    date_from: "2025-04-09T04:37:16.219Z",
    date_to: "2025-07-05T03:45:34.659Z",
    status: "REJECTED",
    reason:
      "Ipsum totam acer vere verto turbo.\nCunae admoneo cogito amita ustulo corona clam conforto deprecator bos.\nSui tondeo vulnus.",
    id: "1",
    employeeName: "Dr. Cary Spinka",
    leaveType: "Vacation",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
  },
  {
    createdAt: "2025-04-08T01:54:10.762Z",
    name: "Jeffrey Kunze",
    type_of_leave: "SICK",
    date_from: "2025-04-09T09:51:07.267Z",
    date_to: "2026-03-12T18:31:28.884Z",
    status: "REJECTED",
    reason:
      "Vesper vulgus possimus sponte.\nDefero pauper conor cogo canis enim supplanto adsidue thymbra vilitas.\nVerus attonbitus tremo adeptio ait ciminatio cupiditate.\nArbor colo vilis suscipio.",
    id: "2",
  },
  {
    createdAt: "2025-04-08T04:25:13.578Z",
    name: "Dr. Kyle Hauck I",
    type_of_leave: "VACATION",
    date_from: "2025-04-08T19:23:03.312Z",
    date_to: "2025-06-17T16:02:16.110Z",
    status: "REJECTED",
    reason: "Dens coniuratio vereor pel in comptus paens subseco solio.",
    id: "3",
  },
  {
    createdAt: "2025-04-07T17:38:49.888Z",
    name: "Hope Hoppe",
    type_of_leave: "VACATION",
    date_from: "2025-04-09T13:01:42.053Z",
    date_to: "2026-01-24T01:58:14.356Z",
    status: "REJECTED",
    reason:
      "Assumenda cetera certe cibus cuius nostrum via verto.\nVeritas combibo vitae traho antepono cornu utor.\nUtor angelus amita perferendis.",
    id: "4",
  },
];

describe("<TableDashboard />", () => {
  it("Render and testing the filtering logic", () => {
    render(<TableDashboard employees={mockData} loading={false} />);

    const button = screen.getByText("Ascending");
    fireEvent.click(button);
    expect(button).toHaveTextContent("Descending");
  });
});

describe("<BodyRow />", () => {
  it("Render and behavior approved and rejected", () => {
    const handle = vi.fn();
    render(<BodyRow handleUpdateStatusEmployee={handle} employees={mockData} />);
    const buttons = screen.getAllByText("REJECTED");
    fireEvent.click(buttons[0]);
    expect(handle).toHaveBeenCalledTimes(1);
  });
  it("Testing my Reusable Component", () => {
    const handle = vi.fn();
    render(<BodyRow handleUpdateStatusEmployee={handle} employees={mockData} />);
    expect(screen.getByText(mockData[0].name)).toBeDefined();
  });
});

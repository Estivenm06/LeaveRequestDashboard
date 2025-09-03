"use client";
import { useMemo } from "react";

import Card from "@/app/ui/components/Card";
import { useStore } from "@/app/ui/store/StoreContext";

const Home = () => {
  const { data } = useStore();

  const total = data.length;
  const { approved, pending } = data.reduce(
    (acc, employee) => {
      if (employee.status === "APPROVED") acc.approved += 1;
      if (employee.status === "PENDING") acc.pending += 1;
      return acc;
    },
    { approved: 0, pending: 0 }
  );

  let availabilty = Math.round((approved / total) * 100);
  const stats = useMemo(
    () => ({
      approved,
      pending,
      availabilty,
    }),
    [approved, pending, availabilty, total]
  );

  return (
    // Main Content
    <main className="flex-1 p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Welcome back!
        </h2>
        <p className="text-muted-foreground text-pretty">
          Here's what's happening with your team's leave requests today.
        </p>
      </div>
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card
          title="Total Requests"
          icon="document-text"
          number={data.length}
          borderColor="border-l-chart-1"
          content=""
        />
        <Card
          title="Pending Approval"
          icon="away"
          number={pending}
          borderColor="border-l-chart-2"
          content="Requires your attention"
        />
        <Card
          title="Approved"
          icon="accept"
          number={approved}
          borderColor="border-l-chart-3"
          content=""
        />
        <Card
          title="Team Availability"
          icon="group"
          number={`${availabilty}%`}
          borderColor="border-l-chart-4"
          content="Current team capacity"
        />
      </div>
    </main>
  );
};

export { Home };

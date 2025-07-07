import { Employee } from "./definitions";

export async function getData() {
  const employeesData: Employee[] = await fetch(
    "https://67f551e6913986b16fa426fd.mockapi.io/api/v1/leave_requests"
  ).then((res) => res.json());
  return employeesData;
}

export async function getEmployeeData(id: string) {
  const employeeData: Employee = await fetch(
    `https://67f551e6913986b16fa426fd.mockapi.io/api/v1/leave_requests/${id}`
  ).then((res) => res.json());
  return employeeData;
}

export async function insertEmployeeData(data: Employee) {
  const response = await fetch(
    "https://67f551e6913986b16fa426fd.mockapi.io/api/v1/leave_requests",
    {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
}

export async function updateEmployeeData(id: string, data: Employee) {
  const response = await fetch(
    `https://67f551e6913986b16fa426fd.mockapi.io/api/v1/leave_requests/${id}`,
    {
      method: "PUT",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
}

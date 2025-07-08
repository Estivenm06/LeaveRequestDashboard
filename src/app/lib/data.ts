import { DATABASE_URL } from "@/utils/config";
import { Employee } from "./definitions";

const databaseURL: string = DATABASE_URL();

export async function getData() {
  const employeesData: Employee[] = await fetch(databaseURL).then((res) =>
    res.json()
  );
  return employeesData;
}

export async function getEmployeeData(id: string) {
  const employeeData: Employee = await fetch(`${databaseURL}/${id}`).then(
    (res) => res.json()
  );
  return employeeData;
}

export async function insertEmployeeData(data: Employee) {
  const response = await fetch(databaseURL, {
    method: "POST",
    headers: {
      contentType: "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function updateEmployeeData(id: string, data: Employee) {
  const response = await fetch(`${databaseURL}/${id}`, {
    method: "PUT",
    headers: {
      contentType: "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

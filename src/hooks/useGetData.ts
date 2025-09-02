"use client";
import { useEffect, useState } from "react";

import { DATABASE_URL } from "@/utils/config";
import { Employee } from "@/app/lib/definitions";

const useGetData = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const databaseURL = DATABASE_URL();

  useEffect(() => {
    (async () => {
      const employeesLocal = localStorage.getItem('employeesLocal');
      if(employeesLocal){
        setData(JSON.parse(employeesLocal));
        setLoading(false);
        return;
      }

      await fetch(databaseURL)
        .then(async (response) => {
          if (response.ok) {
            const data: Employee[] = await response.json();
            setData(data);
            setLoading(false);
          }
        })
        .catch((error: Error) => {
          setLoading(false);
          setError(error.message);
        });
      setLoading(false);
    })();
  }, [  ]);
  return { data, loading, error };
};

export { useGetData };

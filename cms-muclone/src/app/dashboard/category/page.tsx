"use client";

import { fetchCategories } from "@/app/actions/category.actions";
import DataTable from "@/components/DataTable";
import { CategoryList } from "@/lib/types/category.types";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState<CategoryList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCategoryData() {
      setLoading(true);
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.log(error, "Error Fetching Category Data");
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryData();
  }, []);

  const TableHeaders = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
  ] as GridColDef[];

  return (
    <main className="tw-w-full tw-h-full tw-bg-white tw-flex tw-flex-col tw-rounded-lg tw-p-3">
      <div style={{ height: "100%" }}>
        <DataTable rows={categories} columns={TableHeaders} loading={loading} />
      </div>
    </main>
  );
}

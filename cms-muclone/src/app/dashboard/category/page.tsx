"use client";

import { fetchCategories } from "@/app/actions/category.actions";
import DataTable from "@/components/DataTable";
import { CmsCategoryList } from "@/lib/types/category.types";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState<CmsCategoryList[]>([]);

  useEffect(() => {
    async function fetchCategoryData() {
      const data = await fetchCategories();

      setCategories(data);
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
    <main className="tw-w-full tw-h-full tw-bg-white tw-rounded-lg tw-p-3">
      <div className="tw-h-[500px]">
        <DataTable rows={categories} columns={TableHeaders} />
      </div>
    </main>
  );
}

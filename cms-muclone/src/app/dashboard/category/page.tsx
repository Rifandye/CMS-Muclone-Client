"use client";

import { fetchCategories } from "@/app/actions/category.actions";
import DataTable from "@/components/DataTable";
import { BasePaginationResponse } from "@/lib/types/base.types";
import { CategoryList } from "@/lib/types/category.types";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState<
    BasePaginationResponse<CategoryList[]>
  >({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
    pageSize: 0,
    data: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const fetchCategoriesData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const data = await fetchCategories(page, pageSize);
      setCategories(data);
    } catch (error) {
      console.error(error, "Error Fetching Category Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesData(paginationModel.page + 1, paginationModel.pageSize);
  }, [paginationModel]);

  const handlePaginationChange = (newPagination: {
    page: number;
    pageSize: number;
  }) => {
    setPaginationModel(newPagination);
  };

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
        <DataTable
          paginationModeProp="server"
          rows={categories}
          columns={TableHeaders}
          loading={loading}
          onPaginationModelChange={handlePaginationChange}
          paginationModel={paginationModel}
        />
      </div>
    </main>
  );
}

"use client";

import { fetchCategories } from "@/app/actions/category.actions";
import RoleChip from "@/components/Chips/RoleChip";
import DataTable from "@/components/DataTable";
import CreateCategory from "@/components/Modal/Category/createCategory";
import { useRenderAction } from "@/lib/contexts/ActionContext";
import { BasePaginationResponse } from "@/lib/types/base.types";
import { CategoryList } from "@/lib/types/category.types";
import { Stack } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Category() {
  const { setButtonsConfig } = useRenderAction();

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
  const [createModal, setCreateModal] = useState<boolean>(false);

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

  useEffect(() => {
    setButtonsConfig([
      {
        type: "create",
        onClick: handleCreateModal,
      },
    ]);

    return () => setButtonsConfig([]);
  }, [setButtonsConfig]);

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
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "createdByUser",
      headerName: "Created By",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const { firstName, lastName, role } = params.row.createdByUser;

        return (
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{`${firstName} ${lastName}`}</span>
            <RoleChip value={role} />
          </Stack>
        );
      },
    },
  ] as GridColDef[];

  const handleCreateModal = () => {
    setCreateModal(true);
  };

  const handleCloseModal = () => {
    setCreateModal(false);
  };

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
      <CreateCategory
        open={createModal}
        onClose={handleCloseModal}
        refetchData={() =>
          fetchCategoriesData(
            paginationModel.page + 1,
            paginationModel.pageSize
          )
        }
      />
    </main>
  );
}

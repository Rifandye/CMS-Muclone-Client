"use client";

import { fetchMerchandises } from "@/app/actions/merchandise.actions";
import RoleChip from "@/components/Chips/RoleChip";
import DataTable from "@/components/DataTable";
import CreateMerchandise from "@/components/Modal/Merchandise/CreateMerchandise";
import { useRenderAction } from "@/lib/contexts/ActionContext";
import { BasePaginationResponse } from "@/lib/types/base.types";
import { MerchandiseList } from "@/lib/types/merchandise.types";
import { formatDate, formatCurrency } from "@/lib/utils/format";
import { Stack } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Merchandise() {
  const router = useRouter();
  const { setButtonsConfig } = useRenderAction();

  const [merchandises, setMerchandises] = useState<
    BasePaginationResponse<MerchandiseList[]>
  >({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
    pageSize: 0,
    data: [],
  });
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const fetchMerchandiseData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const data = await fetchMerchandises(page, pageSize);
      setMerchandises(data);
    } catch (error) {
      console.error(error, "Error Fetching Merchandise Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMerchandiseData(paginationModel.page + 1, paginationModel.pageSize);
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
      field: "slug",
      headerName: "Slug",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      valueGetter: (item: number) => {
        return formatCurrency(item);
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      valueGetter: (item: string) => {
        return formatDate(item, { withTime: true });
      },
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

  const handleRowClick = (params: { row: unknown }) => {
    const merchandise = params.row as { slug: string };
    router.push(`/dashboard/merchandise/${merchandise.slug}`);
  };

  return (
    <main className="tw-w-full tw-h-full tw-bg-white tw-flex tw-flex-col tw-gap-3 tw-rounded-lg tw-p-3">
      <div className="tw-h-full">
        <DataTable
          paginationModeProp="server"
          rows={merchandises}
          columns={TableHeaders}
          loading={loading}
          onPaginationModelChange={handlePaginationChange}
          paginationModel={paginationModel}
          onRowClick={handleRowClick}
        />
      </div>
      <CreateMerchandise
        open={createModal}
        onClose={handleCloseModal}
        refetchData={() =>
          fetchMerchandiseData(
            paginationModel.page + 1,
            paginationModel.pageSize
          )
        }
      />
    </main>
  );
}

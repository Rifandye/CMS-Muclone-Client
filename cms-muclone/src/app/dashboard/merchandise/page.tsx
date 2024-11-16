"use client";

import { fetchMerchandises } from "@/app/actions/merchandise.actions";
import Modal from "@/components/dashboard/ui/Modal";
import DataTable from "@/components/DataTable";
import { MerchandiseList } from "@/lib/types/merchandise.types";
import { formatDate, formatCurrency } from "@/lib/utils/format";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Merchandise() {
  const [merchandises, setMerchandises] = useState<MerchandiseList[]>([]);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMerchandiseData() {
      setLoading(true);
      try {
        const data = await fetchMerchandises();
        setMerchandises(data);
      } catch (error) {
        console.error(error, "Error Fetching Merchandise Data");
      } finally {
        setLoading(false);
      }
    }

    fetchMerchandiseData();
  }, []);

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
  ];

  function onClickCreate() {
    setCreateModal(true);
  }

  return (
    <main className="tw-w-full tw-h-full tw-bg-white tw-flex tw-flex-col tw-gap-3 tw-rounded-lg tw-p-3">
      <div>
        <Button variant="contained" size="small" onClick={onClickCreate}>
          Create Merchandise
        </Button>
      </div>
      <div className="tw-h-full">
        <DataTable
          rows={merchandises}
          columns={TableHeaders}
          loading={loading}
        />
      </div>
      <Modal open={createModal}></Modal>
    </main>
  );
}

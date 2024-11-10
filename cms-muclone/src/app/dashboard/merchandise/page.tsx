"use client";

import { fetchMerchandises } from "@/app/actions/merchandise.actions";
import Modal from "@/components/dashboard/ui/Modal";
import DataTable from "@/components/DataTable";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Merchandise() {
  const [merchandises, setMerchandises] = useState([]);
  const [createModal, setCreateModal] = useState(false);

  useEffect(() => {
    async function fetchMerchandiseData() {
      const data = await fetchMerchandises();

      setMerchandises(data);
    }

    fetchMerchandiseData();
  }, []);

  const TableHeaders = [
    {
      field: "id",
      headerName: "No",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "slug",
      headerName: "Slug",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
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
      <div className="tw-h-[500px]">
        <DataTable rows={merchandises} columns={TableHeaders} />
      </div>
      <Modal open={createModal}></Modal>
    </main>
  );
}

"use client";

import { IMerchandise } from "@/lib/types/merchandise.types";
import { FileUpload } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UploadImages from "../Modal/Merchandise/UploadImages";

export default function MerchandiseImages({ data }: { data: IMerchandise }) {
  const [uploadImages, setUploadImages] = useState<boolean>(false);

  const hasImages = data.Images && data.Images.length > 0;

  const handleOpenModal = () => {
    setUploadImages(true);
  };

  const handleCloseModal = () => {
    setUploadImages(false);
  };

  return (
    <main>
      <div className="tw-border tw-border-[#e2e2e2] tw-rounded-lg tw-gap-5 tw-p-4 tw-flex tw-flex-col">
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-justify-between">
            <p className="tw-text-sm tw-font-semibold">Images</p>
            <Button
              startIcon={<FileUpload />}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              onClick={handleOpenModal}
            >
              Add Images
            </Button>
          </div>
          <Divider />
        </div>
        {hasImages ? (
          <div className="tw-grid tw-grid-cols-6 tw-gap-3">
            {data.Images.map((item, index) => (
              <div
                className="tw-border tw-border-[#e2e2e2] tw-rounded-lg tw-h-[300px] tw-w-[200px] tw-relative tw-overflow-hidden"
                key={index}
              >
                <Image fill={true} alt={item.id} src={item.url} />
              </div>
            ))}
          </div>
        ) : (
          <div className="tw-flex tw-justify-center tw-items-center tw-h-[200px]">
            <p className="tw-text-gray-500">No images available</p>
          </div>
        )}
        <UploadImages
          id={data.id}
          open={uploadImages}
          onClose={handleCloseModal}
        />
      </div>
    </main>
  );
}

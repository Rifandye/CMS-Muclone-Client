"use client";

import { ArrowBackIosNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HeaderBar() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <div className="tw-flex-1 tw-flex tw-items-center">
      <div className="tw-ml-3">
        <Button
          size="small"
          onClick={handleBackButton}
          sx={{ color: "black", borderColor: "black" }}
        >
          <ArrowBackIosNew fontSize="small" />
        </Button>
      </div>
      {/* <div className="tw-flex-2 tw-bg-red-700 tw-flex tw-items-center tw-w-[300px] tw-rounded-bl-full">
                <Button>Test</Button>
                <Button>Test</Button>
                <Button>Test</Button>
              </div> */}
    </div>
  );
}

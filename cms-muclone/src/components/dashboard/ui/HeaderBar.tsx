"use client";

import { useRenderAction } from "@/lib/contexts/ActionContext";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

export default function HeaderBar() {
  const router = useRouter();
  const { buttonsConfig, setButtonsConfig } = useRenderAction();

  useEffect(() => {
    setButtonsConfig([]);
  }, [setButtonsConfig]);

  const handleBackButton = () => {
    router.back();
  };

  return (
    <main className="tw-flex tw-h-16">
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
      </div>
      <div
        className="tw-flex-2 tw-bg-[#f7f7f7] tw-flex tw-items-center tw-w-auto tw-rounded-bl-lg tw-space-x-4 tw-px-4"
        style={{ boxShadow: "inset 0 10px 24px rgba(0, 0, 0, 0.1)" }}
      >
        <div>
          {buttonsConfig.map((button, index) => (
            <Button
              sx={{ color: "black", borderColor: "black" }}
              key={index}
              onClick={button.onClick}
            >
              {button.type === "create" ? (
                <AddIcon fontSize="small" />
              ) : button.type === "edit" ? (
                <EditIcon fontSize="small" />
              ) : null}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}

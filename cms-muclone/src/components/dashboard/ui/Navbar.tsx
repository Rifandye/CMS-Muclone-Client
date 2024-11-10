"use client";

import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <main className="tw-bg-red-700 tw-w-full tw-h-16 tw-flex tw-items-center tw-px-10">
      <div className="">
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Red Devils Logo"
        />
      </div>
      <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center">
        <Button
          variant="text"
          size="small"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Merchandise
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link href="/dashboard/merchandise">
            <MenuItem>Merchandise</MenuItem>
          </Link>
          <Link href="/dashboard/category">
            <MenuItem>Caregory</MenuItem>
          </Link>
        </Menu>
      </div>
      <div className="tw-flex tw-items-center tw-justify-end">
        This is Profile
      </div>
    </main>
  );
}

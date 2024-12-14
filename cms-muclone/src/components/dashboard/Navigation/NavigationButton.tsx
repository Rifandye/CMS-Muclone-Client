import { Storefront } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  route: string;
  label: string;
}

export default function NavigationButton({
  isHovered,
  title,
  menuItems,
}: {
  isHovered: boolean;
  title: string;
  menuItems: MenuItem[];
}) {
  const [expanded, setExpanded] = useState(false);
  const handleAccordionToggle = () => {
    setExpanded((prev) => !prev);
  };
  useEffect(() => {
    if (!isHovered) {
      setExpanded(false);
    }
  }, [isHovered]);

  return (
    <Accordion
      disableGutters
      square
      expanded={expanded}
      onClick={handleAccordionToggle}
      className="tw-rounded-md hover:tw-bg-gray-400"
      sx={{
        "&:before": { display: "none" },
        background: "#d1d5db",
      }}
    >
      <AccordionSummary
        className={`${isHovered ? "" : "tw-flex tw-justify-center tw-items-center"}`}
      >
        <Storefront />
        {isHovered && (
          <p
            style={{
              marginLeft: "10px",
              display: isHovered ? "inline" : "none",
            }}
          >
            {title}
          </p>
        )}
      </AccordionSummary>
      <AccordionDetails>
        {menuItems.map((item, index) => (
          <Link href={item.route} key={index} passHref>
            <Box className="tw-mt-2 tw-p-2 tw-bg-gray-200 tw-rounded">
              {item.label}
            </Box>
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

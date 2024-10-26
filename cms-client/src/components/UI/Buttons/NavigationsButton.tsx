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
  label: string;
  route: string;
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
    <>
      <Accordion
        disableGutters
        square
        expanded={expanded}
        onClick={handleAccordionToggle}
        className="rounded-md hover:bg-gray-400"
        sx={{
          "&:before": { display: "none" },
          background: "#d1d5db",
        }}
      >
        <AccordionSummary>
          <Storefront />
          <p
            style={{
              display: isHovered ? "block" : "none",
              marginLeft: "10px",
            }}
          >
            {title}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {menuItems.map((item, index) => (
            <Link href={item.route} key={index} passHref>
              <Box className="mt-2 p-2 bg-gray-200 rounded">{item.label}</Box>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

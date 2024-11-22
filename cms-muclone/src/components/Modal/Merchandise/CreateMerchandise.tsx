import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Modal from "../Modal";
import { useActionState, useEffect, useState } from "react";
import { CreateMerchandiseState } from "@/lib/types/merchandise.types";
import { createMerchandise } from "@/app/actions/merchandise.actions";
import { LoadingButton } from "@mui/lab";

const initialState: CreateMerchandiseState = {
  message: "",
  status: false,
};

export default function CreateMerchandise({
  open,
  onClose,
  refetchData,
}: {
  open?: boolean;
  onClose?: () => void;
  refetchData?: () => void;
}) {
  const [categories, setCategories] = useState<string[]>([]);
  const [state, formAction, isPending] = useActionState(
    createMerchandise,
    initialState
  );

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;

    setCategories(typeof value === "string" ? value.split(",") : value);
  };

  const item = [
    "Men's Apparel",
    "Women's Apparel",
    "Kids' Apparel",
    "Jerseys",
    "Training Gear",
    "Footwear",
    "Accessories",
    "Bags & Backpacks",
    "Home & Garden",
    "Collectibles & Memorabilia",
    "Toys & Games",
    "Media & Books",
    "Fan Gear",
    "Personalized Merchandise",
    "Sale & Clearance",
  ];

  useEffect(() => {
    if (state.status) {
      if (onClose) onClose();
      if (refetchData) refetchData();
    }
  }, [state.status, onClose, refetchData]);

  return (
    <main>
      <Modal
        title="Create Merchandise"
        open={open}
        onClose={onClose}
        loading={isPending}
      >
        <form
          id="merchandise-form"
          className="tw-flex tw-flex-col tw-h-full tw-mt-5"
          action={formAction}
        >
          <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-4">
            {state?.message && (
              <p className="tw-text-red-500">{state?.message}</p>
            )}
            <TextField id="name" name="name" label="Name" color="error" />
            <TextField id="slug" name="slug" label="Slug" color="error" />
            <TextField
              id="stock"
              name="stock"
              label="Stock"
              type="number"
              color="error"
            />
            <TextField
              id="price"
              name="price"
              label="Price"
              type="number"
              color="error"
            />
            <FormControl>
              <InputLabel id="categories" color="error">
                Categoy
              </InputLabel>
              <Select
                multiple
                id="categories"
                labelId="categories"
                name="categories"
                label="Category"
                color="error"
                value={categories}
                onChange={handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {item.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              multiline
              id="description"
              name="description"
              label="Description"
              color="error"
              rows={4}
            />
          </div>
          <div className="tw-flex tw-justify-end">
            <LoadingButton
              type="submit"
              variant="contained"
              color="error"
              loading={isPending}
            >
              Submit
            </LoadingButton>
          </div>
        </form>
      </Modal>
    </main>
  );
}

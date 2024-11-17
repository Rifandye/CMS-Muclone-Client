import {
  Box,
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Modal from "../Modal";
import { useActionState, useState } from "react";
import { CreateMerchandiseState } from "@/lib/types/merchandise.types";
import { createMerchandise } from "@/app/actions/merchandise.actions";

const initialState: CreateMerchandiseState = {
  message: "",
  status: false,
};

export default function CreateMerchandise({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
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

  const item = ["Test", "Tost"];

  return (
    <main>
      <Modal
        title="Create Merchandise"
        open={open}
        onClose={onClose}
        loading={isPending}
      >
        <form action={formAction}>
          <div className="tw-flex tw-flex-col tw-gap-4">
            {state?.message && (
              <p className="tw-text-red-500">{state?.message}</p>
            )}
            <TextField required id="name" name="name" label="Name" />
            <TextField required id="slug" name="slug" label="Slug" />
            <TextField
              required
              id="stock"
              name="stock"
              label="Stock"
              type="number"
            />
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              type="number"
            />
            <Select
              multiple
              id="categories"
              name="categories"
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
            <TextField
              required
              multiline
              id="description"
              name="description"
              label="Description"
              rows={4}
            />
          </div>
        </form>
      </Modal>
    </main>
  );
}

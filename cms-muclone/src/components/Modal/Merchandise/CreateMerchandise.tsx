import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from "@mui/material";
import Modal from "../Modal";
import { SyntheticEvent, useActionState, useEffect, useState } from "react";
import { createMerchandise } from "@/app/actions/merchandise.actions";
import { LoadingButton } from "@mui/lab";
import { initialState } from "@/lib/utils/constant";
import { fetchCategorySelection } from "@/app/actions/category.actions";
import { CategoryList } from "@/lib/types/category.types";

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
  const [state, formAction, pending] = useActionState(
    createMerchandise,
    initialState
  );
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [categoryOptions, setCategoryOptions] = useState<CategoryList[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;

    setCategories(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchCategorySelection();
        setCategoryOptions(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (state.success) {
      setOpenSnackbar(true);
      if (onClose) onClose();
      if (refetchData) refetchData();
      state.success = undefined;
      setCategories([]);
    }

    if (state.success === false) {
      setOpenSnackbar(true);
      state.success = undefined;
    }
  }, [state.success, state.message, onClose, refetchData, state]);

  const handleSnackbarClose = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <main>
      <Modal
        title="Create Merchandise"
        open={open}
        onClose={onClose}
        loading={pending}
      >
        <form
          id="merchandise-form"
          className="tw-flex tw-flex-col tw-h-full tw-mt-5"
          action={formAction}
        >
          <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-4">
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
                    {selected.map((id) => {
                      const category = categoryOptions.find(
                        (option) => option.id === id
                      );
                      return category ? (
                        <Chip key={id} label={category.name} />
                      ) : null;
                    })}
                  </Box>
                )}
              >
                {categoryOptions.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
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
              loading={pending}
            >
              Submit
            </LoadingButton>
          </div>
        </form>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={state.message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </main>
  );
}

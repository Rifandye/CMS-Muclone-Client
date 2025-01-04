import Modal from "../Modal";
import { Snackbar, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { SyntheticEvent, useActionState, useEffect, useState } from "react";
import { createCategory } from "@/app/actions/category.actions";
import { initialState } from "@/lib/utils/constant";

export default function CreateCategory({
  open,
  onClose,
  refetchData,
}: {
  open?: boolean;
  onClose?: () => void;
  refetchData?: () => void;
}) {
  const [state, formAction, isPending] = useActionState(
    createCategory,
    initialState
  );
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (state.success) {
      setOpenSnackbar(true);
      if (onClose) onClose();
      if (refetchData) refetchData();
      state.success = undefined;
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
        title="Create Category"
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
            <TextField id="name" name="name" label="Name" color="error" />
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

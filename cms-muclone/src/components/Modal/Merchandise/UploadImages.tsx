import { FormEvent, SyntheticEvent, useState } from "react";
import Modal from "../Modal";
import { MuiFileInput } from "mui-file-input";
import { LoadingButton } from "@mui/lab";
import { uploadImages } from "@/app/actions/merchandise.actions";
import { Snackbar } from "@mui/material";

export default function UploadImages({
  id,
  open,
  onClose,
}: {
  id: string;
  open?: boolean;
  onClose?: () => void;
}) {
  const [images, setImages] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleChange = (index: number, newValue: File | null) => {
    setImages((prev) => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validFiles = images.filter((file) => file !== null) as File[];

    if (!validFiles.length) {
      console.log("No files selected");
      return;
    }

    setLoading(true);
    try {
      const result = await uploadImages(id, validFiles);

      if (onClose) onClose();
      setImages([null, null, null, null]);
      setOpenSnackbar(true);

      return result;
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false);
    }
  };

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
        title="Upload Thumbnail"
        open={open}
        onClose={onClose}
        loading={loading}
      >
        <form
          onSubmit={handleSubmit}
          className="tw-flex tw-flex-col tw-h-full tw-mt-5"
        >
          <div className="tw-flex tw-flex-1 tw-flex-col tw-gap-4">
            {images.map((file, index) => (
              <MuiFileInput
                key={index}
                label={`File ${index + 1}`}
                value={file}
                onChange={(newValue) => handleChange(index, newValue)}
              />
            ))}
          </div>
          <div className="tw-flex tw-justify-end">
            <LoadingButton
              type="submit"
              variant="contained"
              color="error"
              loading={loading}
              disabled={loading || images.every((file) => file === null)}
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
        message="Upload Successful"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </main>
  );
}

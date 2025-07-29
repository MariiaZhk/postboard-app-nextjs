import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export default function ConfirmDialog({ open, onClose, onConfirm, title }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions sx={{ justifyContent: "center", gap: 4 }}>
        <Button onClick={onClose} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

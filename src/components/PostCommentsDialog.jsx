import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCommentsByPostId } from "@/store/selectors";

export function PostCommentsDialog({ id, open, onClose }) {
  const theme = useTheme();
  const comments = useSelector(selectCommentsByPostId);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Comments
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {comments.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                borderBottom: `1px solid ${theme.palette.text.secondary}`,
                pb: 1,
              }}
            >
              <Typography fontWeight="medium" variant="subtitle1">
                {comment.name}
              </Typography>

              <Typography variant="body2">{comment.body}</Typography>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

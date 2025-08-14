import { Box, Typography } from "@mui/material";

export function CommentsList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2, // відстань між коментарями
      }}
    >
      {comments.map((comment) => (
        <Box
          key={comment.id}
          sx={{ p: 1, border: "1px solid #ccc", borderRadius: 1 }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {comment.name} {/* або title, якщо у тебе поле називається title */}
          </Typography>
          <Typography variant="body2">{comment.body}</Typography>
        </Box>
      ))}
    </Box>
  );
}

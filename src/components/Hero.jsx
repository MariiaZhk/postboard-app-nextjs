"use client";
import Link from "next/link";
import { Box, Button, Card, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        pt: 8,
        px: 2,
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 960,
          width: "100%",
          textAlign: "center",
          p: 5,
          borderRadius: 3,
          background: theme.custom.heroGradient,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Ласкаво просимо до DOiT MVP
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Button
            component={Link}
            href="/posts"
            variant="contained"
            color="primary"
            sx={{ height: 40, px: 2.5 }}
            startIcon={<FormatListBulletedIcon />}
          >
            Переглянути пости
          </Button>

          <Button
            component={Link}
            href="/posts/create"
            variant="outlined"
            color="primary"
            sx={{ height: 40, px: 2.5 }}
            startIcon={
              <AddIcon
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  color: theme.palette.background.default,
                }}
              />
            }
          >
            Додати пост
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

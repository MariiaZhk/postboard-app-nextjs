"use client";
import Link from "next/link";
import { Box, Button, Card, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          background:
            theme.palette.mode === "light"
              ? "linear-gradient(130deg, #cee8f8 20%, #f8d8eb 110%)"
              : "linear-gradient(130deg, #2f3536 35%, #581fa2 110%)",
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Ласкаво просимо до DOiT MVP
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Link href="/posts" passHref>
            <Button
              variant="contained"
              color="primary"
              startIcon={<MenuIcon />}
              sx={{ height: 40, px: 2.5 }}
            >
              Переглянути пости
            </Button>
          </Link>

          <Link href="/posts/create" passHref>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                height: 40,
                px: 2.5,
              }}
              startIcon={
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon sx={{ opacity: 0 }} />
                </Box>
              }
            >
              Додати пост
            </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

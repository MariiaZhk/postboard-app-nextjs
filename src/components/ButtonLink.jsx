// import { Box, Card, Typography } from "@mui/material";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import AddIcon from "@mui/icons-material/Add";
// import { useTheme } from "@mui/material/styles";
// import ButtonLink from "./ButtonLink"; // Імпортуємо спільний компонент

// export default function Hero() {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center",
//         pt: 8,
//         px: 2,
//       }}
//     >
//       <Card
//         elevation={0}
//         sx={{
//           maxWidth: 960,
//           width: "100%",
//           textAlign: "center",
//           p: 5,
//           borderRadius: 3,
//           background: theme.custom.heroGradient,
//         }}
//       >
//         <Typography variant="h3" sx={{ mb: 2 }}>
//           Ласкаво просимо до DOiT MVP
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 4 }}>
//           Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
//         </Typography>

//         <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
//           <ButtonLink
//             href="/posts"
//             label="Переглянути пости"
//             icon={<FormatListBulletedIcon />}
//             variant="contained"
//             color="primary"
//           />

//           <ButtonLink
//             href="/posts/create"
//             label="Додати пост"
//             icon={
//               <AddIcon
//                 sx={{ fontSize: 20, color: theme.palette.background.default }}
//               />
//             }
//             variant="outlined"
//           // color="primary"
//             startIconBgColor="primary.main"
//           />
//         </Box>
//       </Card>
//     </Box>
//   );
// }

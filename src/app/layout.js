import NavBar from "@/components/NavBar";
import StoreProvider from "../components/StoreProvider";
import { Rubik } from "next/font/google";
import { CssBaseline } from "@mui/material";

export const metadata = {
  title: "Posts Board App",
  description: "DOiT posts board application",
  icons: {
    icon: "/favicon.png",
  },
};

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <StoreProvider>
          <CssBaseline />
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

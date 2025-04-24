import { Rubik } from "next/font/google";
import { CssBaseline } from "@mui/material";
import StoreProvider from "../components/StoreProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={["light", "dark"]}
          >
            <CssBaseline />
            <NavBar />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

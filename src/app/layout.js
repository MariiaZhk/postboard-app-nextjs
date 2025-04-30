import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import StoreProvider from "@/components/StoreProvider";

export const metadata = {
  title: "Posts Board App",
  description: "DOiT posts board application",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>
            <NavBar />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

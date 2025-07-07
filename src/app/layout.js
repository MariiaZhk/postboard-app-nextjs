import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar/NavBar.jsx";
import "@/styles/globals.css";
import StoreProvider from "@/components/StoreProvider";
import { NavBarProvider } from "@/components/NavBar/NavBarContext";

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
            <NavBarProvider>
              <NavBar />
              {children}
            </NavBarProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

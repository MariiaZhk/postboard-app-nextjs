import NavBar from "@/components/NavBar";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Post Board App",
  description: "DOiT MVP posts board application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

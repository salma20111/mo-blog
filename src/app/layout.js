import NavBar from "@/componants/NavBar/NavBar";
import "./globals.css";


export const metadata = {
  title: "Mo blog",
  description: "this blog for learning programing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NavBar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

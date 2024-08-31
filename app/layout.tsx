import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Momoka's Portfolio",
  description: "ももかのポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

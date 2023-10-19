import Footer from "@/components/ui/Footer/Footer";
import Providers from "@/lib/Providers";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Excellence Builders",
  description: "Excellience Builder Project it Provides ..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main className=" min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

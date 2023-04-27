import "./globals.css";
import { Inter } from "next/font/google";
import ProvidersWrapper from "./providersWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login App",
  description: "Generated by mahmoud khalil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

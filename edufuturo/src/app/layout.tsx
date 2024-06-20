import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/page";
import Footer from "./components/footer/page";

export { Header }; // Export the 'Header' component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduFuturo",
  description: "Aplicativo para seleção de escolas dos alunos em continuidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
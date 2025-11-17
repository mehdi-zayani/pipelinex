import { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "PipelineX Frontend",
  description: "Minimal Next.js + Tailwind frontend for PipelineX",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}

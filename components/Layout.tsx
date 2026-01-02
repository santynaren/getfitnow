import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workout Tracker | Daily Exercise Plan",
  description:
    "Track your daily workout routine with timer and progress tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

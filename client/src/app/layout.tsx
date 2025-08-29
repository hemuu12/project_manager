import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";


export const metadata: Metadata = {
  title: "Project Manager",
  description:
    "A modern project management app to organize your projects, manage tasks, and collaborate with your team efficiently.",
  keywords: "project management, tasks, team collaboration, productivity, project tracking",
  openGraph: {
    title: "Project Manager",
    description:
      "Manage projects and tasks seamlessly. Collaborate with your team and boost productivity with our Project Manager app.",
    type: "website",
    locale: "en_US",
    siteName: "Project Manager",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"    >
      <body
        suppressHydrationWarning
      >
      <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

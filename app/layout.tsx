import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomClerkProvider } from "./clerk-provider";
import { Toaster } from "@/components/ui/toaster";
import { UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomClerkProvider>
              {children}
            <Toaster />
          </CustomClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

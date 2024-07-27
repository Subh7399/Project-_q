import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/theme-provider";
import Layout from "@/components/ui/layout";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Q",
  description: "Prepapre for your next exam with our Project Q mock tests!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        enableSystem={true}
	      themes={[ "corporate", "business" ]}>
          <NextTopLoader showSpinner={false} color="oklch(var(--p))" zIndex={9999} />
          <Layout>
            {children}
          </Layout>
      </ThemeProvider>   
        </body>
    </html>
  );
}

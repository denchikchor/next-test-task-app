import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "White Digital Test",
  description: "Next + Tailwind + shadcn/ui + TanStack Query",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

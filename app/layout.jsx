import "./globals.css";

export const metadata = {
  title: "SaaS - Landing Page",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-body bg-cover bg-no-repeat">
        {children}
      </body>
    </html>
  );
}

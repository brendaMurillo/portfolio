import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Brenda Viviana Murillo",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-600">
            © {new Date().getFullYear()} Brenda Viviana Murillo
          </div>
        </footer>
      </body>
    </html>
  );
}
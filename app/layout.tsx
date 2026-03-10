import "./globals.css";
import Nav from "../components/Nav";
import Container from "../components/Container";

export const metadata = {
  title: "Full Name",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />

        <main className="py-20">
          <Container>{children}</Container>
        </main>

        <footer className="divider">
          <Container>
            <div className="py-8 text-sm opacity-80">
              © {new Date().getFullYear()} Full Name
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
import NavLinks from '@/app/ui/dashboard/header';
import SMLinks from '@/app/ui/dashboard/footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <body>
              <NavLinks />
              {children}
              <SMLinks />
          </body>
    </html>
  );
}
